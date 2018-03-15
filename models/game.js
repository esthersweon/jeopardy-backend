module.exports = function(sequelize) {
  return sequelize.define('game', {
    title: Sequelize.STRING
  });
}