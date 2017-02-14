var images = require('./images.js')
var exports = module.exports = {}

exports.ping = function(message){
  var start = Date.now()
  message.channel.sendMessage("Pong!").then((msg) => {
      var end = Date.now()
      msg.edit("Pong! | Response time: `"+(end-start)+"ms`")
})
}
exports.designs = function(message){
var imagemap = images.list.join("\n")

message.channel.sendMessage("List of available designs:\n"+imagemap)
}
