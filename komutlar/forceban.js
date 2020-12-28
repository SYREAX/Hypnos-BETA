module.exports = {
    name:"forceban",
    code:`
    $suppressErrors[Böyle Bir IDli Kullanıcı Bulamadım Tekrar Kontrol Edermisin !?]
    $ban[$message[1]]
    \`\`$username[$message[1]]#$discriminator[$message[1]]\`\` Kişisi Sunucudan Force-Ban İle Yasaklanmıştır !
    $onlyIf[$isNumber[$message[1]]!=false;Girdiğin Bir ID Değil !]
    $onlyIf[$message!=;Bir ID Girmelisiniz !]
    `
  }