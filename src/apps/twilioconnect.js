var twilInfo = require("./twilkeys.js");

// Twilio Credentials
const accountSid = twilInfo.id;
const authToken = twilInfo.token;
var mediaLink = ""

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
if (mediaLink === "") {
  client.messages
    .create({
      to: '+17205177858',
      from: '+17208993602',
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
    })
    .then(message => console.log(message.sid));
}
else {
  client.messages
    .create({
      to: '+17205177858',
      from: '+17208993602',
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      mediaUrl: mediaLink,
    })
    .then(message => console.log(message.sid));
}
