//تم تطوير هذا الملف بواسطه نوفل

const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb

    //---------------------------------------------------------------------------

cmd({

            pattern: "1.1",           
            alias :['اوامرالاعضاء'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "1️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ايدي*
*❄️⃝🧚‍♀️⤺┇.رانك*
*❄️⃝🧚‍♀️⤺┇.المتصدرين*
*❄️⃝🧚‍♀️⤺┇.كشف*
*❄️⃝🧚‍♀️⤺┇.صورته*
*❄️⃝🧚‍♀️⤺┇.كونكت*
*❄️⃝🧚‍♀️⤺┇.طلب*
*❄️⃝🧚‍♀️⤺┇.مساعده*
*❄️⃝🧚‍♀️⤺┇.السورس*
*❄️⃝🧚‍♀️⤺┇.تشفير*
*❄️⃝🧚‍♀️⤺┇.حل*
*❄️⃝🧚‍♀️⤺┇.ترجم*
*❄️⃝🧚‍♀️⤺┇.اكشف*
*❄️⃝🧚‍♀️⤺┇.تخمين*
*❄️⃝🧚‍♀️⤺┇.زخرفه*
*❄️⃝🧚‍♀️⤺┇.اختصار*
*❄️⃝🧚‍♀️⤺┇.السا*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

    //---------------------------------------------------------------------------

cmd({

            pattern: "2.1",           
            alias :['اوامرالمطور'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "2️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.انضم*
*❄️⃝🧚‍♀️⤺┇.بان*
*❄️⃝🧚‍♀️⤺┇.اذاعه*
*❄️⃝🧚‍♀️⤺┇.البوت*
*❄️⃝🧚‍♀️⤺┇.المده*
*❄️⃝🧚‍♀️⤺┇.بينج*
*❄️⃝🧚‍♀️⤺┇.فيروس*
*❄️⃝🧚‍♀️⤺┇.اخرج*
*❄️⃝🧚‍♀️⤺┇.فك-البان*
*❄️⃝🧚‍♀️⤺┇.الجروبات*
*❄️⃝🧚‍♀️⤺┇.البوت فتح*
*❄️⃝🧚‍♀️⤺┇.البوت قفل*
*❄️⃝🧚‍♀️⤺┇.المحظورين*
*❄️⃝🧚‍♀️⤺┇.ملاحظاتي*
*❄️⃝🧚‍♀️⤺┇.ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظاتي*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "3.1",           
            alias :['اوامرالجروب'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "3️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.منشن*
*❄️⃝🧚‍♀️⤺┇.مخفي*
*❄️⃝🧚‍♀️⤺┇.الرابط*
*❄️⃝🧚‍♀️⤺┇.اعاده*
*❄️⃝🧚‍♀️⤺┇.ترقيه*
*❄️⃝🧚‍♀️⤺┇.تخفيض*
*❄️⃝🧚‍♀️⤺┇.اضافه*
*❄️⃝🧚‍♀️⤺┇.طرد*
*❄️⃝🧚‍♀️⤺┇.غادر*
*❄️⃝🧚‍♀️⤺┇.حذف*
*❄️⃝🧚‍♀️⤺┇.تدمير*
*❄️⃝🧚‍♀️⤺┇.ارقام*
*❄️⃝🧚‍♀️⤺┇.الترحيب*
*❄️⃝🧚‍♀️⤺┇.المغادره*
*❄️⃝🧚‍♀️⤺┇.جروب*
*❄️⃝🧚‍♀️⤺┇.استطلاع*
*❄️⃝🧚‍♀️⤺┇.تفعيل*
*❄️⃝🧚‍♀️⤺┇.تعطيل*
*❄️⃝🧚‍♀️⤺┇.تغيرالاسم*
*❄️⃝🧚‍♀️⤺┇.تغيرالوصف*
*❄️⃝🧚‍♀️⤺┇.تغيرالصوره*
*❄️⃝🧚‍♀️⤺┇.انذار*
*❄️⃝🧚‍♀️⤺┇.حذف-انذار*
*❄️⃝🧚‍♀️⤺┇.الانذارات*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    ) 



    //---------------------------------------------------------------------------

cmd({

            pattern: "4.1",           
            alias :['اوامرالتحميل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "4️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.شغل*
*❄️⃝🧚‍♀️⤺┇.فيديو*
*❄️⃝🧚‍♀️⤺┇.صوتي*
*❄️⃝🧚‍♀️⤺┇.فيد*
*❄️⃝🧚‍♀️⤺┇.تطبيق*
*❄️⃝🧚‍♀️⤺┇.مود*
*❄️⃝🧚‍♀️⤺┇.ملف*
*❄️⃝🧚‍♀️⤺┇.بينت*
*❄️⃝🧚‍♀️⤺┇.جوجل*
*❄️⃝🧚‍♀️⤺┇.بحث*
*❄️⃝🧚‍♀️⤺┇.مود*
*❄️⃝🧚‍♀️⤺┇.صوره*
*❄️⃝🧚‍♀️⤺┇.ويلبر*
*❄️⃝🧚‍♀️⤺┇.تليجرام*
*❄️⃝🧚‍♀️⤺┇.ميديافاير*
*❄️⃝🧚‍♀️⤺┇.طقم*
*❄️⃝🧚‍♀️⤺┇.اولاد*
*❄️⃝🧚‍♀️⤺┇.خلفيه*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    


    //---------------------------------------------------------------------------

cmd({

            pattern: "5.1",           
            alias :['اوامرالالعاب'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "5️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.اكس*
*❄️⃝🧚‍♀️⤺┇.شخص*
*❄️⃝🧚‍♀️⤺┇.شبيهي*
*❄️⃝🧚‍♀️⤺┇.نرد*
*❄️⃝🧚‍♀️⤺┇.هل*
*❄️⃝🧚‍♀️⤺┇.سؤال*
*❄️⃝🧚‍♀️⤺┇.ه*
*❄️⃝🧚‍♀️⤺┇.كت*
*❄️⃝🧚‍♀️⤺┇.احزر*
*❄️⃝🧚‍♀️⤺┇.عكس*
*❄️⃝🧚‍♀️⤺┇.رابطي*
*❄️⃝🧚‍♀️⤺┇.رابطه*
*❄️⃝🧚‍♀️⤺┇.علم*
*❄️⃝🧚‍♀️⤺┇.تهكير*
*❄️⃝🧚‍♀️⤺┇.عض*
*❄️⃝🧚‍♀️⤺┇.اضرب*
*❄️⃝🧚‍♀️⤺┇.قبل*
*❄️⃝🧚‍♀️⤺┇.اقتل*
*❄️⃝🧚‍♀️⤺┇.ارقص*
*❄️⃝🧚‍♀️⤺┇.حب*
*❄️⃝🧚‍♀️⤺┇.كف*
*❄️⃝🧚‍♀️⤺┇.كسر*
*❄️⃝🧚‍♀️⤺┇.تنمر*
*❄️⃝🧚‍♀️⤺┇.ضم*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "6.1",           
            alias :['اوامرالتحويل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "6️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ملصق*
*❄️⃝🧚‍♀️⤺┇.سرقه*
*❄️⃝🧚‍♀️⤺┇.دمج*
*❄️⃝🧚‍♀️⤺┇.لصوت*
*❄️⃝🧚‍♀️⤺┇.لصوره*
*❄️⃝🧚‍♀️⤺┇.اكتب*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )        


    //---------------------------------------------------------------------------

cmd({

            pattern: "7.1",           
            alias :['اوامرالانمي'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "7️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧚‍♂️˹ قـسـم الانـمـي┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.وايفو*
*❄️⃝🧚‍♀️⤺┇.نيكو*
*❄️⃝🧚‍♀️⤺┇.لولي*
*❄️⃝🧚‍♀️⤺┇.ناروتو*
*❄️⃝🧚‍♀️⤺┇.انمي*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )  
                                           
                                           
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "8.1",           
            alias :['اوامرالبنك'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "8️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.البنك*
*❄️⃝🧚‍♀️⤺┇.محفظتي*
*❄️⃝🧚‍♀️⤺┇.اموالي*
*❄️⃝🧚‍♀️⤺┇.سحب*
*❄️⃝🧚‍♀️⤺┇.ايداع*
*❄️⃝🧚‍♀️⤺┇.تحويل*
*❄️⃝🧚‍♀️⤺┇.اعطي*
*❄️⃝🧚‍♀️⤺┇.تصفير*
*❄️⃝🧚‍♀️⤺┇.راتبي*
*❄️⃝🧚‍♀️⤺┇.التوب*
*❄️⃝🧚‍♀️⤺┇.هجوم*
*❄️⃝🧚‍♀️⤺┇.رهان*
*❄️⃝🧚‍♀️⤺┇.حظ*
*❄️⃝🧚‍♀️⤺┇.ألتوب*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "9.1",           
            alias :['كل-الاوامر'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "9️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*❄️⃝🧚‍♀️━━ •┇✦كـل الاوامـر✦┇• ━━❄️⃝🧚‍♀️*

*❁ اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ ❁*

*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏👥˹ قـسـم الاعـضـاء┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ايدي*
*❄️⃝🧚‍♀️⤺┇.رانك*
*❄️⃝🧚‍♀️⤺┇.المتصدرين*
*❄️⃝🧚‍♀️⤺┇.كشف*
*❄️⃝🧚‍♀️⤺┇.صورته*
*❄️⃝🧚‍♀️⤺┇.كونكت*
*❄️⃝🧚‍♀️⤺┇.طلب*
*❄️⃝🧚‍♀️⤺┇.مساعده*
*❄️⃝🧚‍♀️⤺┇.السورس*
*❄️⃝🧚‍♀️⤺┇.تشفير*
*❄️⃝🧚‍♀️⤺┇.حل*
*❄️⃝🧚‍♀️⤺┇.ترجم*
*❄️⃝🧚‍♀️⤺┇.اكشف*
*❄️⃝🧚‍♀️⤺┇.تخمين*
*❄️⃝🧚‍♀️⤺┇.زخرفه*
*❄️⃝🧚‍♀️⤺┇.اختصار*
*❄️⃝🧚‍♀️⤺┇.السا*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧑🏻‍💻˹ قـسـم الـمـطـور┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.انضم*
*❄️⃝🧚‍♀️⤺┇.بان*
*❄️⃝🧚‍♀️⤺┇.اذاعه*
*❄️⃝🧚‍♀️⤺┇.البوت*
*❄️⃝🧚‍♀️⤺┇.المده*
*❄️⃝🧚‍♀️⤺┇.بينج*
*❄️⃝🧚‍♀️⤺┇.فيروس*
*❄️⃝🧚‍♀️⤺┇.اخرج*
*❄️⃝🧚‍♀️⤺┇.فك-البان*
*❄️⃝🧚‍♀️⤺┇.الجروبات*
*❄️⃝🧚‍♀️⤺┇.البوت فتح*
*❄️⃝🧚‍♀️⤺┇.البوت قفل*
*❄️⃝🧚‍♀️⤺┇.المحظورين*
*❄️⃝🧚‍♀️⤺┇.ملاحظاتي*
*❄️⃝🧚‍♀️⤺┇.ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظه*
*❄️⃝🧚‍♀️⤺┇.حذف-ملاحظاتي*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏰˹ قـسم الـجـروب┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.منشن*
*❄️⃝🧚‍♀️⤺┇.مخفي*
*❄️⃝🧚‍♀️⤺┇.الرابط*
*❄️⃝🧚‍♀️⤺┇.اعاده*
*❄️⃝🧚‍♀️⤺┇.ترقيه*
*❄️⃝🧚‍♀️⤺┇.تخفيض*
*❄️⃝🧚‍♀️⤺┇.اضافه*
*❄️⃝🧚‍♀️⤺┇.طرد*
*❄️⃝🧚‍♀️⤺┇.غادر*
*❄️⃝🧚‍♀️⤺┇.حذف*
*❄️⃝🧚‍♀️⤺┇.تدمير*
*❄️⃝🧚‍♀️⤺┇.ارقام*
*❄️⃝🧚‍♀️⤺┇.الترحيب*
*❄️⃝🧚‍♀️⤺┇.المغادره*
*❄️⃝🧚‍♀️⤺┇.جروب*
*❄️⃝🧚‍♀️⤺┇.استطلاع*
*❄️⃝🧚‍♀️⤺┇.تفعيل*
*❄️⃝🧚‍♀️⤺┇.تعطيل*
*❄️⃝🧚‍♀️⤺┇.تغيرالاسم*
*❄️⃝🧚‍♀️⤺┇.تغيرالوصف*
*❄️⃝🧚‍♀️⤺┇.تغيرالصوره*
*❄️⃝🧚‍♀️⤺┇.انذار*
*❄️⃝🧚‍♀️⤺┇.حذف-انذار*
*❄️⃝🧚‍♀️⤺┇.الانذارات*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏📥˹قـسم التـحمـيل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.شغل*
*❄️⃝🧚‍♀️⤺┇.فيديو*
*❄️⃝🧚‍♀️⤺┇.صوتي*
*❄️⃝🧚‍♀️⤺┇.فيد*
*❄️⃝🧚‍♀️⤺┇.تطبيق*
*❄️⃝🧚‍♀️⤺┇.مود*
*❄️⃝🧚‍♀️⤺┇.ملف*
*❄️⃝🧚‍♀️⤺┇.بينت*
*❄️⃝🧚‍♀️⤺┇.جوجل*
*❄️⃝🧚‍♀️⤺┇.بحث*
*❄️⃝🧚‍♀️⤺┇.صوره*
*❄️⃝🧚‍♀️⤺┇.ويلبر*
*❄️⃝🧚‍♀️⤺┇.تليجرام*
*❄️⃝🧚‍♀️⤺┇.ميديافاير*
*❄️⃝🧚‍♀️⤺┇.طقم*
*❄️⃝🧚‍♀️⤺┇.اولاد*
*❄️⃝🧚‍♀️⤺┇.خلفيه*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🎮˹ قـسم الألـعـاب و الترفيه┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.اكس*
*❄️⃝🧚‍♀️⤺┇.شخص*
*❄️⃝🧚‍♀️⤺┇.شبيهي*
*❄️⃝🧚‍♀️⤺┇.نرد*
*❄️⃝🧚‍♀️⤺┇.هل*
*❄️⃝🧚‍♀️⤺┇.سؤال*
*❄️⃝🧚‍♀️⤺┇.ه*
*❄️⃝🧚‍♀️⤺┇.كت*
*❄️⃝🧚‍♀️⤺┇.احزر*
*❄️⃝🧚‍♀️⤺┇.عكس*
*❄️⃝🧚‍♀️⤺┇.رابطي*
*❄️⃝🧚‍♀️⤺┇.رابطه*
*❄️⃝🧚‍♀️⤺┇.علم*
*❄️⃝🧚‍♀️⤺┇.تهكير*
*❄️⃝🧚‍♀️⤺┇.عض*
*❄️⃝🧚‍♀️⤺┇.اضرب*
*❄️⃝🧚‍♀️⤺┇.قبل*
*❄️⃝🧚‍♀️⤺┇.اقتل*
*❄️⃝🧚‍♀️⤺┇.ارقص*
*❄️⃝🧚‍♀️⤺┇.حب*
*❄️⃝🧚‍♀️⤺┇.كف*
*❄️⃝🧚‍♀️⤺┇.كسر*
*❄️⃝🧚‍♀️⤺┇.تنمر*
*❄️⃝🧚‍♀️⤺┇.ضم*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏♻️˹ قـسم الـتـحـويـل┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.ملصق*
*❄️⃝🧚‍♀️⤺┇.سرقه*
*❄️⃝🧚‍♀️⤺┇.دمج*
*❄️⃝🧚‍♀️⤺┇.لصوت*
*❄️⃝🧚‍♀️⤺┇.لصوره*
*❄️⃝🧚‍♀️⤺┇.اكتب*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🧚‍♂️˹ قـسـم الانـمـي┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.وايفو*
*❄️⃝🧚‍♀️⤺┇.نيكو*
*❄️⃝🧚‍♀️⤺┇.لولي*
*❄️⃝🧚‍♀️⤺┇.ناروتو*
*❄️⃝🧚‍♀️⤺┇.انمي*
*❆│· • • ━ ⊰❄️⊱ ━ • • ·│❆*
*˼‏🏛️˹ قـسـم البنـك┇↶*
*⋄━⋄─⋄═⊰❄️⊱═⋄─⋄━⋄*
*❄️⃝🧚‍♀️⤺┇.البنك*
*❄️⃝🧚‍♀️⤺┇.محفظتي*
*❄️⃝🧚‍♀️⤺┇.اموالي*
*❄️⃝🧚‍♀️⤺┇.سحب*
*❄️⃝🧚‍♀️⤺┇.ايداع*
*❄️⃝🧚‍♀️⤺┇.تحويل*
*❄️⃝🧚‍♀️⤺┇.اعطي*
*❄️⃝🧚‍♀️⤺┇.تصفير*
*❄️⃝🧚‍♀️⤺┇.راتبي*
*❄️⃝🧚‍♀️⤺┇.التوب*
*❄️⃝🧚‍♀️⤺┇.هجوم*
*❄️⃝🧚‍♀️⤺┇.رهان*
*❄️⃝🧚‍♀️⤺┇.حظ*
*❄️⃝🧚‍♀️⤺┇.ألتوب*
┛─━═║✠║◦¦❄️¦◦║✠║═━─┗



*~.¸¸ ❝ 𝐸𝐿𝑆𝐴 𝐵𝑂𝑇 ❝ ¸¸.~*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )                                                    
