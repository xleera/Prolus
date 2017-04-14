const komada = require("komada");
const fs = require("fs")

if ( fs.existsSync('../config.json') == false){
  console.error("There isn't a config file on this system, copy the contents of the src/examples folder and copy config.json to the root of your project.")
}else if ( fs.existsSync('./images.json') == false){
  console.log("No image.json file found, generating a new one.")
fs.writeFile(__dirname+"/images.json", "[]", "utf8", (err) => {
  if (err){console.error("Unable to create a new images.json file in " + __dirname)}
})
}
const config = require("../config.json")

if (config.d_token == null ||  config.d_token == undefined || config.d_token.length !== 59){
  console.error("No token set in config.json or invalid token entered.")
}else if (config.ownerID == null ||  config.ownerID == undefined || config.ownerID.length != 18){
console.error("No ownerID set in config.json or invalid ownerID set.")
}else if (config.clientID == null ||  config.clientID == undefined || config.clientID.length != 18){
console.error("No clientID set in config.json or invalid clientID set.")
}



komada.start({
  botToken: config.d_token,
  ownerID: config.ownerID,
  clientID: config.clientID,
  prefix: "d\\",
  clientOptions: {
    fetchAllMembers: true,
  },
});
