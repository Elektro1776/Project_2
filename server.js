const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;
const homeRouter = require('./src/controllers/homeController');
app.set('views', __dirname + '/src/views');
app.engine('handlebars', exphbs({
  defaultLayout: __dirname + '/src/views/layouts/main.handlebars',
  partialsDir: __dirname + '/src/views/partials'
}))
app.set('view engine', 'handlebars');
app.use(homeRouter);
app.listen(port, () => {
  console.log('SERVER IS LISTENING ON ', port);
})
