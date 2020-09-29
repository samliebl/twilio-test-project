// Using dotenv for account SID and auth token.
// 
require('dotenv').config();

// Example adapted from Twilio's docs:
// https://www.twilio.com/docs/sms/quickstart/node
// Note: the phone numbers in the object below are placeholders. Remember to
// fill in the unique numbers you're working with.

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hi! This is Sam Liebl; I\'m applying for the AE position. I made this app with Twilio\'s API to learn more about the technology behind your products. Check out this project on github!' ,
     // Phone number registered via Twilio's trial from their developer's
     // console (https://www.twilio.com/console) goes here.
     from: '+11234567890',
     // My phone number to test out.
     to: '+11234567890'
   })
  .then(message => console.log(message.sid));