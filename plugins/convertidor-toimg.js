import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const notStickerMessage = `*[❗𝐈𝐍𝐅𝐎❗] قم بالرد على الملصق الذي تريد تحويله إلى صورة باستخدام الأمر ${usedPrefix + command}*`;
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
export default handler;
