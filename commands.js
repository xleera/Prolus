//
// project owned by TobiasFeld22
// 2017
//
var images = require('./images.js');
var bl = require('./blacklist.json')
var functions = require('./functions.js');
var isAlphanumeric = require('is-alphanumeric');
var fs = require('fs')
var exports = module.exports = {}
//end global variable declaration
//start ping command
exports.ping = function(message){
  var start = Date.now()
  message.channel.sendMessage("Pong!").then((msg) => {
      var end = Date.now()
      msg.edit("Pong! | Response time: `"+(end-start)+"ms`")
})
}
//end ping command
//start designs command
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
//end designs command
//start hub command
exports.hub = function(message){
    message.author.sendMessage("", {embed: {color: 0x99f2ff, title: "Hub Link", description: "Join my hub server to chat and recieve support. Remember to read the rules! https://discordapp.com/invite/YCp4p8r"}});
    message.channel.sendMessage(":postbox: Sent an hub invite to your direct messages.")
}
//end hub command
//start invite command
exports.invite = function(message){
    message.author.sendMessage("", {embed: {color: 0x99f2ff, title: "Bot Invite Link", description: "Have me join your server for everyone there to use! https://discordapp.com/oauth2/authorize?client_id=280839097981992960&scope=bot&permissions=523360"}});
    message.channel.sendMessage(":postbox: Sent an invite url to your direct messages.")
}
//end invite command
//start help command
exports.help = function(message, inp, bot, prefix){
  if (message.guild.members.get(bot.user.id).hasPermission('EMBED_LINKS') == true){
message.channel.sendMessage("Here is some info for Image-bot", {embed: {color: 0x99f2ff, title: "Bot help", description: "Hey, <@"+message.author.id+">\n\nI am image-bot!\nI was made to deliver you awesome avatars and server icons.\n\nLet's get started!\nMy prefix is `"+prefix+"`", fields: [{name: "Command", value: "ping\ninvite\ndesigns\navatar <design name>\nserver <design name>\nhub", inline: true}, {name: "Description", value: "Get response times.\nInvite the bot to your server.\nGet a list of designs.\nLet the bot send you an avatar\nLet the bot change your server icon.\nAn invite url for the server, \nif you are in need of support", inline: true }]}})
  }else {
    return message.channel.sendMessage(`Hey, <@${message.author.id}>\n\nI am image-bot!\nI was made to deliver your awesome avatars and server icons.\n\nLet's get started!\nMy prefix is ${prefix}\n\n**__Command__** --------------- **__Description__**\nping ---------------------- Get response time.\ninvite --------------------- Invite the bot to your server.\ndesigns ------------------- Get a list of designs.\navatar <design name> -- Let the bot send you an avatar.\nserver <design name> -- Let the bot change your server icon.\nhub ----------------------- An invite url to the support server.`)
  };
}
//end help commmand
//start restart command
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
//end restart command
//start avatar command
exports.avatar = function(message, inp, prefix, bot){
  if (inp[1] == null){
    message.channel.sendMessage("Please specify a design | `"+prefix+"help`")
    return
  }

  var namelist = []
    images.list.forEach(function(x) {
  if (x.name == inp[1]){
    namelist.push(x)
  }
})
  if (namelist == undefined){
    message.channel.sendMessage("Unknown design, please check if you input was correct | `\\help`");
    return;
  }else if (namelist[0].enabled == false ){
    message.channel.sendMessage("This design is disabled | `\\help`")
    return
  }

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
       message.author.sendMessage("Cancelled")
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
         message.author.sendMessage("Cancelled")
       }
     })
  })
.catch((err) => {message.channel.sendMessage(":warning: Make sure i can send direct messages to you."); console.log(err)})
}
}
//end avatar command
//start server command
exports.server = function(message, inp, prefix, bot){
  if (message.author.id != message.guild.ownerID){
    message.channel.sendMessage(":no_entry: You don't have permission to use this command, please ask the `Server owner` to use this command.")
      return
  }
  if (message.guild.members.get(bot.user.id).hasPermission("MANAGE_GUILD") != true){
    message.channel.sendMessage("I need the `manage server` permission for this command!")
    return;
  }
  if (inp[1] == null){
    message.channel.sendMessage("Please specify a design | `"+prefix+"help`")
    return
  }

  var namelist = []
    images.list.forEach(function(x) {
  if (x.name == inp[1]){
    namelist.push(x)
  }
})
  if (namelist == undefined){
    message.channel.sendMessage("Unknown design, please check if you input was correct | `\\help`");
    return;
  }else if (namelist[0].enabled == false ){
    message.channel.sendMessage("This design is disabled | `\\help`")
    return
  }

var letter = functions.getFirst(message.guild.name)
if (letter == null){
message.channel.sendMessage("Because the first character of your servername isn't alphanumeric. Please change your name to start with: (`A-Z or 0-9`)")
return;
}

  if (message.guild.members.get(bot.user.id).hasPermission('EMBED_LINKS') == true){
message.channel.sendMessage("", {embed: {color: 0x99f2ff, title: "Image-bot Terms", description: "By downloading and using any of the images distributed by Image-bot, you acknowledge and agree that you have read and accepted these terms.\n\n1) Downloading and using an image distributed by Image-bot does not give you ownership of the image. By downloading or using an image distributed by Image-bot in any way, you acknowledge and agree that you do not own the image and are merely granted a license to use the images on Discord as your avatar or server icon.\n2) You agree that you will not modify our images in any way, shape or form without express written permission from the designer of the image being distributed by Image-bot.\n3) You agree that you will not redistribute our images to other parties. You may refer other parties to Image-bot where they can obtain their own images, however.\n\nDo you accept these terms? If so, type: accept. If not, simply do nothing."}}).then(() => {
  var collector2 = message.channel.createCollector(
   m => m.author.id == message.author.id,
   { maxMatches: 1 }
 )
   collector2.on('message', m => {
     if (m.content == "accept"){
       message.guild.setIcon(fs.readFileSync(namelist[0].location + letter + ".png"))
       .then(() => message.channel.sendMessage("I have updated your server icon :fire::ok_hand:"))
       .catch(console.error);
     }else{
       message.channel.sendMessage("Cancelled")
     }
   })
})
}else{
  message.author.sendMessage("```Image-bot Terms\nBy downloading and using any of the images distributed by Image-bot, you acknowledge and agree that you have read and accepted these terms.\n\n1) Downloading and using an image distributed by Image-bot does not give you ownership of the image. By downloading or using an image distributed by Image-bot in any way, you acknowledge and agree that you do not own the image and are merely granted a license to use the images on Discord as your avatar or server icon.\n2) You agree that you will not modify our images in any way, shape or form without express written permission from the designer of the image being distributed by Image-bot.\n3) You agree that you will not redistribute our images to other parties. You may refer other parties to Image-bot where they can obtain their own images, however.\n\nDo you accept these terms? If so, type: accept. If not, simply do nothing.```").then(() => {
    var collector2 = message.channel.createCollector(
     m => m.author.id == message.author.id,
     { maxMatches: 1 }
   )
     collector2.on('message', m => {
       if (m.content == "accept"){
         message.guild.setIcon(namelist[0].location + letter + ".png")
          .then(updated => message.channel.sendMessage("I have updated your server icon :fire::ok_hand:"))
          .catch(console.error);
       }else{
         message.channel.sendMessage("Cancelled")
       }
     })
  })
}
}
//End server command
//Start blacklist_add command
exports.blacklist_add = function(message, inp, prefix, bot) {
  if (inp[2] == null){
    message.channel.sendMessage("Please specify a user to Blacklist | `"+prefix+"help`")
    return
  }
  if(bot.guilds.get("281063784569765889").members.get(message.author.id) != undefined ){
    if (bot.guilds.get("281063784569765889").members.get(message.author.id).roles.get("281063950001504256") != null ){
     if(isNaN(inp[2]) == true && bot.users.get(inp[2]) === undefined){
       return message.channel.sendMessage(`Please enter a valid user.`)
     }
      if(bl) bl.push(inp[2]);
      else bl = [ inp[2] ];
      fs.writeFile('./blacklist.json', JSON.stringify(bl), 'utf8');
      console.log("Blacklisted ID"+ inp[2] +" By -> "+ message.member.displayName + "#"+ message.author.discriminator)
      message.channel.sendMessage(`Successfully Blacklisted \`<@${inp[2]}>\``)

  }else{
  message.channel.sendMessage(":no_entry: No access to this command.")
  }
  }
  else{
  message.channel.sendMessage(":no_entry: No access to this command.")
  }

}
//end Blacklist command
