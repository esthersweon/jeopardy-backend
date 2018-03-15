var router = require('express').Router();
var gamesController = require('../controllers/gamesController');

router.get('/api/games', gamesController.index);
router.post('/api/games', gamesController.create);
router.get('/api/games/:game_id', gamesController.show);
router.put('/api/games/:game_id', gamesController.update);
router.delete('/api/games/:game_id', gamesController.destroy);

module.exports = router;