//عمك نوفل ✨🐉
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 أدخل التنسيق الذي تريد تنزيله بشكل أكبر من عنوان فيديو أو موسيقى على YouTube.*\n\ مثال : ${usedPrefix + command} *mp3* سوره البقره بصوت الشيخ ياسر الدوسري\n\ التشغيلات المتوفرة :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`, m)
    if (lister.includes(feature)) {
        if (feature == "mp3") {
            if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان فيديو أو موسيقى على YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
    let txt = `╭──────────✰\n`
	   txt += `│🍭 *العنوان ∙* ${vid.title}\n`
       txt += `│🕜 *المده ∙* ${vid.timestamp}\n`
       txt += `│👁 *المشاهدات ∙* ${vid.views}\n`
       txt += `│📚 *المؤلف ∙* ${vid.author.name}\n`
       txt += `│📅 *منشور ∙* ${vid.ago}\n`
       txt += `│⛓ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
       txt += `*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`
let buttonMessage= {
'document': { url: `https://linktr.ee/mostafa_obito` },
'mimetype': `application/pdf`,
'fileName': `✰ | يوتيوب شغل📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
        
        if (feature == "mp4") {
            if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان فيديو أو موسيقى على YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = `╭──────────✰\n`
	   txt += `│🍭 *العنوان ∙* ${vid.title}\n`
       txt += `│🕜 *المده ∙* ${vid.timestamp}\n`
       txt += `│👁 *المشاهدات ∙* ${vid.views}\n`
       txt += `│📚 *المؤلف ∙* ${vid.author.name}\n`
       txt += `│📅 *منشور ∙* ${vid.ago}\n`
       txt += `│⛓ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
       txt += `*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`
let buttonMessage= {
'document': { url: `https://linktr.ee/mostafa_obito` },
'mimetype': `application/pdf`,
'fileName': `✰ | يوتيوب شغل📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, adReply).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━━━●────── ${vid.timestamp}`, m)
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (feature == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان فيديو أو موسيقى على YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	let txt = `╭──────────✰\n`
	   txt += `│🍭 *العنوان ∙* ${vid.title}\n`
       txt += `│🕜 *المده ∙* ${vid.timestamp}\n`
       txt += `│👁 *المشاهدات ∙* ${vid.views}\n`
       txt += `│📚 *المؤلف ∙* ${vid.author.name}\n`
       txt += `│📅 *منشور ∙* ${vid.ago}\n`
       txt += `│⛓ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
       txt += `*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`
let buttonMessage= {
'document': { url: `https://linktr.ee/mostafa_obito` },
'mimetype': `application/pdf`,
'fileName': `✰ | يوتيوب شغل📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (feature == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `*🚩 أدخل عنوان فيديو أو موسيقى على YouTube.*`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	let txt = `╭──────────✰\n`
	   txt += `│🍭 *العنوان ∙* ${vid.title}\n`
       txt += `│🕜 *المده ∙* ${vid.timestamp}\n`
       txt += `│👁 *المشاهدات ∙* ${vid.views}\n`
       txt += `│📚 *المؤلف ∙* ${vid.author.name}\n`
       txt += `│📅 *منشور ∙* ${vid.ago}\n`
       txt += `│⛓ *الرابط ∙* ${'https://youtu.be/' + vid.videoId}\n`
       txt += `╰──────────✰\n\n`
       txt += `*↻ Espera @${m.sender.split`@`[0]}, soy lenta. . .*`
let buttonMessage= {
'document': { url: `https://linktr.ee/mostafa_obito` },
'mimetype': `application/pdf`,
'fileName': `✰ | يوتيوب شغل📥`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'mentionedJid': [m.sender],
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${vid.url}`,
'mediaType': 2,
'previewType': 'VIDEO',
'title': `${vid.title}`,
'body': null,
'thumbnail': await (await fetch(vid.thumbnail)).buffer(),
'sourceUrl': 'https://youtube.com/' }},
'caption': txt,
'footer': '\nVideos de YouTube',
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻\n00:15 ━━●────── ${vid.timestamp}`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
}}}}}
handler.help = ["تشغيل"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['تشغيل']
handler.register = true 
handler.star = 2
export default handler
