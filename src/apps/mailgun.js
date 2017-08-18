var mailKeyObj = require("./mailkey.js");
var api_key = mailKeyObj.key;
var path = require('path');
var domain = mailKeyObj.domain;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var filepath = "";
// path.join(__dirname, '../../public/assets/images/burger.png');
if (filepath === "") {
  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: mailKeyObj.email,
    subject: 'This is another Mailgun Testin',
    text: 'Hopefully this does not have attachment'
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
else {
  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: mailKeyObj.email,
    subject: 'This is another Mailgun Testin',
    text: 'Hopefully this has attachment',
    attachment: filepath
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}
