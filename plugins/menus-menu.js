import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *◞♥️بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ♥️◜*
 *↻╍╍━┛🕋┗━╍╍↺*
*◞{إِنَّمَا ٱلتَّوۡبَةُ عَلَى ٱللَّهِ لِلَّذِينَ يَعۡمَلُونَ ٱلسُّوٓءَ بِجَهَٰلَةٖ ثُمَّ يَتُوبُونَ مِن قَرِيبٖ فَأُوْلَٰٓئِكَ يَتُوبُ ٱللَّهُ عَلَيۡهِمۡۗ وَكَانَ ٱللَّهُ عَلِيمًا حَكِيمٗا}◜*
*↻╍╍━┛🕋┗━╍╍↺*   
      

 ▢ *◞❐ Hello🤴:* ${taguser}

 
*◞❐🛑مـلاحـظـة🛑◈◜*
*◞❐ يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『apk.』◈◜*

  
  ❀° ┄──•••───╮
متــابعـة مـــن فضــلك : https://instagram.com/nawfal_the_ghost

*╭─────≼‎قائمةالقائمة≽*
*▢🌎${usedPrefix}menuaudios* أوديويات 
*▢🌎${usedPrefix}menuanimes* صور 
*╭─────≼‎ تحمــيل التطبيقـــات‎ ≽*
*⌲🌿${usedPrefix}apk*
*⌲🌿${usedPrefix}medaifire*
*⌲🌿${usedPrefix}dapk2*
*⌲🌿${usedPrefix}modapk*
〢╭─────≼الذكـاء الاصطنــاعي≽*
*⌲📜${usedPrefix}dx*
*╭─────≼ ‎ توليــد الصـور ≽*
*⌲🩷${usedPrefix}remini*
*⌲🩷${usedPrefix}hd*
*⌲🩷${usedPrefix}a-img*
*⌲🩷${usedPrefix}dalle*
*⌲🩷${usedPrefix}openai3*
*⌲🩷${usedPrefix}imagen*
*╭─────≼‎ الإســــلام ≽*
*⌲🍀الله*
*⌲🍀حكمة*
*⌲🍀قران*
*⌲🍀الطقس*
*╭─────≼‎ المحــولات ≽*
⌲_☄️${usedPrefix}toanime_ *<صور>*
⌲_☄️${usedPrefix}togifaud_ *<فيديو>*
⌲_☄️${usedPrefix}toimg_ *<ملصق>*
⌲_☄️${usedPrefix}tomp3_ *<فيديو>* 
⌲_☄️${usedPrefix}tomp3_ *<ملاحظة صوتية>*
⌲_☄️${usedPrefix}toptt_ *<فيديو / صوت>*
⌲_☄️${usedPrefix}tovideo_ *<ملصق>*
⌲_☄️${usedPrefix}tts_ *<تأثير> <النص>*
*╭─────≼‎ عبــارات ≽*
*⌲❄️${usedPrefix}piropo*
*⌲❄️${usedPrefix}love*
 〢╭─────≼ ‎ التنــزيـلات   ≽*
 ⎪⌲💕_${usedPrefix}play_
 ⎪⌲💕 _${usedPrefix}song_
 ⎪⌲💕 _${usedPrefix}yta <link>_
 ⎪⌲💕_${usedPrefix}ytv <link>_
 ⎪⌲💕 _${usedPrefix}ytmp3 <link>_
 ⎪⌲💕 _${usedPrefix}ytmp4 <link>_
 ⎪⌲💕_${usedPrefix}mediafire <link>_
 ⎪⌲💕 _${usedPrefix}gdrive <link>_
 ⎪⌲💕 _${usedPrefix}<link>_
 ⎪⌲💕 _${usedPrefix}spotify_
 ⎪⌲💕 _${usedPrefix}facebook <link>_
  *╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
  *╭─────❀° ┄──•••───╮
          𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐  
*⌲🐉${usedPrefix}grupos*
*⌲🐉${usedPrefix}estado*
*⌲🐉${usedPrefix}speedtest*
*⌲🐉${usedPrefix}owner*
*⌲🐉${usedPrefix}reporte*
*⌲🐉${usedPrefix}join* *<wagp_url>*
  *╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
*╭─────≼ ‎جـــادي بــوت ≽*
*⌲🌺${usedPrefix}serbot --code*
*⌲🌺${usedPrefix}serbot*
*⌲🌺${usedPrefix}deletebot*
*⌲🌺${usedPrefix}bots*
*⌲🌺${usedPrefix}stop*
*⌲🌺${usedPrefix}token*
*╭─────≼ ‎البحــت عـن👇 ≽*
⌲_🪵${usedPrefix}pelisplus_ *<txt>* فيلم
⌲_🪵${usedPrefix}stickersearch_ *<txt>* ملصق
⌲_🪵${usedPrefix}stickersearch2_  *<txt>* ملصق2
⌲_🪵${usedPrefix}google_ *<txt>* موضوع أو نص
⌲_🪵${usedPrefix}letra_ *<النص>*
⌲_🪵${usedPrefix}wikipedia_ *<النص>*
⌲_🪵${usedPrefix}ytsearch_ *<txt>* فيديو يوتيب 
⌲_🪵${usedPrefix}playstore_  *<txt>* تطبيقات 
*╰┄┄┄┄┄┄┄┄┄┄┄┄┄〢*
❀° ┄──•••───╮
          𝘽𝙊𝙏 𝙈𝙀𝙉𝙐     
*⎪⌲👑${usedPrefix}logos*
*⎪⌲👑${usedPrefix}ytcomment* *<النص>*
*⎪⌲👑${usedPrefix}blur*
*⎪⌲👑${usedPrefix}pixelar*
*⎪⌲👑${usedPrefix}cristianoronaldo* رونالدو
*⎪⌲👑${usedPrefix}messi* ميسي
*⎪⌲👑${usedPrefix}meme* ميمي
*⎪⌲👑${usedPrefix}dog* كلب
*⎪⌲👑${usedPrefix}cat* قط
*⎪⌲👑${usedPrefix}blackpink*
*⎪⌲👑${usedPrefix}navidad*
*⎪⌲👑${usedPrefix}itzy*
*⎪⌲👑${usedPrefix}wpmontaña*
*⎪⌲👑${usedPrefix}wallhp*
*⎪⌲👑${usedPrefix}wpaesthetic2*
*⎪⌲👑${usedPrefix}wpgaming*
*⎪⌲👑${usedPrefix}wprandom*
*⎪⌲👑${usedPrefix}wpmoto*
*⎪⌲👑${usedPrefix}pentol*
*⎪⌲👑${usedPrefix}caricatura*
*⎪⌲👑${usedPrefix}hacker*
*⎪⌲👑${usedPrefix}planeta*
*⎪⌲👑${usedPrefix}randomprofile*
┏━━━✵
https://chat.whatsapp.com/Kxqr5RFdbnyDWqKlceIRi5`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      conn.sendMessage(m.chat, {audio: { url: 'https://files.catbox.moe/us06px.mp3' }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                                                                                                                                                                                                                                                           
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] تحتوي هذه القائمة على خطأ داخلي، ولهذا السبب لم يكن من الممكن إرسالها.*', m);
  }
};                         
handler.command = /^(menu|menú|اوامر|المهام|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
