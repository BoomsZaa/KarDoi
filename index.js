const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

//For Heroku Error R10 fix////////////////////////////////////////////////////////
// var express = require('express');
// var app     = express();

// app.set('port', (process.env.PORT || 5000));

// //For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });
///////////////////////////////////////////////////////////////////////////////////

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commands_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
  // console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('$help, มึงคิดว่ากูฉลาดมากหรือไง');
});

client.login(process.env.DISCORD_TOKEN_TEST);