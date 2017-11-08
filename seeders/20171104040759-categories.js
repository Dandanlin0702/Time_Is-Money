'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      // Testing Categories
      return queryInterface.bulkInsert('Categories', [{
         category_name: 'cat1',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'cat2',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'cat3',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'cat4',
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('Categories',
      [{
        category_name: 'cat1'
     }, {
        category_name: 'cat2'
     }, {
        category_name: 'cat3'
     }, {
        category_name: 'cat4'
     }], {});
   }
};
