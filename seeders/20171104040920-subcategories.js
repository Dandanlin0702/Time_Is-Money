'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing SubCategories
      return queryInterface.bulkInsert('SubCategories', [{
         subcategory_name: 'Math',
         category_id: Category.findOne({where: {category_name: 'Tutoring'}}),
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Science',
         category_id: Category.findOne({where: {category_name: 'Tutoring'}}),
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Pet Sitting',
         category_id: Category.findOne({where: {category_name: 'Pet Services'}}),
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Toddlers',
         category_id: Category.findOne({where: {category_name: 'Babysitting'}})
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
