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
    return queryInterface.bulkInsert('Questions', [{
      text: 'What is HTML?',
      answer: '',
      points: 100,
      categoryId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      text: 'What is a div?',
      answer: '',
      points: 200,
      categoryId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      text: 'What is semantic HTML?',
      answer: '',
      points: 300,
      categoryId: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Questions', null, {})
  }
};
