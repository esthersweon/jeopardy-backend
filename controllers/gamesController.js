var models = require('../models')
var Game = models.Game;
var Category = models.Category;

function index(req, res) {
  Game.findAll().then(games => {
    res.json(games);
  });
}

function create(req, res) {
  Game.create(req.body, function(game){
    res.json(game);
  });
}

function show(req, res) {
  Game.findById(req.params.game_id).then(game => {
    res.json(game);
  });  
}

function update(req, res) {
  Game.update(req.body, { 
    where: { 
      id: req.params.game_id 
    } 
  }).then(game => {
    res.json(game);
  });
}

function destroy(req, res) {
  Game.destroy({ 
    where: { 
      id: req.params.game_id 
    } 
  }).then(game => {
    res.send("game deleted");
  }); 
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}