import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) {
    throw `_*< IA - BARD />*_\n\n*[ ℹ️ ] تقديم النص📁🤺.*\n\n*[ 💡 ] ميتآل:* _${usedPrefix + command} مآهية عاصمة المغرب_`;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw '_*< IA - BARD />*_\n\n*[ ℹ️ ] ​​​​​​​​.♡゙ۦلا يمكن الحصول على رد صالح.*';
    }
  } catch (error) {
    throw `_*< IA - BARD />*_\n\n*[ ℹ️ ] حدث خطأ.  الرجاء معاودة المحاولة في وقت لاحق.*`;
  }
};

handler.command = /^bard$/i;

export default handler;
