client.on('message', async msg => {
    if (msg.content.toLowerCase() === 'Sa') {
     const kalpgif = client.emojis.cache.get('775351638734405653');
      msg.reply(`**Aleyküm Selam, Hoşgeldin ${kalpgif} ** `)
  }});