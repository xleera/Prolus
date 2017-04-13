/* eslint-disable no-case-declarations, consistent-return */
exports.run = () => {
  return;
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "disable",
  description: "Temporarily disables the inhibitor/monitor/command. Resets upon reboot.",
  usage: "",
  usageDelim: " ",
};
