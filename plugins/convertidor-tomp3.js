import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] الرد على الفيديو أو الملاحظة الصوتية التي يتم تحويلها إلى صوت/𝙼𝙿𝟹*`;
  const media = await q.download();
  if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] عذرًا، حدث خطأ أثناء تنزيل الفيديو، يرجى المحاولة مرة أخرى*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] آسف، حدث خطأ أثناء تحويل ملاحظتك الصوتية إلى صوت/𝙼𝙿𝟹، يرجى المحاولة مرة أخرى*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
