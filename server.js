require('dotenv').config();

var request = require('request');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session')
const knex = require('knex')(require('./src/db/db_config.js'))
module.exports = {
  knex
}
var KnexSessionStore = require('connect-session-knex')(session);
const config = require('./src/db/db_config');
require('./src/auth/gitHubAuth')(passport);
var github = require('./src/auth/gitHubAuth.js');
var slack = require('./src/auth/slackAuth.js');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const homeRouter = require('./src/controllers/homeController');
const projectsRouter = require('./src/controllers/projectsController');
const githubGetRoutes = require('./src/api/githubRoutes/githubRoutes.js');
const userStoriesRouter = require('./src/controllers/userStoriesController');
const slackRouter = require('./src/apps/slackController');
const authRouter = require('./src/controllers/authController');
const sessionStore = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions'
     // optional. Defaults to 'sessions'
});
app.set('views', __dirname + '/src/views');
app.engine('handlebars', exphbs({
  defaultLayout: __dirname + '/src/views/layouts/main.handlebars',
  partialsDir: __dirname + '/src/views/partials'
}))
app.set('view engine', 'handlebars');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// The express-session, and passport middleware below has to follow this order
//for our auth check to work

app.use(session({
  cookie : {
       maxAge: 1000* 60 * 60 *24 * 365
   },
  store: sessionStore,
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,

}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

require('./src/routes/signup')(app, passport);

app.use(userStoriesRouter);
app.get('/projects', projectsRouter);
app.use(slackRouter);
app.use(githubGetRoutes);

// Test code ofr the snippet features
app.get('/testcodesnip', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/testCode/scriptcreator.html"));
});
app.get('/testcodesnipcreate', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/snippetfeature/codesnippet.html"));
});

app.listen(port, () => {
});
