const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');
const links = require('./links.json');
const salas = require('./salas.json');

// welcome message for user
bot.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(salas.bemvindo).send("Seja bem-vinde " + member.user.username + "!  🎉  🎊  👏 \n 🔴 Leia atentamente as regras do servidor no canal de texto #regras, e caso tenho alguma segestão, pode falar com um de nossos moderadores.\nSua sugestão é muito bem vinda! 😄 😄 😄");
    member.send('Bem vindo ao servidor!');
});

// Remove message for user
bot.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(salas.bemvindo).send("Uma pena que vc se foi " + member.user.username + " 😞");
});

bot

bot.on('ready', () => {
    console.log('logado!');
});

bot.on('message', message => {
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content])
    }
});

bot.login(config.token);