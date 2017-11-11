'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing Services
      return queryInterface.bulkInsert('Services', [{
         service_name: 'service1',
         description: 'This is service 1',
         location: 'New York',
         UserId: 1,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'service2',
         description: 'This is service 2',
         location: 'Queens',
         UserId: 1,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'service3',
         description: 'This is service 3',
         location: 'Brooklyn',
         UserId: 1,
         SubCategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'service4',
         description: 'This is service 4',
         location: 'Staten Island',
         UserId: 2,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('Services', [{
         service_name: 'service1',
      }, {
         service_name: 'service2',
      }, {
         service_name: 'service3',
      }, {
         service_name: 'service4'
      }], {});
   }
};
