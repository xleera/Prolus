//
// project owned by TobiasFeld22
// 2017
//
const Discord = require('discord.js');
const bot = new Discord.Client();
var commands = require('./commands.js')
var keys = require('../keys.js')
var prefix = "--!"


bot.on('ready', () => {
console.log(`Bot ready, starting in ${bot.guilds.size} servers`)
})


bot.login(keys.token)

bot.on("message", message => {
  if (message.author.bot)return;
  if (message.channel.type != "text") return;
  if (!message.content.startsWith(prefix)) return;
  var inp = message.content.split(" ")
  if(inp[0] == prefix + 'ping'){commands.ping(message)}
  if(inp[0] == prefix + 'designs'){commands.designs(message)}
})
