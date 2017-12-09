'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkInsert('Users', [{
         username: 'Jenny McKinsey',
         email: 'jenny@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date()
      }, {
         username: 'Antonia Garnet',
         email: 'antonia@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Evelyn Brenna',
         email: 'evelyn@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Cecil Keith',
         email: 'cecil@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Julius Asher',
         email: 'julius@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 10,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Norbert Terence',
         email: 'norbert@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Todd Nikole',
         email: 'todd@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 22,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Rufus Giles',
         email: 'rufus@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 13,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Barrett Easter',
         email: 'barrett@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 19,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Rusty Adam',
         email: 'rusty@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 20,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Dudley Trinity',
         email: 'dudley@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Hector Fern',
         email: 'hector@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         username: 'Ione Clemence',
         email: 'ione@gmail.com',
         password_hash: '$2a$10$2nMnBS2gLcLJdU2t19yXg.aSv1yNVI6pF47UDARmYJLKN2loOLQjm',
         balance: 30,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      // Return a promise to correctly handle asynchronicity.
      return queryInterface.bulkDelete('Users', [{
         username: 'Jenny McKinsey'
      }, {
         username: 'Antonia Garnet'
      }, {
         username: 'Evelyn Brenna'
      }, {
         username: 'Julius Asher'
      }, {
         username: 'Norbert Terence'
      }, {
         username: 'Todd Nikole'
      }, {
         username: 'Rufus Giles'
      }, {
         username: 'Barrett Easter'
      }, {
         username: 'Rusty Adam'
      }, {
         username: 'Dudley Trinity'
      }, {
         username: 'Hector Fern'
      }, {
         username: 'Ione Clemence'
      }], {});
   }
};
