var models = require('../models');
var Game = models.Game;
var Category = models.Category;
var Question = models.Question;

function index(req, res) {
  Category.findAll({ where: { gameId: req.params.game_id } }).then(function(categories) {
    res.json(categories);
  });
}

function create(req, res) {
  Category.create({ 
    gameId: req.params.game_id,
    ...req.body
  }).then(category => {
    res.json(category);
  })
}

function update(req, res) {
  Category.update(req.body, { 
    where: { 
      id: req.params.category_id 
    } 
  }).then(category => {
    res.json(category);
  });
}

function destroy(req, res) {
  Question.destroy({
    where: {
      categoryId: req.params.category_id
    }
  }).then(questionsDeleted => {
    Category.destroy({ 
      where: { 
        id: req.params.category_id 
      } 
    }).then(categoryDeleted => {
      res.json(categoryDeleted)
    }); 
  });
}

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}