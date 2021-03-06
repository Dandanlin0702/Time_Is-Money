const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const models = require('./models/');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const viewHelpers = require('./middlewares/viewHelpers');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());

const expressSession = require('express-session');
const passport = require('./middlewares/authentication');

app.use(expressSession(({secret: 'keyboard cat'})));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
  helpers: {
    toURI: (uri) => {
      return encodeURI(uri);
    }
  }
});

// app.engine('handlebars', exphbs({layoutsDir: './views/layouts', defaultLayout: 'main'}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

app.use(viewHelpers.register());

// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);

models.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
  });
});
