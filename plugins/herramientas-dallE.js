import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] أدخل نصًا لإنشاء صورة، ومن ثم استخدم الدالة 𝙳𝙰𝙻𝙻-𝙴*\n\n*—◉ أمثلة على الطلبات*\n*◉ ${usedPrefix + command} القطط البكاء*\n*◉ ${usedPrefix + command} السعر الأولي ميكو بيسو*`;
    await conn.sendMessage(m.chat, {text: '*[❗] 💖 جاري صنع الصورة إنتظر لحضة 🌹.*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('[❗] خطأ في API رقم 1 dall-e.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('[❗] خطأ في API رقم 2 dall-e.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('[❗] خطأ في API رقم 3 dall-e.');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('[❗] خطأ، لا توجد واجهة برمجة تطبيقات تعمل.');
    throw `*[❗] خطأ، لم يتم الحصول على أي نتائج😞.*`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;
