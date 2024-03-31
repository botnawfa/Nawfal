const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*[❗] الرابط غير صحيح أو مفقود، أدخل رابط مجموعة الواتساب.*\n\n*—◉ مثال:*\n*◉ #join https://chat.whatsapp.com/Kxqr5RFdbnyDWqKlceIRi5*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*[ ✔️ ] لقد دخل الروبوت إلى المجموعة بنجاح.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*[❗] تم إرسال رابط مجموعتك إلى مالكي/a.*\n\n*—◉ ستكون مجموعتك قيد التقييم وسيقرر مالك الروبوت ما إذا كان سيضيف الروبوت أم لا.*\n\n*—◉ بعض الأسباب التي قد تؤدي إلى رفض طلبك هي:*\n*1.- البوت مشبع.*\n*2.- تمت إزالة الروبوت مؤخرًا من المجموعة.*\n*3.- تمت استعادة رابط المجموعة.*\n*4.-لا تتم إضافة الروبوت إلى المجموعات بقرار من المالك/a.*\n\n*—◉ قد تستغرق عملية التقييم بعض الوقت، حتى أيام، يرجى التحلي بالصبر..*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*[❗] طلب جديد لروبوت لمجموعة [❗]*\n\n*—◉ الطالب:* ' + '@' + m.sender.split('@')[0] + '\n*—◉ رابط المجموعة:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '*[❗] عذرًا، حدث خطأ ما، يرجى الإبلاغ عنه أو المحاولة مرة أخرى..*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|nuevogrupo$/i;
handler.private = true;
export default handler;
