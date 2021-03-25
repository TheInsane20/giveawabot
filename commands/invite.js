const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message..bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Support Server", "[Click to join support Server](https://discord.gg/WAcxYTWs)")
    .setTitle("Bot invite Link")
    .addField("Invite Link", "[Click to invite the bot](https://discord.com/api/oauth2/authorize?client_id=824557820011216916&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(`Requested by ${message..tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
