'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [{
      title: 'HTML',
      createdAt : new Date(),
      updatedAt : new Date(),
      gameId : 1
    }, {
      title: 'CSS',
      createdAt : new Date(),
      updatedAt : new Date(),
      gameId : 1
    }, {
      title: 'JavaScript',
      createdAt : new Date(),
      updatedAt : new Date(),
      gameId : 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Categories', null, {})
  }
};
