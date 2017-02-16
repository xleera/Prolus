//
// project owned by TobiasFeld22
// 2017
//
var isAlphanumeric = require('is-alphanumeric');
var exports = module.exports = {}

exports.getFirst = function(name) {

if(isAlphanumeric(name.substring(0,1)) == false){
  return null
}
else if(isNaN(name.substring(0,1)) == false){
  return null
}
else {
  return name.substring(0, 1)
}



}
