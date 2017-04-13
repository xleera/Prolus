/*
exports.designs = function(message){
var enabled = []
  images.list.forEach(function(x) {
if (x.enabled == true){
  enabled.push(x)
}
  })
if (enabled == undefined || enabled.length == 0){
  message.channel.sendMessage("No designs are enabled.")
}else{
  var imagemap = enabled.map((i) => ("**"+i.name+"** made by *"+i.designer+ "*"))
  message.channel.sendMessage("List of available designs:\n"+imagemap.join("\n"))
}
}
*/


exports.run = (client, msg) => {
	var images = require('../images.js');
	var functions = require('../functions.js');
	var isAlphanumeric = require('is-alphanumeric');
	var fs = require('fs')
	var exports = module.exports = {}
  var enabled = []
  images.list.forEach(function(x) {
if (x.enabled == true){
  enabled.push(x)
}
  })
if (enabled == undefined || enabled.length == 0){
  msg.reply("No designs are enabled.")
}else{
  var imagemap = enabled.map((i) => ("**"+i.name+"** made by *"+i.designer+ "*"))
  msg.reply("List of available designs:\n"+imagemap.join("\n"))
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
  name: "designs",
  description: "Get a list of available designs.",
  usage: "",
  usageDelim: " ",
};