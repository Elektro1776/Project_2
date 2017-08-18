var mailKeyObj = require("./mailkey.js");
var api_key = mailKeyObj.key;
var path = require('path');
var domain = mailKeyObj.domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var filepath = path.join(__dirname, '../../public/assets/images/burger.png');
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: mailKeyObj.email,
  subject: 'This is another Mailgun Testin',
  text: 'Hopefully this will be an awesome application and these emails will send important information to users.',
  attachment: filepath
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
