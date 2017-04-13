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
  name: "enable",
  description: "Re-enables or temporarily enables a Inhibitor/Command/Monitor. Default state restored on reboot.",
  usage: "",
  usageDelim: " ",
};
