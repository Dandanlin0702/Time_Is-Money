const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//   },
//   (email, password, done) => {
//     Users.findOne({
//       where: { email },
//     }).then((user) => {
//       if(!user) {
//         return done(null, false, { message: 'Incorrect email.' });
//       }
//
//       if (passwordsMatch(password, user.password_has) === false) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//
//       return done(null, user, { message: 'Successfully Logged In!' });
//     });
//   })
// );

/***********************************************************************
******************************Login Use Username************************/
passport.use(new LocalStrategy({
    usernameField: 'username',
  },
  (username, password, done) => {
    Users.findOne({
      where: { username },
    }).then((user) => {
      if(!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (passwordsMatch(password, user.password_has) === false) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

module.exports = passport;
