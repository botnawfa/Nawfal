import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] آڪتب آسم تطَــبيق آلذي تريد تحــميله بعــد ڪتآبة للآمر    
.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *تنزيل ابتويد* 📲\n\n📌 *آسم آلتطَبيق⏤͟͟͞🤧:* ${data5.name}\n📦 *طَرد:* ${data5.package}\n🕒 *اخر تحديث:* ${data5.lastup}\n📥 *مقاس:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ]  ⌘الــــملــف ڪــبير جـدًا لـذا لـن يـتـم إرسـالـه.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] ⁦🤬خـــطأ، لم يتـــم العــــثور عــلــــى نتائــج لبحــثڪ.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
