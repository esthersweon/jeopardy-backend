var models = require('../models')
var Question = models.Question;

function index(req, res) {
  Question.findAll({ where: { categoryId: req.params.category_id } }).then(function(questions) {
    res.json(questions);
  });
}

// function create(req, res) {
//   Question.create(req.body, function(err, question){
//     res.json(question);
//   });
// }

// function update(req, res) {
//   Question.update(req.body, { 
//     where: { 
//       id: req.params.question_id 
//     } 
//   }).then(question => {
//     res.json(question);
//   });
// }

// function destroy(req, res) {
//   Question.destroy({ 
//     where: { 
//       id: req.params.question_id 
//     } 
//   }).then(question => {
//     res.send("question deleted");
//   }); 
// }

module.exports = {
  index: index,
  // create: create,
  // update: update,
  // destroy: destroy
}