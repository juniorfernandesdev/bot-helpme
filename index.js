const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');

bot.on('message', message => {

});

bot.login(config.token);