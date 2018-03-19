var router = require('express').Router();
var gamesController = require('../controllers/gamesController');
var categoriesController = require('../controllers/categoriesController');
var questionsController = require('../controllers/questionsController');

router.get('/api/games', gamesController.index);
router.post('/api/games', gamesController.create);
router.get('/api/games/:game_id', gamesController.show);
router.put('/api/games/:game_id', gamesController.update);
router.delete('/api/games/:game_id', gamesController.destroy);

router.get('/api/games/:game_id/categories', categoriesController.index);
router.post('/api/games/:game_id/categories', categoriesController.create);
router.put('/api/categories/:category_id', categoriesController.update);
router.delete('/api/categories/:category_id', categoriesController.destroy);

router.get('/api/categories/:category_id/questions', questionsController.index);
router.post('/api/categories/:category_id/questions', questionsController.create);
router.put('/api/questions/:question_id', questionsController.update);
router.delete('/api/questions/:question_id', questionsController.destroy);

module.exports = router;