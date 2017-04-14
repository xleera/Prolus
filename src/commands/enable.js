/* eslint-disable no-case-declarations, consistent-return */
exports.run = (client, msg) => {
var inp = msg.content.split(" ")
var config = require("../../config.json")
var images = require("../images.json")
if (config.administrators == undefined || config.administrators == null){
  if (config.ownerID == msg.author.id){
    msg.reply("Please add the administrators to config.json\nSee /src/examples/config.json for more information")
  }else{
    msg.sendMessage("No administrators have been setup yet.")
  }
}else if (config.administrators.includes(msg.author.id) == false){
  msg.channel.sendMessage("You don't have permission to use this command.")
}else{
if(inp[1] == null){
  msg.channel.sendMessage("Please type a design name")
}else if (images[inp.slice(1).join(" ")] == null){
msg.channel.sendMessage("No design found by that name")
}else if (images[inp.slice(1).join(" ")].enabled == true) {
msg.channel.sendMessage("This design is already enabled.")
}else{
images[inp.slice(1).join(" ")].enabled = true
msg.channel.sendMessage("Design **" + inp.slice(1).join(" ") + "** has been enabled.")
}
}
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "enable",
  description: "Enable a design",
  usage: "",
  usageDelim: "",
};
