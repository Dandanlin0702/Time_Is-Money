'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing SubCategories
      return queryInterface.bulkInsert('SubCategories', [
        //Category 1
        {
         subcategory_name: 'Math',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Science',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'English',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'History',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'SAT Test Prep',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'SHSAT Test Prep',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Art',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      },

      //Category 2
      {
       subcategory_name: 'Pet Sitting',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Dog Walk',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Belly Rubs',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Overnight Visit',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Grooming',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Pet Bathing',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Nail Trimming',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Visiting Pet',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    },

    //Category 3
    {
     subcategory_name: 'Toddlers',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Infants',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Young Children',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Tweens',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Visiting Doctor',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'After School Pickup',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  },

  //Category 4
  {
   subcategory_name: 'Housekeeping',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'House Sitting',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Lawn Mowing',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Snow Shoveling',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Car Wash',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Window Cleaning',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Laundry',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Bed Making',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Put Up Christmas Lights',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Take Down Christmas Lights',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}

    ], {});
   }
};
