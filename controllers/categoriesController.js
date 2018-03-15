var models = require('../models')
var Category = models.Category;

function index(req, res) {
  Category.findAll({ where: { gameId: req.params.game_id } }).then(function(categories) {
    res.json(categories);
  });
}

function create(req, res) {
  Category.create(req.body, function(err, category){
    res.json(category);
  });
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
  Category.destroy({ 
    where: { 
      id: req.params.category_id 
    } 
  }).then(category => {
    res.send("category deleted");
  }); 
}

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}