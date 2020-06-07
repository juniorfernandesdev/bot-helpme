const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require('./config.json');
const links = require('./links.json');
const salas = require('./links.json');

// welcome message for user
bot.on('guildMemberAdd', member => {
    member.guild.channels.get(salas.geral).send('Seja bem-vindo ' + member.user.username + ', leia atentamente as regras do servidor, e caso tenho alguma segestão, pode falar com um de nossos moderadores, pois sua sugestão é bem vinda.');
    member.send('Bem vindo ao servidor!');
});

// Remove message for user
bot.on('guildMemberRemove', member => {
    member.guild.channels.get(salas.geral).send('Uma pena que foi se foi ' + member.user.username + ' :/');
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