//
// project owned by TobiasFeld22
// 2017
//
var isAlphanumeric = require('is-alphanumeric');
var exports = module.exports = {}

exports.getFirst = function(username) {

if(isAlphanumeric(username) == false){
  return null
}
else {
  return username.substring(0, 1)
}



}
