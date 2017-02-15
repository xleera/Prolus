//
// project owned by TobiasFeld22
// 2017
//
const Discord = require('discord.js');
const bot = new Discord.Client();
var commands = require('./commands.js')
var keys = require('../keys.js')
var prefix = "\\"


bot.on('ready', () => {
console.log(`Bot ready, starting in ${bot.guilds.size} servers`)
bot.guilds.get("281063784569765889").channels.get("281441743130460161").sendMessage("", {embed: {color: 0x99f2ff, title: "Bot restarted", description: "Bot had to restart", timestamp: bot.readyAt}});
})


bot.login(keys.token)

bot.on("message", message => {
  if (message.author.bot)return;
  if (message.channel.type != "text") return;
  if (!message.content.startsWith(prefix)) return;
  var inp = message.content.split(" ")
  if(inp[0] == prefix + 'ping'){commands.ping(message)}
  if(inp[0] == prefix + 'designs'){commands.designs(message, inp)}
  if(inp[0] == prefix + 'help' || inp[0] == "commands" || inp[0] == "cmds" || message.mentions.users.first() != undefined && message.mentions.users.first().id == bot.user.id){commands.help(message, inp, bot, prefix)}
  if(inp[0] == prefix + 'avatar'){commands.avatar(message, inp, prefix, bot)}
  if(inp[0] == prefix + 'restart'){commands.restart(message, bot)}
  if(inp[0] == prefix + 'hub'){commands.hub(message)}
  if(inp[0] == prefix + 'invite'){commands.invite(message)}
  if(inp[0] == prefix + 'server'){commands.server(message, inp, prefix, bot)}
})
