//
// project owned by TobiasFeld22
// 2017
//
var images = require('./images.js')
var exports = module.exports = {}

exports.ping = function(message){
  var start = Date.now()
  message.channel.sendMessage("Pong!").then((msg) => {
      var end = Date.now()
      msg.edit("Pong! | Response time: `"+(end-start)+"ms`")
})
}
exports.designs = function(message, inp){
var enabled = []
  images.list.forEach(function(x) {
if (x.enabled == true){
  enabled.push(x)
}
  });



if (enabled == undefined || enabled.length == 0){
  message.channel.sendMessage("No designs are enabled.")
}else{
  var imagemap = enabled.map(i => ("**"+i.name+"** made by *"+i.designer+ "*"))
  message.channel.sendMessage("List of available designs:\n"+imagemap.join("\n"))
}
}


exports.help = function(message, inp, bot, prefix){
  if (message.guild.members.get(bot.user.id).hasPermission('EMBED_LINKS') == true){
message.channel.sendMessage("Here is some info for Image-bot", {embed: {color: 0x99f2ff, Title: "Bot help", description: "Hey, <@"+message.author.id+">\n\nI am image-bot!\nI was made to deliver you awesome avatars and server icons.\n\nLet's get started!\nMy prefix is `"+prefix+"`", fields: [{name: "Command", value: "ping\ninvite\ndesigns\navatar <design name>\nserver <design name>\nhub", inline: true}, {name: "Description", value: "Get response times.\nInvite the bot to your server.\nGet a list of designs.\nLet the bot send you an avatar\nLet the bot change your server icon.\nAn invite url for the server, \nif you are in need of support", inline: true }]}})
  }else {
    return message.channel.sendMessage(`Hey, <@${message.author.id}>\n\nI am image-bot!\nI was made to deliver your awesome avatars and server icons.\n\nLet's get started!\nMy prefix is ${prefix}\n\n**__Command__** --------------- **__Description__**\nping ---------------------- Get response time.\ninvite --------------------- Invite the bot to your server.\ndesigns ------------------- Get a list of designs.\navatar <design name> -- Let the bot send you an avatar.\nserver <design name> -- Let the bot change your server icon.\nhub ----------------------- An invite url to the support server.`)
  }

}

exports.avatar = function(message, inp){




}
