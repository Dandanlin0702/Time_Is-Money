const redirect = {};

//middleware function to check if user is authenticated for loggedin only pages
redirect.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = redirect;
