'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing SubCategories
      return queryInterface.bulkInsert('SubCategories', [{
         subcategory_name: 'subcat1',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'subcat2',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'subcat3',
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'subcat4',
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('SubCategories',
      [{
         subcategory_name: 'subcat1',
      }, {
         subcategory_name: 'subcat2',
      }, {
         subcategory_name: 'subcat3',
      }, {
         subcategory_name: 'subcat4',
      }], {});
   }
};
