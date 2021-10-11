const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commands_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
  // console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('$help, มึงคิดว่ากูฉลาดมากหรือไง');
});

client.login(process.env.DISCORD_TOKEN);