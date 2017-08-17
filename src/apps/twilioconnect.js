var twilio = require('twilio');
var twilInfo = require("./twilkey2.js");
var accountSid = twilInfo.id; // Your Account SID from www.twilio.com/console
var authToken = twilInfo.token;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+17205177858',  // Text this number
    from: '+17208993602' // From a valid Twilio number
})
.then((message) => console.log(message.sid + " " + message));
