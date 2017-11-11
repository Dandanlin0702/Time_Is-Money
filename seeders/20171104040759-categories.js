'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      // Testing Categories
      return queryInterface.bulkInsert('Categories', [{
         category_name: 'Tutoring',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'Pet Services',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'Babysitting',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         category_name: 'Home Care',
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('Categories',
      [{
        category_name: 'Tutoring'
     }, {
        category_name: 'Pet Services'
     }, {
        category_name: 'Babysitting'
     }, {
        category_name: 'Home Care'
      }], {});
    }
};
