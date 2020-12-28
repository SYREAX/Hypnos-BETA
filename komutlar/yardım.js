const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» ParaDoks BOT Komut Sistemleri')
.setTimestamp()
.addField('» !moderasyon', 'Size Moderasyon Komutlarını Gösterir')
.addField('» !genel', 'Size Genel Komutları Gösterir')
.addField('» !eglence', 'Size Eglence Komutlarını Gösterir')
.addField('» !davet', 'Botu İstediğiniz Bir Sunucuya Çağırmanız İçin Link Gönderir')
.setFooter('© 2021 ParaDoks Bot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};