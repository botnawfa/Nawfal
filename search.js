//تم تطوير هذا الملف بواسطه الجزار وايتاتشي

const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

    cmd({
        pattern: "google",
        alias :['search','جوجل'],
        category: "search",
        desc: "Sends info of given query from Google Search.",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
        if (!text) return citel.reply(`*֎╎اكـتـب عــنوان للـبـحـث عـنـه*`);
        let google = require('google-it');
        google({ 'query': text}).then(res => {
            let msg= `*❄️⃝🧚‍♀️عـنـوان الـبـحـث┇* ${text} \n\n`;
            for (let g of res) {
                msg+= `*❄️⃝🧚‍♀️الـعـنـوان┇* ${g.title}\n`;
                msg+= `*❄️⃝🧚‍♀️الـوصـف┇* ${g.snippet}\n`;
                msg+= `*❄️⃝🧚‍♀️الـرابـط┇* : ${g.link}\n\n*❋ ─═══━•┇❄️┇•━═══─ ❋*\n\n`;
            }
         
            return citel.reply(msg);
        })
    }
)
    //---------------------------------------------------------------------------
cmd({
            pattern: "image",
            alias :['صورة','صوره'],
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("*֎╎اكـتـب عـنـوان لـلـبـحـث*")
            if (!text) return reply("*֎╎اكـتـب عـنـوان لـلـبـحـث*");
            let name1 = text.split("|")[0]
            let name2 = text.split("|")[1] || `1`
            citel.reply(`*֎╎جـاري ارسـال 5 صـور لــ ${name1}*`)
            let nn = name2
            for (let i = 0; i < 5; i++) {

                let n = await gis(name1)
                images = n[Math.floor(Math.random() * n.length)].url;
                    let buttonMessage = {
                        image: {
                            url: images,
                        },
                        caption: `┓─━═║✠║◦¦❄️¦◦║✠║═━─┏

➥『❀┇𝐸𝐿𝑆𝐴 𝐵𝑂𝑇-𝑀𝐷┇❀』

*❄️⃝🧚‍♀️الـطـلـب┇* ${name1}

┛─━═║✠║◦¦❄️¦◦║✠║═━─┗`,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, buttonMessage, {
                        quoted: citel,
                    });
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "couplepp",
            alias :['طقم','تطقيم'],
            category: "search",
            desc: "Sends two couples pics.",
            filename: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `*لـلولـد🚹*` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `*للـبـنـت🚺*` }, { quoted: citel })
        }
    )
    
        //---------------------------------------------------------------------------
cmd({
        pattern: "iswa",
        alias :['تخمين','خمن'],
        category: "search",
        desc: "Searches in given rage about given number.",
        use: '2010989062xx',
        filename: __filename,
    },
    async(Void, citel, text) => {
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply('*֎╎اكـتـب رقـم للـتـخمـيـن مـثـال┇.تخمين 2010989062xx*')
        citel.reply(`*֎╎الـبـحـث عـن حـسـابـات واتـسـاب فـي نـطـاق مـعـيـن...*`)

        function countInstances(string, word) {
            return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text = `*〖 قـائـمـه الارقـام 〗*\n\n`
        var nobio = `\n*֎╎الـبـايـو┇ \nمرحبا انا استخدم واتساب!.\n`
        var nowhatsapp = `\n*֎╎ارقـام لـيـس لـديـهـا واتـسـاب فـي نـطـاق مـعـيـن*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) {
                random = `${status1}`
            } else if (random_length == 2) {
                random = `${status1}${status2}`
            } else if (random_length == 3) {
                random = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Void.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text += `*❄️⃝🧚‍♀️الـرقـم📱┇* wa.me/${anu[0].jid.split("@")[0]}\n *❄️⃝🧚‍♀️الـبـايـو✨┇* ${anu1.status}\n*❄️⃝🧚‍♀️الـتـاريـخ🍁┇* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)
