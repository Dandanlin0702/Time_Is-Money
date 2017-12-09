'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      //Testing SubCategories
      return queryInterface.bulkInsert('SubCategories', [
        //Category 1
        {
         subcategory_name: 'Math',
         description: 'Geometry? Trigonometry? Algebra? We\'ve got it all!',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Science',
         description: 'What\'s the difference between mitosis and meiosis? Get a biology tutor and find out!',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'English',
         description: 'Grammar is hard. Native speakers can\'t even always get it right, but with some help, maybe you can!',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'History',
         description: 'Four score and seven years ago... and longer, some guy made a speech and made it important to learn about it',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'SAT Test Prep',
         description: 'Getting into college is hard. Make it less hard with some SAT test prep',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'SHSAT Test Prep',
         description: 'Want to get into Stuyvesant High School and wake up at 5am everyday for four years because you\'re in Brooklyn? This is the place!',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'Art',
         description: 'Learn to draw circles and stuff better here',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      }, {
         subcategory_name: 'MISC',
         description: 'Services that did not fit any subcategory perfectly',
         CategoryId: 1,
         createdAt: new Date(),
         updatedAt: new Date(),
      },

      //Category 2
      {
       subcategory_name: 'Pet Sitting',
       description: 'We\'ll take care of your dogs for days',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Dog Walk',
       description: 'We\'ll even throw in all the walkies to the parkies!',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Belly Rubs',
       description: 'DOES YOUR DOG WANT ALL THE BELLY RUBS? GUESS WHO\'S IN LUCK',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Overnight Visit',
       description: 'We\'ll visit your home in the middle of the night to make sure your doggo isn\'t lonely!',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Grooming',
       description: 'It\'s time to fluff up the floofer',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Pet Bathing',
       description: 'Stinky stinky...',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Nail Trimming',
       description: 'Not ready to have Wolverine as a pet? We\'ve got you',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'Visiting Vet',
       description: 'Is your pupper not feeling well? Get your baby checked out by a certified vet with a lot of freetime',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    }, {
       subcategory_name: 'MISC',
       description: 'Services that did not fit any subcategory perfectly',
       CategoryId: 2,
       createdAt: new Date(),
       updatedAt: new Date(),
    },

    //Category 3
    {
     subcategory_name: 'Toddlers',
     description: 'The most stressful time is when your dysfunctional tiny human starts to walk... We\'ve got you covered ',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Infants',
     description: 'Need some rest from your newborn? We\'ll get you some sleep for a few hours',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Young Children',
     description: 'We\'ll fight the monster in the closet for your child',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Tweens',
     description: 'Rebellious stage getting too much for you? Get away with our services',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'Visiting Doctor',
     description: 'Is your tiny human not feeling well? Get themchecked out by a certified pediatrician with a lot of freetime',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'After School Pickup',
     description: 'Create a secret keyword that\'ll allow us to pick up your child from school to you!',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  }, {
     subcategory_name: 'MISC',
     description: 'Services that did not fit any subcategory perfectly',
     CategoryId: 3,
     createdAt: new Date(),
     updatedAt: new Date(),
  },

  //Category 4
  {
   subcategory_name: 'Housekeeping',
   description: 'We\'ll pick up your dirty socks so you don\'t have to',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'House Sitting',
   description: 'Make sure you don\'t get robbed with a sitter!',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Lawn Mowing',
   description: 'Making sure you have a nice lawn so you don\'t ruin your neighborhood aesthetic is hard...',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Snow Shoveling',
   description: 'Avoid frostbitten hands this Winter by afflicting someone else instead with your responsibilities!',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Car Wash',
   description: 'Scrubba Dub Dub, gotta have a shiny vroom vroom',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Window Cleaning',
   description: 'Scrubba Dub Dub, gotta have a shiny portal window to the outside world',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Laundry',
   description: 'You don\'t want to smell like Frank.',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Bed Making',
   description: 'Seriously? Fine',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Put Up Christmas Lights',
   description: 'Hohoho, IT\'S CHRISTMAS TIME',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'Take Down Christmas Lights',
   description: 'Don\'t be like that family that leaves their decorations up until Spring',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}, {
   subcategory_name: 'MISC',
   description: 'Services that did not fit any subcategory perfectly',
   CategoryId: 4,
   createdAt: new Date(),
   updatedAt: new Date(),
}

    ], {});
   }
};
