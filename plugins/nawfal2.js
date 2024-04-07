import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
    if (!text) {
      return conn.reply(m.chat, `Silakan coba lagi, teks jangan kosong.\n*Ex: ${usedPrefix + command} berikan saya kodingan python kalkulator!*`, m);
    }
      
    await m.reply(wait)

    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return conn.reply(m.chat, 'غير قادر على معالجة طلبك في هذا الوقت.', m);
    }

    const data = await response.json();
    const result = data.result;

    if (!result) {
      return conn.reply(m.chat, 'غير قادر على معالجة طلبك في هذا الوقت.', m);
    }

    conn.reply(m.chat, result, m);
  } catch (error) {
    
    throw eror
  }
};

handler.help = ['nawfal2'];
handler.tags = ['ai'];
handler.limit = 2;
handler.register = true;

handler.command = /^(nawfal2)$/i;

export default handler;

// Ni plugens
