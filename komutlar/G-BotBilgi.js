const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(` | Discord Bot Bilgi Tablosu`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1052282677597831250/1055913909862797392/standard_26.gif"    )
    .setDescription(
      `📯  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `📗 **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n 📗 **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n 📗 **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "👑 **Sunucu Sahipleri**  <@804346433834319873> \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `🥽 **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n 🦺  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `🩱 \`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎓  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎓 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🎓 \`${prefix}iletişim\` |  İletişim Bilgileri.`
    ); 
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};
