import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] قم بالرد على الفيديو أو الصوت الذي تريد تحويله إلى مذكرة صوتية*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] أنا آسف، حدث خطأ أثناء تنزيل الفيديو الخاص بك., حاول مرة اخرى*';
  if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] أنا آسف، حدث خطأ أثناء تنزيل أوديو الخاص بك.حاول مرة اخرى*';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] عذرًا، حدث خطأ أثناء تحويل الصوت إلى مذكرة صوتية، يرجى المحاولة مرة أخرى*';
  if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] عذرًا، حدث خطأ أثناء تحويل الفيديو إلى مذكرة صوتية، يرجى المحاولة مرة أخرى*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
