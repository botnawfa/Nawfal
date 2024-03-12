// TheMystic-Bot-MD@BrunoSobrino - descargas-spotify.js
// Creditos de los tags a @darlyn1234 y diseño a @ALBERTO9883
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `_*< DESCARGAS - SPOTIFY />*_\n\n*[ ℹ️ ] مطلوب عنوان أغنية Spotify.*\n\n*[ 💡 ] مثال:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
  try {
    const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = ` _*< DESCARGAS - SPOTIFY />*_\n\n`
        spotifyi += ` ▢ *عنوان:* ${spty.title}\n\n`
        spotifyi += ` ▢ *فنان:* ${spty.artist}\n\n`
        spotifyi += ` ▢ *الألبوم:* ${spty.album}\n\n`                 
        spotifyi += ` ▢ *نشرت:* ${spty.year}\n\n`   
        spotifyi += `*[ ℹ️ ] يتم إرسال الصوت.  انتظر...*`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "الرد الإعلاني الخارجي": {"showAdAttribution": true, "يحتوي على الرد التلقائي": true, "تقديم صورة مصغرة أكبر": true, "عنوان": global.titulowm2, "يحتوي على الرد التلقائي": true, "نوع الوسائط": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '_*< DESCARGAS - SPOTIFY />*_\n\n[ ℹ️ ] حدث خطأ.  الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;

//***Código antiguo/obsoleto.

/*import fetch from 'node-fetch';
import Spotify from 'spotifydl-x';
import fs from 'fs';
import NodeID3 from 'node-id3';
import axios from 'axios';
import {find_lyrics} from '@brandond/findthelyrics';

const credentials = {
  clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
  clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
};
const spotify = new Spotify.default(credentials);

const handler = async (m, { conn, text }) => {
 if (!text) throw `*[❗] Ingrese el nombre de alguna canción de spotify.*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    const artist = spty.data.artists.join(', ') || '-';
    const img = await (await fetch(`${spty.data.cover_url}`)).buffer()  
    const letra_s = await find_lyrics(spty.data.name ? spty.data.name : '');
    let letra;
    letra = `${letra_s ? letra_s + '\n\n🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖' : '🤴🏻 Descarga por BrunoSobrino & TheMystic-Bot-MD 🤖'}`  
    const tags = {
      title: spty.data.name || '-',
      artist: artist,
      album: spty.data.album_name || '-',
      year: spty.data.release_date || '-',
      genre: 'Música',
      comment: {
        language: 'spa',
        text: letra,
      },
      unsynchronisedLyrics: {
        language: 'spa',
        text: letra,
      },
      image: {
        mime: 'image/jpeg',
        type: {
          id: 3,
          name: 'front cover',
        },
        description: 'Spotify Thumbnail',
        imageBuffer: await axios.get(spty.data.cover_url, {responseType: "arraybuffer"}).then((response) => Buffer.from(response.data, "binary")),
      },
      mimetype: 'image/jpeg',
      copyright: 'Copyright Darlyn ©2023',
    };
    await fs.promises.writeFile(filePath, spty.audio);
    await NodeID3.write(tags, filePath);
    let spotifyi = `*• 💽 Spotify Download •*\n\n`
         spotifyi += `	◦  *Título:* ${spty.data.name}\n`
         spotifyi += `	◦  *Artista:* ${spty.data.artists}\n`
         spotifyi += `	◦  *Album:* ${spty.data.album_name}\n`                 
         spotifyi += `	◦  *Publicado:* ${spty.data.release_date}\n\n`   
         spotifyi += `El audio se esta enviando, espere un momento..`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '*[❗] Error, no se encontraron resultados.*';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;

async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await spotify.getTrack(url);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Tiempo de espera agotado'));
        }, 300000);
      });
      const audioPromise = spotify.downloadTrack(url);
      const audio = await Promise.race([audioPromise, timeoutPromise]);
      resolve({ data: res, audio });
    } catch (error) {
      reject(error);
    }
  });
}*/
