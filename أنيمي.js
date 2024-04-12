//تم تطوير هذا الملف بواسطه نوفل

const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, cmd, GIFBufferToVideoBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
// let gis = '' // require("g-i-s")
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib/')

//----------------------------------------------------------------------

cmd({
        pattern: "وايفو",
        desc: "To get Waifu Random Pics",
        category: "Anime Pics",
        filename: __filename
    },

  async(Void, citel, text) => {
        
         let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': '*֎╎تـم اخـتـيـار صـوره وايـفـو لـك┇*'
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://api.waifu.pics/nsfw/waifu");    }
        else  { response = await fetch("https://api.waifu.pics/sfw/waifu");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
//-----------------------------------------------------------------------
cmd({
        pattern: "ناروتو",
        desc: "To get Naruto Random Videos",
        category: "Anime Pics",
        filename: __filename
    },
async(Void, citel,text) =>
{
        let res=await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json")
        let url =  res.data.result[Math.floor(Math.random() * res.data.result.length)];
        return await Void.sendMessage(citel.chat,{video :{url : url } , caption: Config.caption }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
    pattern: "نيكو",
    category: "Anime Pics",
    desc: "Sends a Neko Image in chat",
    filename: __filename
},
async(Void, citel, text) => {
        let name1 = text.split("|")[0] || ''
        let name2 = text.split("|")[1] || `1`
        let cap = text.split("|")[1] ? '': "*֎╎تـم اخـتـيـار صـوره لـك┇*"
         
for (let i = 0; i < name2; i++)
{
        let response;
        if(name1 == 'nsfw'){ response = await fetch("https://waifu.pics/api/nsfw/neko");    }
        else  { response = await fetch("https://waifu.pics/api/sfw/neko");  }
    
    const nekodds = await response.json();
    let buttonMessages = {
        image: { url: nekodds.url, },
        caption: cap,
        headerType: 1,
    };
     await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}
        
})
//-----------------------------------------------------------------------
cmd({
    pattern: "foxgirl",
    category: "Anime Pics",
    desc: "Sends image of Fox Girl in current chat.",
    filename: __filename
},
async(Void, citel, text) => 
{
    let  waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
    await Void.sendMessage(citel.chat, {image: { url: waifuddfg.data.url } }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
        pattern: "animenews",
       category: "Anime Pics" ,
        desc: "Sends Anime News in chat",
        filename: __filename
    },
    async(Void, citel, text) => {
        let qq = [
            "Anime News Today",
            "New Anime",
            "Uocoming Anime News",
            "New Anime Info",
            "Whats news in Anime",
            "Anime Series",
            "Manga News today",
            "Anime New News",
            "Anime News today",
        ];
        let q1 = qq[Math.floor(Math.random() * qq.length)];
        //&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
        let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
        const response = await axios.get(URL1);
        let result = await response;
        result = result.data.articles;
        result.map(async(r, idx) => {
            Void.sendMessage(
                citel.chat, {
                    image: { url: r.urlToImage },
                    caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
                }, {
                    quoted: citel,
                }

            );
        });


    }
)
//-----------------------------------------------------------------------
cmd({
    pattern: "لولي",
    category: "Anime Pics",
        filename: __filename,
    desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
    waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
    var wbutss = [{
        buttonId: `${prefix}loli`,
        buttonText: { displayText: `Next Loli✨` },
        type: 1,
    }, ];

    await Void.sendMessage(citel.chat, {image: { url: waifud.data.url }}, {quoted: citel})
}
)

//-----------------------------------------------------------------------
cmd({
    pattern: "مانجا",
     category: "Anime Pics",
        filename: __filename,
    desc: "Sends info about asked manga."
},
async(Void, citel, text) => {
    const { Manga } = require("@shineiichijo/marika");
    const manga = new Manga();
    if (!text) return citel.reply(`Which Manga do you want to Search? \n _Please give me a name._`);
    let srh = await manga.searchManga(text);
    let mang = `*🎀Title: ${srh.data[0].title}*\n`;
    mang += `*📈Status: ${srh.data[0].status}*\n`;
    mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `*🧧Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
        mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
    mang += `*🌟Score: ${srh.data[0].scored}*\n`;
    mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
    mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
    mang += `*✍Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
        mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null) mang += `*🎆Background:* ${srh.data[0].background}`;
    mang += `*❄️Description:* ${srh.data[0].synopsis}`;
    Void.sendMessage(citel.chat, {  image: {  url: srh.data[0].images.jpg.large_image_url,  }, caption: mang, }, {  quoted: citel,  });

}
)
//----------------------------------------------------------------------------
cmd({
    pattern: "انمي",
    category: "Anime Pics",
    desc: "Searches Info about Anime and Provides result."
},
async(Void, citel, text) => {
    const client = new Anime();
    if (!text) return citel.reply(`Which Anime do you want to search?\n _Please give me a name._`);
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    //console.log(result);
    let details = `🎀Title: ${result.title}\n`;
    details += `🎋Format: ${result.type}\n`;
    details += `*📈Status: ${result.status
    .toUpperCase()
    .replace(/\_/g, " ")}*\n`;
    details += `🍥Total episodes: ${result.episodes}\n`;
    details += `🎈Duration: ${result.duration}\n`;
    details += `🧧Genres:\n`;
    for (let i = 0; i < result.genres.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨Based on: ${result.source.toUpperCase()}\n`;
    details += `📍Studio:\n`;
    for (let i = 0; i < result.studios.length; i++) {
        details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴Producers:\n`;
    for (let i = 0; i < result.producers.length; i++) {
        details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫Premiered on: ${result.aired.from}\n`;
    details += `🎗Ended on: ${result.aired.to}\n`;
    details += `🎐Popularity: ${result.popularity}\n`;
    details += `🎏Favorites: ${result.favorites}\n`;
    details += `🎇Rating: ${result.rating}\n`;
    details += `🏅Rank: ${result.rank}\n\n`;
    if (result.trailer.url !== null)
        details += `♦Trailer: ${result.trailer.url}\n\n`;
    details += `🌐URL: ${result.url}\n\n`;
    if (result.background !== null)
        details += `🎆Background: ${result.background}*\n\n`;
    details += `❄Description: ${result.synopsis}`;

 Void.sendMessage( citel.chat, { image: {  url: result.images.jpg.large_image_url, }, caption: details, }, { quoted: citel,});
}
   )
//---------------------------------------------------------------------------

cmd({
        pattern: "ويلبر",
        desc: "To get Random Pics",
       category: "Anime Pics",
        filename: __filename
    },

    async(Void, citel, text) => {


const response = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
const data = await response.json();
  const url =data.urls.regular
  //citel.reply ('url here :'+url);

                let buttonMessaged = {
                    image: { url: url },
                    caption: '*֎╎تـم اخـتـيـار ويلبر لـك┇*',
                    footer: tlang().footer,
                    headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged , {quoted : citel});


}
   )
