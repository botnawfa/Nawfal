import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `*مرحباً بك في قسم الذكاء نوفل بوت*\nNAWFAL NL`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/f59f5fcd503f48b5ae9c7.jpg' },
      caption: '*يرجي الانتظار*'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const itachigpt = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    try {
      let response = await fetch(itachigpt);
      let data = await response.json();
      let result = data.result;

      if (!result) {

        throw new Error('لا توجد استجابة JSON صالحة من API');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    } catch (error) {
      console.error('الخطأ من الأول API:', error);


      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `nawfal nl_${senderNumber}`;
      const itachigpt = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(itachigpt);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    }

  } catch (error) {
    console.error('Error:', error);
    throw `╰⊱❌⊱ *خطأ* ⊱❌⊱╮`;
  }
};
handler.help = ['nawfalgpt']
handler.tags = ['AI']
handler.command = ['نوفل'];
//handler.limt = true||false
//حسب انت جورو او بوت عادي
//handler.gold = true||false
export default handler;
