const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const homeRouter = require('./src/controllers/homeController');
const slackRouter = require('./src/apps/slackController');
const passport = require('passport');
app.set('views', __dirname + '/src/views');
app.engine('handlebars', exphbs({
  defaultLayout: __dirname + '/src/views/layouts/main.handlebars',
  partialsDir: __dirname + '/src/views/partials'
}))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')))
app.use(homeRouter);
app.use(slackRouter);
app.get('/testcodesnip', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/testCode/scriptcreator.html"));
});
app.get('/testcodesnipcreate', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/snippetfeature/codesnippet.html"));
});
app.get('/testgithub', (req, res) => {
  res.sendFile(path.join(__dirname, "public/assets/testCode/testgithubintegr.html"));
});
app.listen(port, () => {
  console.log('SERVER IS LISTENING ON ', port);
})
