const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» ParaDoks BOT Moderasyon Komutları')
.setTimestamp()
.addField('» !ban', 'Örnek:!ban ID')
.addField('» !kick', 'Örnek:!kick ID')
.addField('» !rolver', 'Örnek:!rolver @Kisi @Rol')
.addField('» !yetkilerim', 'Örnek:!yetkilerim @Kisi')
.addField('» !ototag', 'Örnek:!ototag (Tag)')
.addField('» !ototag', 'Örnek:!ototagkanal #kanal')
.addField('» !yavaşmod', 'Örnek:!yavaşmod 1/100')
.addField('» !saas', 'Komutu Yazmanız Yeterli')
.addField('» !sil', 'Örnek:!sil (Silmek İstediğiniz Mesaj Sayısı)')
.addField('» !oylama', 'Örnek:!oylama (Oylama İsmi)')
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
  name: 'moderasyon',
  description: 'moderasyon komutları gösterir.',
  usage: 'moderasyon'
};