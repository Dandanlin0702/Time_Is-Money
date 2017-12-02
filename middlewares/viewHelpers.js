const helpers = {};

helpers.register = () => {
  return (req, res, next) => {
    res.locals.cur_user = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
  }
};

module.exports = helpers;
