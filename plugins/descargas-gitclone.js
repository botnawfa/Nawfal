import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `_*< تنزيل - جيت كلون />*_\n\n*[ ℹ️ ] أدخل رابط جيثب.*\n\n*[ 💡 ] مثال:* _${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD_`;
  if (!regex.test(args[0])) throw '_*< تنزيل - جيت كلون />*_\n\n*[ ℹ️ ] الرابط الذي قدمته غير صحيح.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`_*< تنزيل - جيت كلون />*_\n\n*[ ℹ️ ] يتم الآن إرسال الملف.  انتظر...*\n\n*[ ℹ️ ] إذا لم يتم الشحن، فقد يكون ذلك بسبب تجاوزه الحد الأقصى للحجم.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /gitclone/i;
export default handler;
