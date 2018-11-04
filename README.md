# MAHRIO-Twilio

Using MAHRIO and Twilio together

# Prerequisites

* have a Twilio account to pair up with

* Fill in the secret keys under `server.js`

```
   var accountSid = '?????';
   var authToken = '?????';
```

* Fill in the numbers to send and receive under `server.js`

```
   to: '+1??????????',  // Text this number
   from: '+1??????????' // From a valid Twilio number
```

* Send a test SMS via `node server.js`
