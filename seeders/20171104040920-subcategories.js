'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing SubCategories
      return queryInterface.bulkInsert('SubCategories', [{
         subcategory_name: 'Math',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Science',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Pet Sitting',
         CategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Toddlers',
         CategoryId: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('SubCategories',
      [{
         subcategory_name: 'Math',
      }, {
         subcategory_name: 'Science',
      }, {
         subcategory_name: 'Pet Sitting',
      }, {
         subcategory_name: 'Toddlers',
      }], {});
   }
};
