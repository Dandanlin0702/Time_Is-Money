'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Testing Categories
    return queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Education',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category_name: 'Pet Care',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category_name: 'Child Care',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category_name: 'Home Care',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category_name: 'Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        category_name: 'Miscellaneous',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Categories', [
      {
        category_name: 'Education'
      }, {
        category_name: 'Pet Care'
      }, {
        category_name: 'Child Care'
      }, {
        category_name: 'Home Care'
      }, {
        category_name: 'Technology'
      }, {
        category_name: 'Miscellaneous'
      }
    ], {});
  }
};
