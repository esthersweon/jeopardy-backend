var models = require('../models')
var Question = models.Question;

function index(req, res) {
  Question.findAll({ where: { categoryId: req.params.category_id } }).then(function(questions) {
    res.json(questions);
  });
}

function create(req, res) {
  Question.create({
    categoryId: req.params.category_id,
    ...req.body
  }).then(question => {
    res.json(question);
  });
}

function update(req, res) {
  Question.update(req.body, { 
    where: { 
      id: req.params.question_id 
    } 
  }).then(question => {
    res.json(question);
  });
}

function destroy(req, res) {
  Question.destroy({ 
    where: { 
      id: req.params.question_id 
    } 
  }).then(questionDeleted => {
    res.json(questionDeleted);
  }); 
}

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}