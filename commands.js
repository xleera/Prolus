//
// project owned by TobiasFeld22
// 2017
//
var images = require('./images.js');
var functions = require('./functions.js');
var isAlphanumeric = require('is-alphanumeric');
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
  })
if (enabled == undefined || enabled.length == 0){
  message.channel.sendMessage("No designs are enabled.")
}else{
  var imagemap = enabled.map(i => ("**"+i.name+"** made by *"+i.designer+ "*"))
  message.channel.sendMessage("List of available designs:\n"+imagemap.join("\n"))
}
}

exports.hub = function(message){
    message.author.sendMessage({embed: {color: 0x99f2ff, title: "Hub Link", description: "Join my hub server to chat and recieve support. Remember to read the rules! https://discordapp.com/invite/YCp4p8r"}});
}

exports.invite = function(message){
    message.author.sendmessage({embed: {color: 0x99f2ff, title: "Bot Invite Link", description: "Have me join your server for everyone there to use! https://discordapp.com/oauth2/authorize?client_id=280839097981992960&scope=bot&permissions=523360"}})
}

exports.help = function(message, inp, bot, prefix){
  if (message.guild.members.get(bot.user.id).hasPermission('EMBED_LINKS') == true){
message.channel.sendMessage("Here is some info for Image-bot", {embed: {color: 0x99f2ff, Title: "Bot help", description: "Hey, <@"+message.author.id+">\n\nI am image-bot!\nI was made to deliver you awesome avatars and server icons.\n\nLet's get started!\nMy prefix is `"+prefix+"`", fields: [{name: "Command", value: "ping\ninvite\ndesigns\navatar <design name>\nserver <design name>\nhub", inline: true}, {name: "Description", value: "Get response times.\nInvite the bot to your server.\nGet a list of designs.\nLet the bot send you an avatar\nLet the bot change your server icon.\nAn invite url for the server, \nif you are in need of support", inline: true }]}})
  }else {
    return message.channel.sendMessage(`Hey, <@${message.author.id}>\n\nI am image-bot!\nI was made to deliver your awesome avatars and server icons.\n\nLet's get started!\nMy prefix is ${prefix}\n\n**__Command__** --------------- **__Description__**\nping ---------------------- Get response time.\ninvite --------------------- Invite the bot to your server.\ndesigns ------------------- Get a list of designs.\navatar <design name> -- Let the bot send you an avatar.\nserver <design name> -- Let the bot change your server icon.\nhub ----------------------- An invite url to the support server.`)
  }

}


exports.restart = function(message, bot){
  if(bot.guilds.get("281063784569765889").members.get(message.author.id) != undefined ){
    if (bot.guilds.get("281063784569765889").members.get(message.author.id).roles.get("281063862978084864") != null ){
      console.log("restart by -> "+ message.member.displayName + "#"+ message.author.discriminator)
      message.channel.sendMessage('Restarted bot!')
          .then(() => process.exit());

  }else{
  message.channel.sendMessage(":no_entry: No access to this command.")
}
}
else{
message.channel.sendMessage(":no_entry: No access to this command.")
}
}


exports.avatar = function(message, inp, prefix, bot){
  if (inp[1] == null){
    message.channel.sendMessage("Please specify a design | `"+prefix+"help`")
    return
  }
  var list = images.list.map((i) => (i.name));
  if (list.includes(inp[1]) !== true){
    message.channel.sendMessage("Unknown design, please check if you input was correct");
    return;
  }
  var namelist = []
    images.list.forEach(function(x) {
  if (x.name == inp[1]){
    namelist.push(x)
  }
})
var letter = functions.getFirst(message.member.displayName)


if (letter == null){
  message.channel.sendMessage("Because the first character of your name isn't alphanumeric. Please specify a letter to use(`A-Z or 0-9`)")
var collector = message.channel.createCollector(
 m => m.author.id == message.author.id,
 { maxMatches: 1 }
);
collector.on('message', m => {
if (isAlphanumeric(m.content.toLowerCase().substring(0, 1)) == false){
  message.channel.sendMessage("Invalid token.")
  return
}
else{
    letter = m.content.toLowerCase().substring(0, 1)
     }
})
}

  if (message.guild.members.get(bot.user.id).hasPermission('EMBED_LINKS') == true){
    message.channel.sendMessage(":postbox: I have sent a message to your direct messages.")
message.author.sendMessage("", {embed: {color: 0x99f2ff, title: "Image-bot Terms", description: "By downloading and using any of the images distributed by Image-bot, you acknowledge and agree that you have read and accepted these terms.\n\n1) Downloading and using an image distributed by Image-bot does not give you ownership of the image. By downloading or using an image distributed by Image-bot in any way, you acknowledge and agree that you do not own the image and are merely granted a license to use the images on Discord as your avatar or server icon.\n2) You agree that you will not modify our images in any way, shape or form without express written permission from the designer of the image being distributed by Image-bot.\n3) You agree that you will not redistribute our images to other parties. You may refer other parties to Image-bot where they can obtain their own images, however.\n\nDo you accept these terms? If so, type: accept. If not, simply do nothing."}}).then(() => {
  var collector2 = message.author.dmChannel.createCollector(
   m => m.author.id == message.author.id,
   { maxMatches: 1 }
 )

   collector2.on('message', m => {
     if (m.content == "accept"){
message.author.sendFile(namelist[0].location + letter + ".png", message.member.displayName+".png", "Here is your avatar!")
     }else{
       message.channel.sendMessage("Cancelled")
     }
   })
})
.catch((err) => {message.channel.sendMessage(":warning: Make sure i can send direct messages to you."); console.log(err)})
}else{
  message.channel.sendMessage(":postbox: I have sent a message to your direct messages.")
  message.author.sendMessage("```Image-bot Terms\nBy downloading and using any of the images distributed by Image-bot, you acknowledge and agree that you have read and accepted these terms.\n\n1) Downloading and using an image distributed by Image-bot does not give you ownership of the image. By downloading or using an image distributed by Image-bot in any way, you acknowledge and agree that you do not own the image and are merely granted a license to use the images on Discord as your avatar or server icon.\n2) You agree that you will not modify our images in any way, shape or form without express written permission from the designer of the image being distributed by Image-bot.\n3) You agree that you will not redistribute our images to other parties. You may refer other parties to Image-bot where they can obtain their own images, however.\n\nDo you accept these terms? If so, type: accept. If not, simply do nothing.```").then(() => {
    var collector2 = message.author.dmChannel.createCollector(
     m => m.author.id == message.author.id,
     { maxMatches: 1 }
   )
     collector2.on('message', m => {
       if (m.content == "accept"){
message.author.sendFile(namelist[0].location + letter + ".png", "Here is your avatar")
       }else{
         message.channel.sendMessage("Cancelled")
       }
     })
  })
.catch((err) => {message.channel.sendMessage(":warning: Make sure i can send direct messages to you."); console.log(err)})
}

  }