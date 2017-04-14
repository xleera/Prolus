const komada = require("komada");
const config = require("../config.json")


komada.start({
  botToken: config.d_token,
  ownerID: "156859037890117632",
  clientID: "281544230210371594",
  prefix: "d\\",
  clientOptions: {
    fetchAllMembers: true,
  },
});
