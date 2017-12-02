const redirect = {};

//middleware function to check if user is authenticated for loggedin only pages
redirect.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please Login");
  res.redirect('/login');
}

// Check if user is trying to access non-loggedin access pages
// Redirect to profile if already logged in
redirect.ifLoggedIn = (req, res, next) => {
   if(req.isAuthenticated() == false){
        return next();
    } else {
        res.redirect("/profile");
    }
}

module.exports = redirect;
