'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkInsert('Users', [{
         username: 'risatoy',
         email: 'risatoy@test.com',
         password_hash: 'risatoy',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         username: 'heidiwu',
         email: 'heidiwu@test.com',
         password_hash: 'heidiwu',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'dandanlin',
         email: 'dandanlin@test.com',
         password_hash: 'dandanlin',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'elise',
         email: 'elise@test.com',
         password_hash: 'elise',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkDelete('Users', [{
         username: 'risatoy'
      }, {
         username: 'heidiwu'
      }, {
         username: 'dandanlin'
      }, {
         username: 'elise'
      }], {});
   }
};
