exports.run = (client, msg) => {
    var images = require('../images.json');
    var isAlphanumeric = require('is-alphanumeric');
    var fs = require('fs')
    var exports = module.exports = {}
    var enabled = []
    var keys = Object.keys(images)
    if (keys.length == 0){
      msg.reply("No designs have been added yet.")
      return
    }
    for (i = 0; i < keys.length; i++){
      if (images[keys[i]].enabled == true){
        enabled.push({name: images[keys[i]].name, designer: images[keys[i]].designer})
      }
    }
    if (enabled == undefined || enabled.length == 0) {
        msg.reply("No designs are enabled.")
    } else {
        var imagemap = enabled.map((i) => ("**" + i.name + "** made by *" + i.designer + "*"))
        msg.reply("List of available designs:\n" + imagemap.join("\n"))
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
