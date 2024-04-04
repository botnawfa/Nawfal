import axios from 'axios';
import cheerio from 'cheerio';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "مثال \n .ai عاصمة المغرب"
    await m.reply(waitt)
    try {
        let result = await generate(text)
        await m.reply(result)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["ai"]
handler.tags = ["ai"];
handler.command = /^(ai)$/i
export default handler

/* New Line */
async function generate(q) {
    try {
        const nonceValue = JSON.parse(cheerio.load(await (await axios.get(
            "https://gpt4free.io/chat"
        )).data)('.mwai-chatbot-container').attr('data-system')).restNonce;

        const {
            data
        } = await axios(
            "https://gpt4free.io/wp-json/mwai-ui/v1/chats/submit", {
                method: "post",
                data: {
                    botId: "default",
                    newMessage: q,
                    stream: false,
                },
                headers: {
                    "X-WP-Nonce": nonceValue,
                    "Content-Type": "application/json",
                },
            }
        );
        return data.reply;
    } catch (err) {
        console.log(err.response.data);
        return err.response.data.message;
    }
}
