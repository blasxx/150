const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setDescription(' Bu komutu kullanabilmek için Üyeleri yasakla iznine sahip olmalısın.'));
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['say', 'söyle'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};