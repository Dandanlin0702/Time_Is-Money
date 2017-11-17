'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('OfferedServices', [{
         is_accepted: true,
         requested_datetime: new Date(),
         num_hours: 2,
         UserId: 2,
         ServiceId: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         is_accepted: false,
         requested_datetime: new Date(),
         num_hours: 20,
         UserId: 3,
         ServiceId: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         is_accepted: true,
         requested_datetime: new Date(),
         num_hours: 4,
         UserId: 3,
         ServiceId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         is_accepted: true,
         requested_datetime: new Date(),
         num_hours: 0.5,
         UserId: 4,
         ServiceId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('OfferedServices',
      [{
         is_accepted: true,
         requested_datetime: new Date(),
         num_hours: 2
      }, {
         is_accepted: false,
         requested_datetime: new Date(),
         num_hours: 20
      }, {
         is_accepted: false,
         requested_datetime: new Date(),
         num_hours: 4
      }, {
         is_accepted: false,
         requested_datetime: new Date(),
         num_hours: 0.5
      }], {});
   }
};
