import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let wm = global.wm

    if (!text) throw `توليد صور على شكل أنمي قم بالإبداع بالكتابة.هاكذا \n\n مثال : .animediff2 girl with cat`
    await m.reply(waittt)

    await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '👌' } }, { messageId: m.key.id })
    try {
        let url = `https://aemt.me/v5/text2img?text=${text}`

        await conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'fubuki.jpg', 'instagram.com/ovmar_1', m)
        m.react(done)

    } catch (e) {
        console.log(e)
        //conn.reply()
    }
}

handler.help = ['animediff2 <prompt>']
handler.tags = ['drawing']
handler.command = /^(animediff2)$/i

handler.premium = false
handler.limit = 2
handler.register = false

export default handler
