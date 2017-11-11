'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkInsert('Users', [{
         username: 'user1',
         email: 'user1@test.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         username: 'user2',
         email: 'user2@test.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'user3',
         email: 'user3@test.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'user4',
         email: 'user4@test.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkDelete('Users', [{
         username: 'user1'
      }, {
         username: 'user2'
      }, {
         username: 'user3'
      }, {
         username: 'user4'
      }], {});
   }
};
