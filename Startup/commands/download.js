const request = require("superagent");
const vm = require("vm");
const fs = require("fs-extra-promise");
const path = require("path");
const url = require("url");

exports.run = () => {
  return;
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
  name: "download",
  description: "Downloads a piece, either from a link or our Pieces Repository, and installs it.",
  usage: "",
  usageDelim: " ",
};
