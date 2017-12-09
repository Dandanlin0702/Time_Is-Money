'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing RequestedService
      return queryInterface.bulkInsert('RequestedServices', [{
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 2,
         UserId: 2,
         ServiceId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 20,
         UserId: 3,
         ServiceId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 4,
         UserId: 3,
         ServiceId: 3,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 0.5,
         UserId: 4,
         ServiceId: 4,
         createdAt: new Date(),
         updatedAt: new Date(),
      }], {});
   },

   down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('RequestedServices',
      [{
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 2
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 20
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 4
      }, {
         status: "Pending",
         requested_datetime: new Date(),
         num_hours: 0.5
      }], {});
   }
};
