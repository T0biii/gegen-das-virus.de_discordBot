const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require("fs");
var adminchannel;

client.on("ready", () => {
  console.log("Discord Bot started!");
  adminchannel = client.channels.cache.get("689949212011528262");
});

client.on("message", msg => {
  // Command Hadling
});


client.on("guildMemberAdd", member => {
  try {

    //console.log(member.client.user.locale);
    let localeCode = member.user.locale;
    if(!localeCode) {
      localeCode = "en-GB";
    }
    let languageJSON = JSON.parse(fs.readFileSync("./assets/i18n/" + localeCode + ".json"));
    member.send({embed: {color: 3447003, fields: languageJSON.welcome}});
    adminchannel.send("Ein neuer Benutzer ist gejoint " + member.displayName);
  } catch (e) {
    console.error(e);
  }
});


client.login("<private key>");
