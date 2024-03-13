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
      

 ▢ *◞❐ أهـلا وسـهـلاً بـك يـا:* ${taguser}

 _𝑹𝑨𝑴𝑨𝑫𝑨𝑵-𝑴𝑼𝑩𝑨𝑹𝑨𝑲🌸_
*◞❐🛑مـلاحـظـة🛑◈◜*
*◞❐ يـجـب عـلـيـك كـتـابـة نـقـطـة قـبـل كـل أمـر مـثـل ⇠ 『 sticker.』◈◜*

  _*🫶🩷قـائمة القائمـة*_
  
  ▢ _${usedPrefix}menuaudios_أوديويات
  ▢ _${usedPrefix}menuanimes_صور الانمي

  _*🫶🩷التـطبــيقــات*_
  
  ▢ _${usedPrefix}dapk2
  ▢ _${usedPrefix}modapk
  ▢ _${usedPrefix}apk

  _*🫶🩷الذكــاء الاصطـناعي*_
  
  ▢ _${usedPrefix}simi *<النص>*_
  ▢ _${usedPrefix}chatgpt *<النص>*_
  ▢ _${usedPrefix}gptvoz *<النص>*_

  _*🫶🩷توليـــد الصــور*_
  
  ▢ _${usedPrefix}img *<النص>*_
  ▢ _${usedPrefix}dall-e *<النص>*_
  
  _*🫶🩷حــول البـوت*_

  ▢ _${usedPrefix}grupos_
  ▢ _${usedPrefix}estado_
  ▢ _${usedPrefix}speedtest_
  ▢ _${usedPrefix}owner_
  ▢ _${usedPrefix}script_
  ▢ _${usedPrefix}reporte *<txt>*_
  ▢ _${usedPrefix}join *<wagp_url>*_

 _*🫶🩷جــادي بـوت*_

  ▢ _${usedPrefix}serbot --code_
  ▢ _${usedPrefix}serbot_
  ▢ _${usedPrefix}deletebot_
  ▢ _${usedPrefix}token_
  ▢ _${usedPrefix}stop_
  ▢ _${usedPrefix}bots_

 _*🫶🩷التحميــلات*_

 ▢ _${usedPrefix}play *<النص>*_
 ▢ _${usedPrefix}play2 *<النص>*_
 ▢ _${usedPrefix}play.1 *<النص>*_
 ▢ _${usedPrefix}play.2 *<النص>*_
 ▢ _${usedPrefix}playlist *<النص>*_
 ▢ _${usedPrefix}ytmp3 *<رابط>*_
 ▢ _${usedPrefix}ytmp4 *<رابط>*_
 ▢ _${usedPrefix}spotify *<النص>*_
 ▢ _${usedPrefix}facebook *<رابط>*_
 ▢ _${usedPrefix}instagram *<رابط>*_
 ▢ _${usedPrefix}mediafire *<رابط>*_ 
 ▢ _${usedPrefix}gitclone *<رابط>*_
 ▢ _${usedPrefix}gdrive *<رابط>*_

  _*🫶🩷البـحـت عــن 👇*_
  
  ▢ _${usedPrefix}pelisplus *<txt>*_ فيلم
  ▢ _${usedPrefix}stickersearch *<txt>*_ ملصق
  ▢ _${usedPrefix}stickersearch2 *<txt>*_ ملصق2
  ▢ _${usedPrefix}google *<txt>*_ موضوع أو نص
  ▢ _${usedPrefix}letra *<النص>*_
  ▢ _${usedPrefix}wikipedia *<النص>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_ فيدوات يوتيب 
  ▢ _${usedPrefix}playstore *<txt>*_ تطبيقات

 _*🫶🩷المحـــولات*_

  ▢ _${usedPrefix}toanime *<صور>*_
  ▢ _${usedPrefix}togifaud *<فيديو>*_
  ▢ _${usedPrefix}toimg *<ملصق>*_
  ▢ _${usedPrefix}tomp3 *<فيديو>*_
  ▢ _${usedPrefix}tomp3 *<ملاحظة صوتية>*_
  ▢ _${usedPrefix}toptt *<فيديو / صوت>*_
  ▢ _${usedPrefix}tovideo *<ملصق>*_
  ▢ _${usedPrefix}tts *<تأثير> <النص>*_
  ▢ _${usedPrefix}tts *<تأثير> <النص>*_

 _*🫶🩷التأثيـرات والشعـارات*_

  ▢ _${usedPrefix}logos *<تأثير> <النص>*_
  ▢ _${usedPrefix}ytcomment *<النص>*_
  ▢ _${usedPrefix}hornycard *<@tag>*_
  ▢ _${usedPrefix}simpcard *<@tag>*_
  ▢ _${usedPrefix}lolice *<@tag>*_
  ▢ _${usedPrefix}itssostupid_
  ▢ _${usedPrefix}pixelar_
  ▢ _${usedPrefix}blur_
  ▢ _${usedPrefix}hd *<جودة الصورة>*_

 _*🫶🩷بوستــات*_

  ▢ _${usedPrefix}piropo_ عبارات 
 
 _*🫶🩷الصــور*_
 
  ▢ _${usedPrefix}cristianoronaldo_ رونالدو
  ▢ _${usedPrefix}messi_ ميسي
  ▢ _${usedPrefix}cat_ قط
  ▢ _${usedPrefix}dog_ كلب
  ▢ _${usedPrefix}meme_ ميمي
  ▢ _${usedPrefix}itzy_
  ▢ _${usedPrefix}blackpink_ أسود وردي
  ▢ _${usedPrefix}navidad_ عيد الميلاد
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_ بابجي
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wpaesthetic_
  ▢ _${usedPrefix}wpaesthetic2_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wallhp_ والحب
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}wpmoto_
  ▢ _${usedPrefix}coffee_ قهوة
  ▢ _${usedPrefix}pentol_ كرات اللحم
  ▢ _${usedPrefix}caricatura_ رسوم متحركة
  ▢ _${usedPrefix}ciberespacio_الفضاء السيبراني
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_تكنولوجيا
  ▢ _${usedPrefix}hacker_ هاكر
  ▢ _${usedPrefix}planeta_كوكب_
  ▢ _${usedPrefix}randomprofile_ملف تعريف عشوائي

 _*🫶🩷ألعــاب*_

  ▢ _${usedPrefix}mates *<مستجد / سهل / واسطة / صعب / أقصى /مستحيل /مستحيل2>*_
  ▢ _${usedPrefix}fake *<النص1> <@tag> <النص2>*_
  ▢ _${usedPrefix}ppt *<ورقة / حجر /مقص>*_
  ▢ _${usedPrefix}prostituto *<اسم / @tag>*_
  ▢ _${usedPrefix}prostituta *<اسم / @tag>*_
  ▢ _${usedPrefix}gay2 *<اسم / @tag>*_
  ▢ _${usedPrefix}lesbiana *<اسم / @tag>*_
  ▢ _${usedPrefix}pajero *<اسم / @tag>*_
  ▢ _${usedPrefix}pajera *<اسم / @tag>*_
  ▢ _${usedPrefix}puto *<اسم / @tag>*_
  ▢ _${usedPrefix}puta *<اسم / @tag>*_
  ▢ _${usedPrefix}manco *<اسم / @tag>*_
  ▢ _${usedPrefix}manca *<اسم / @tag>*_
  ▢ _${usedPrefix}rata *<اسم / @tag>*_
  ▢ _${usedPrefix}love *<اسم / @tag>*_
  ▢ _${usedPrefix}slot *<رهان>*_
  ▢ _${usedPrefix}ttt *<اسم الغرفة>*_`.trim();
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
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
