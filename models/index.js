const Sequelize = require('sequelize');
const createGameModel = require('./game');
const createCategoryModel = require('./category');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const Game = createGameModel(sequelize);
const Category = createCategoryModel(sequelize);
// const Question = createQuestionModel(sequelize);

Category.belongsTo(Game); // adds gameId to category

// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

module.exports = {
  Game: Game
}