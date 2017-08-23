require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const passport = require('passport');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const homeRouter = require('./src/controllers/homeController');
const projectsRouter = require('./src/controllers/projectsController');
const userStoriesRouter = require('./src/controllers/userStoriesController');
const slackRouter = require('./src/apps/slackController');
// const authRouter = require('./src/controllers/authController');
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
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(homeRouter);
app.use(userStoriesRouter);
app.use(projectsRouter);
app.use(slackRouter);
// app.use(authRouter);
app.get('/testcodesnip', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/testCode/scriptcreator.html"));
});
app.get('/testcodesnipcreate', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/snippetfeature/codesnippet.html"));
});
app.get('/testgithub', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/testCode/testgithubintegr.html"));
});

// Potential Github authentification routes
// app.get('/auth/github',
//   passport.authenticate('github', { scope: [ 'vdavidhamond@gmail.com' ] }));
//
// app.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
app.listen(port, () => {
  console.log('SERVER IS LISTENING ON ', port);
})
