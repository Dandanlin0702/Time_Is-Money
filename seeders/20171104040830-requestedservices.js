'use strict';

// module.exports = {
//    up: (queryInterface, Sequelize) => {
//       //Testing RequestedService
//       return queryInterface.bulkInsert('RequestedServices', [{
//          is_accepted: true,
//          requested_datetime: new Date(),
//          num_hours: 2,
//          createdAt: new Date(),
//          updatedAt: new Date(),
//       }, {
//          is_accepted: false,
//          requested_datetime: new Date(),
//          num_hours: 20,
//          createdAt: new Date(),
//          updatedAt: new Date(),
//       }, {
//          is_accepted: true,
//          requested_datetime: new Date(),
//          num_hours: 4,
//          createdAt: new Date(),
//          updatedAt: new Date(),
//       }, {
//          is_accepted: true,
//          requested_datetime: new Date(),
//          num_hours: 0.5,
//          createdAt: new Date(),
//          updatedAt: new Date(),
//       }], {});
//    },
//
//    down: (queryInterface, Sequelize) => {
//       queryInterface.bulkDelete('RequestedServices',
//       [{
//          is_accepted: true,
//          requested_datetime: new Date(),
//          num_hours: 2
//       }, {
//          is_accepted: false,
//          requested_datetime: new Date(),
//          num_hours: 20
//       }, {
//          is_accepted: false,
//          requested_datetime: new Date(),
//          num_hours: 4
//       }, {
//          is_accepted: false,
//          requested_datetime: new Date(),
//          num_hours: 0.5
//       }], {});
//    }
// };
