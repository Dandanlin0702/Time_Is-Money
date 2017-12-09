'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing Services
      return queryInterface.bulkInsert('Services', [{
         service_name: 'Algebra I',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'New York, NY',
         UserId: 1,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Algebra II',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Queens, NY',
         UserId: 1,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Geometry',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 3,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Trigonometry',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Staten Island, NY',
         UserId: 2,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Calculus I',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 3,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Calculus II',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Queens, NY',
         UserId: 3,
         SubCategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Biology',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 5,
         SubCategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Earth Science',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Staten Island, NY',
         UserId: 6,
         SubCategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'General Chemistry',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 6,
         SubCategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Organic Chemistry',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'New York, NY',
         UserId: 6,
         SubCategoryId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Pet Sitting (20lbs & Under)',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Queens, NY',
         UserId: 7,
         SubCategoryId: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Pet Sitting (50lbs & Under)',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 8,
         SubCategoryId: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Pet Sitting (All Dogs)',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 9,
         SubCategoryId: 9,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'I\'LL RUB YOUR DOGGOS TUMMY ALL DAY',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'New York, NY',
         UserId: 7,
         SubCategoryId: 11,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Toddler Sitting',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 8,
         SubCategoryId: 18,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Infant Sitting',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Queens, NY',
         UserId: 9,
         SubCategoryId: 19,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Entire House Cleanup',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'New York, NY',
         UserId: 12,
         SubCategoryId: 25,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Bathroom Cleanse',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Staten Island, NY',
         UserId: 10,
         SubCategoryId: 25,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         service_name: 'Kitchen Cleanup',
         description: 'Lorem ipsum dolor sit amet, sea tale ignota torquatos at. Cu omnis dicta inani quo, quo et graeci aperiri. Ut reque delenit patrioque vel, illum mundi copiosae ut ius.',
         location: 'Brooklyn, NY',
         UserId: 11,
         SubCategoryId: 25,
         createdAt: new Date(),
         updatedAt: new Date(),
      }
    ], {});
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
