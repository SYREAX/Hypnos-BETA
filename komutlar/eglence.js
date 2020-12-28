const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» ParaDoks BOT Eglence Komutları')
.setTimestamp()
.addField('» !adamasmaca', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !aduketçek', 'Örnek:!aduketçek @Kisi')
.addField('» !ara155', 'Örnek:Komutu Yazmanız Yeterli (FAKE)')
.addField('» !balıktut', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !beşlik', 'Örnek:!beşlik @Kisi')
.addField('» !efkarım', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !espri', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !kartopu', 'Örnek:!kartopu @Kisi')
.addField('» !öp', 'Örnek:!öp @Kisi')
.addField('» !slots', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !şekerye', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !taksimdayi', 'Örnek:Komutu Yazmanız Yeterli')
.addField('» !tokat', 'Örnek:!tokat @Kisi')
.addField('» !yılbaşı', 'Örnek:Komutu Yazmanız Yeterli')
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
  name: 'eglence',
  description: 'eglence komutları gösterir.',
  usage: 'eglence'
};