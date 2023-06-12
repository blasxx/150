const Discord = require("discord.js")
const client = new Discord.Client()
const moment = require('moment');

exports.run = async (client, msg, args) => {
            const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setAuthor(msg.guild.name, msg.guild.iconURL)
            .setTitle(`Sunucudaki Roller [${msg.guild.roles.cache.size}]`)
            .setDescription(`<@&${msg.guild.roles.cache.map(roles => `${roles.id}`).join('>, <@&')}>`)
            return msg.channel.send(embed)
    }
//botclub
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rols"],
  permLevel: 0
};

exports.help = {
  name: 'sunucu rolleri',
  description: 'rolleri gösterir',
  usage: 'roller'
};