const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commands_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
  // console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('$help, $h');
});

client.login(process.env.DISCORD_TOKEN);