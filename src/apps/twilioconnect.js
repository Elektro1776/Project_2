var twilio = require('twilio');
var twilInfo = require("./twilkeys.js");
var accountSid = twilInfo.id; // Your Account SID from www.twilio.com/console
var authToken = twilInfo.token;   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'A task has been updated under Project_2 and has been marked urgent needing immediate attention',
    to: '+17205177858',  // Text this number
    from: '+17208993602' // From a valid Twilio number
})
.then((message) => console.log(message.sid + " " + message));
