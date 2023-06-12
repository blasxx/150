const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(` Davet Menü`)
    .setDescription('**• [ZEUS BOTU` Ekleyin.](https://discord.com/oauth2/authorize?client_id=1054835037650038884&scope=bot&permissions=8)**\n\n**• [Top.gg Oy Ver]()**') 
    .addField(
      `__Bilgilendirme__`,
      `🔰  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔰 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔰 \`${prefix}iletişim\` | ZEUS İletişim Bilgileri.`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1052282677597831250/1055913909862797392/standard_26.gif"
    );

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
