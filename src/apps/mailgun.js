var mailKeyObj = require("./mailkey.js");
var api_key = mailKeyObj.key;
var domain = mailKeyObj.domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: mailKeyObj.email,
  subject: 'This is another Mailgun Testin',
  text: 'Hopefully this will be an awesome application and these emails will send important information to users.'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
