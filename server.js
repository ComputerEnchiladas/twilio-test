var accountSid = '?????';
var authToken = '?????';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

require('mahrio').runServer( process.env, __dirname)
  .then( function(server){
    console.log('running');
    
    client.messages.create({
      body: 'Server Running',
      to: '+1??????????',  // Text this number
      from: '+1??????????' // From a valid Twilio number
    }).then(function(message){ 
      console.log(message.sid)
      console.log('message sent');
    });
  });
