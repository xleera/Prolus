exports.run = (client, msg) => {

  if (msg.guild.members.get(client.user.id).hasPermission('EMBED_LINKS') == true){
msg.channel.sendMessage("Here is some info for Prolus", {embed: {color: 0x99f2ff, title: "Bot help", description: "Hey, <@"+msg.author.id+">\n\nI am Prolus!\nI was made to deliver you awesome avatars and server icons.\n\nLet's get started!\nMy prefix is `"+client.guildConfs.get(msg.guild.id)["prefix"].data+"`",
fields: [{name: "Command", value: "ping\ninvite\ndesigns\navatar <design name>\nserver <design name>\nhub\nsubmit", inline: true}, {name: "Description", value: "Get response times.\nInvite the bot to your server.\nGet a list of designs.\nLet the bot send you an avatar\nLet the bot change your server icon.\nAn invite url to the support server. \nGet the link to submit images to Prolus.", inline: true }]}})
  }else {
    return msg.channel.sendMessage(`Hey, <@${msg.author.id}>\n\nI am Prolus!\nI was made to deliver your awesome avatars and server icons.\n\nLet's get started!\nMy prefix is ${client.guildConfs.get(msg.guild.id)["prefix"].data}\n\n**__Command__** --------------- **__Description__**\nping ---------------------- Get response time.\ninvite --------------------- Invite the bot to your server.\ndesigns ------------------- Get a list of designs.\navatar <design name> -- Let the bot send you an avatar.\nserver <design name> -- Let the bot change your server icon.\nhub ----------------------- An invite url to the support server.\nsubmit -------------------- Get the link to submit images to Prolus.`)
}



}

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["commands"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "help",
  description: "Shows help with the bot",
  usage: "",
  usageDelim: " ",
};
