import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "*[❗] أدخل اسم ملف التطبيق الذي تريد البحث عنه*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*[❗] أدخل اسم ملف التطبيق الذي تريد البحث عنه*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*🔍 نتيجة:* ${v.title}
       *✍️ مطور:* ${v.developer}
       *💸 سعر:* ${v.priceText}
       *📈 علامات ترقيم:* ${v.scoreText}
        *⛓️ الرابط:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
