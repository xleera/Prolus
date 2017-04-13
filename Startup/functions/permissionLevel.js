/*module.exports = (client, msg, [user, guild]) => new Promise(async (resolve, reject) => {
  let permlvl = 0;
  if (guild) {
    const guildConf = client.configuration.get(guild);
    try {
      const modRole = guild.roles.find("name", guildConf.modRole);
      const member = await guild.fetchMember(user).catch(err => client.emit("error", client.funcs.newError(err)));
      if (modRole && member.roles.has(modRole.id)) {
        permlvl = 2;
      }
      const adminRole = guild.roles.find("name", guildConf.adminRole);
      if (adminRole && member.roles.has(adminRole.id)) {
        permlvl = 3;
      }
      if (member === guild.owner) {
        permlvl = 4;
      }
      if (user.id === client.config.ownerID) {
        permlvl = 10;
      }
//      if (["218459651098935297", "179649961611231232"].includes(msg.author.id)) permLevel = 10;
      resolve(permlvl);
    } catch (e) {
      reject(e);
    }
  } else {
    if (user.id === client.config.ownerID) {
      permlvl = 10;
    }
    resolve(permlvl);
  }
});
*/

module.exports = (client, user, dm) => {
  let permlvl = 0;
  if (dm) {
    if (user.id === client.config.ownerID) permlvl = 10;
    return permlvl;
  }
  const modRole = user.guild.roles.find("name", user.guild.conf.modRole);
  const adminRole = user.guild.roles.find("name", user.guild.conf.adminRole);
  if (modRole && user.roles.has(modRole.id)) permlvl = 2;
  if (adminRole && user.roles.has(adminRole.id)) permlvl = 3;
  if (user.id === user.guild.owner.id) permlvl = 4;
  if (user.id === "105103261333196800" || user.id === "149451334054051840") permlvl = 10;
  if (user.id === client.config.ownerID) permlvl = 10;
  return permlvl;
}