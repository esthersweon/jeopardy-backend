module.exports = function(sequelize) {
  return sequelize.define('category', {
    title: Sequelize.STRING
  });
}