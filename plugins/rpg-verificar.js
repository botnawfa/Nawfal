import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] انت مسجل مسبقا\n\nهل تريد التسجيل مرة أخرى؟\n\n 📌استخدم هذا الأمر لحذف السجل الخاص بك\n*${usedPrefix}unreg* <رقم سري>`;
  if (!Reg.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] تنسيق غير صحيح*\n\n*—◉ استخدام الأمر: ${usedPrefix + command} اسم العمر*\n*—◉ مثال: ${usedPrefix + command} nawfal.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] يجب عليك وضع اسم*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] لا يمكن أن يكون العمر فارغًا*';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] اسم طويل جدا';
  age = parseInt(age);
  if (age > 60) throw '*[❗] خي، كيف لا تزال على قيد الحياة في هذا العمر؟? 👴🏻*';
  if (age < 10) throw '*[❗] خى، طفل يعرف كيفية استخدام الواتساب? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *آسم:* ${name}
┃ *عمر:* ${age} años
┃ *رقم سري:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 
┃ 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 
┃ 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|تسجيل)$/i;
export default handler;
