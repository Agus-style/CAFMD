/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
   * Recode By CF.
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const fetch = require('node-fetch') 
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { igDownloader } = require('./lib/igdown')
const {TiktokDownloader} = require('./lib/tiktokdl')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { uploadimg, upload } = require('./lib/uploadimg')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { simih } = require('./lib/functions')
botname = setting.namabot
const fake = 'AGUS STYLE - Bot MD'
ownerNumber = ["6282268562601@s.whatsapp.net"]
modelmenu = 'gif'
apikeyy = 'sQMpXbHimbTkxGC'
angka = ['1','2','3','4','5','6','7','8','9']
randomcek1 = angka[Math.floor(Math.random() * (angka.length))]
randomcek2 = angka[Math.floor(Math.random() * (angka.length))]
//UH
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))

module.exports = cafnay = async (cafnay, m, chatUpdate) => {
    try {
        //var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        //Body lu ada yg kurang gw tambahin
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const kuntul = cafnay.user.id
        const ngen_uh = m.chat
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
		const type = Object.keys(m.message)[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCreator = [cafnay.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isBanned = ban.includes(m.sender)
        const itsMe = m.sender == cafnay.user.id ? true : false
        const text = args.join(" ")
        const q = args.join(" ")
        const aq = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)	    	            
	               
	    // Group
        const groupMetadata = m.isGroup ? await cafnay.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const groupMembers = m.isGroup ? groupMetadata.participants : ''
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       cafnay.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: cafnay.authState.creds.me.id,upload: cafnay.waUploadToServer})
            }
			
//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
cafnay.sendMessage(hehe, ano, sticker, { quoted: m})
}

//=================( BATASNYA )=========
			            
        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return cafnay.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return cafnay.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return cafnay.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return cafnay.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return cafnay.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        const reply = (teks) => {
            cafnay.sendMessage(from, teks, text, {quoted:m})
        }
        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
if (type == 'image') {
cafnay.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(thumbnail), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
} else if (type == 'video') {
if (options === undefined || options === null) return reply('illegal method, chat owner bot')
cafnay.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
} else if (type == 'location') {
cafnay.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(thumbnail) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
} else if (type == 'text') {
cafnay.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
} else {
m.reply('invalid type, please contact the owner bot')
}
}


const time2 = moment().tz("Asia/Makassar").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "GoodNight🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "GoodEvening🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "GoodEvening🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "GoodAfternoon☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "GoodMoorning🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "GoodNight🌃";
    }

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;   	        

		const troli = {
                         "key": {
                         "remoteJid": "status@broadcast", 
                         "participant": '0@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 99999, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `AS•STYLE - MD`, 
                         "orderTitle": 'AS', 
                         "sellerJid": '0@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
							  
							  const peksaya = {
                         "key": {
                         "remoteJid": "6288222079999-1633244783@g.us", 
                         "participant": '6285793887010@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 2021, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `Halo ${pushname}! dapet salam dari owner.`, 
                         "orderTitle": 'dapet salam dari owner CAF!', 
                         "sellerJid": '6285793887010@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
		    cafnay.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
            let messageType = mime.split('/')[0]
            let extension = mime.split('/')[1]
            trueFileName = attachExtension ? (filename + '.' + extension) : filename
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }
//////////BUTTON BUATAN CAF/////////////
 const sendButtonImg = async (id, text1, desc1, caf) => {
 //SendButtonImage
 var tes = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...caf.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "quickReplyButton": {
              "displayText": "AUDIO",
              "id": `${prefix}reply1 `,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "VIDEO",
              "id": `${prefix}reply2 `
            }
          }
        ]
      }
    }
  }, {})
cafnay.relayMessage(id, tes.message, { messageId: tes.key.id })
}
///////////////////////BATAS SUCI////////////////////

 //SendButton5
        const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "My GITHUB",
              "url": "https://github.com/KepoLuh"
            }
          },
          {
            "callButton": {
              "displayText": "Call Me",
              "phoneNumber": "6283167714830"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "PING!",
              "id": `${prefix}ping`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script Bot",
              "id": `${prefix}sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
cafnay.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

anuy = ` ${ucapanWaktu} ${pushname}, Saya ${botname} !

*INFO WAKTU*
DATE : *_${Tanggal}_*
WIB : *_${wib}_*
WIT : *_${wit}_*
WITA : *_${wita}_*

*USER INFO*
Nama : ${pushname}
Nomor : ${m.sender}

*CHAT INFO*
Ini Grup : ${isGroup}
Ini Owner Bot : ${isCreator}
Ini MySelf : ${itsMe}
Admin Gc : ${isGroupAdmins}
Bot Admin : ${isBotAdmins}

///prefix
┌──●⭓ *Search Menu*
│
│⭔ ${prefix}pinterest
│⭔ ${prefix}wallpaper
│⭔ ${prefix}wikimedia
│⭔ ${prefix}lirik (query)
│⭔ ${prefix}tr (query)
│⭔ ${prefix}gimg (query)
│⭔ ${prefix}kbbi (query)
│
└───────●⭓

┌──●⭓ *Downloader Menu*
│
│⭔ ${prefix}ytmp3 (linkyt)
│⭔ ${prefix}ytmp4 (linkyt)
│⭔ ${prefix}play (nama lagu)
│⭔ ${prefix}ttmp3 (link tt)
│⭔ ${prefix}igdl (link ig)
│⭔ ${prefix}ttwm (link tt)
│⭔ ${prefix}ttnowm (link ig)
│⭔ ${prefix}mediafire(link)
│
└───────●⭓

┌──●⭓ *kata kata*
│
│⭔ ${prefix}katailham
│⭔ ${prefix}katakataml
│⭔ ${prefix}katabucin
│⭔ ${prefix}katabijak
│⭔ ${prefix}katabucin2
│⭔ ${prefix}katasindiran
│⭔ ${prefix}quotesanime
│
└───────●⭓

┌──●⭓ *Random Menu*
│
│⭔ ${prefix}porno
│⭔ ${prefix}hentai
│⭔ ${prefix}loli
│⭔ ${prefix}neko
│⭔ ${prefix}waifu
│⭔ ${prefix}shinobu
│⭔ ${prefix}megumin
│⭔ ${prefix}bully
│⭔ ${prefix}cuddle
│⭔ ${prefix}cry
│⭔ ${prefix}hug
│⭔ ${prefix}awoo
│⭔ ${prefix}kiss
│⭔ ${prefix}lick
│⭔ ${prefix}pat
│⭔ ${prefix}bonk
│⭔ ${prefix}smug
│⭔ ${prefix}blush
│⭔ ${prefix}yeet
│⭔ ${prefix}smile
│⭔ ${prefix}wave
│⭔ ${prefix}highfive
│⭔ ${prefix}handhold
│⭔ ${prefix}nom
│⭔ ${prefix}bite
│⭔ ${prefix}glomp
│⭔ ${prefix}slap
│⭔ ${prefix}kill
│⭔ ${prefix}happy
│⭔ ${prefix}wink
│⭔ ${prefix}poke
│⭔ ${prefix}dance
│⭔ ${prefix}cringe
│⭔ ${prefix}hilih
│⭔ ${prefix}simi
│⭔ ${prefix}simih
│
└───────●⭓

┌──●⭓ *gabut Asu*
│
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramalanjodoh
│⭔ ${prefix}ramalanjodohbali
│⭔ ${prefix}nomerhoki
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalancinta
│⭔ ${prefix}kecocokannama
│⭔ ${prefix}kecocokanpasangan
│⭔ ${prefix}jadianpernikahan
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rejeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}ramalannasib
│⭔ ${prefix}artitarot
│⭔ ${prefix}potensipenyakit
│⭔ ${prefix}haribaik
│⭔ ${prefix}fengshui
│⭔ ${prefix}harinaas
│⭔ ${prefix}harisangar
│⭔ ${prefix}arahrejeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}nagahari
│⭔ ${prefix}weton
│⭔ ${prefix}sifat
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}shio
│
└───────●⭓

┌──● TEXT PRO 1
│
│⭔ ${prefix}fiction
│⭔ ${prefix}transformer
│⭔ ${prefix}demon
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dstone
│⭔ ${prefix}neon
│⭔ ${prefix}glitch
│⭔ ${prefix}embossed
│⭔ ${prefix}harry-potter
│⭔ ${prefix}broken
│⭔ ${prefix}papercut
│⭔ ${prefix}gradient
│⭔ ${prefix}glossy
│⭔ ${prefix}watercolor
│⭔ ${prefix}multicolor
│⭔ ${prefix}underwater
│⭔ ${prefix}neon-devil
│⭔ ${prefix}bear
│⭔ ${prefix}wonderfulg
│⭔ ${prefix}sparkling6
│⭔ ${prefix}sparkling7
│⭔ ${prefix}decorative
│⭔ ${prefix}strawberry
│⭔ ${prefix}chocolate
│⭔ ${prefix}koifish
│⭔ ${prefix}bread
│⭔ ${prefix}matrix
│⭔ ${prefix}blood2
│⭔ ${prefix}neonligth2
│⭔ ${prefix}thunder2
│⭔ ${prefix}neon2
│⭔ ${prefix}3dbox
│⭔ ${prefix}roadw
│⭔ ${prefix}bokeh
│⭔ ${prefix}gneon
│⭔ ${prefix}advanced
│⭔ ${prefix}dropwater
│⭔ ${prefix}wall
│⭔ ${prefix}chrismast
│⭔ ${prefix}honey
│⭔ ${prefix}drug
│⭔ ${prefix}marble
│⭔ ${prefix}marble2
│⭔ ${prefix}ice
│⭔ ${prefix}juice
│⭔ ${prefix}rusty
│⭔ ${prefix}abstra
│⭔ ${prefix}biscuit
│⭔ ${prefix}wood
│⭔ ${prefix}scifi
│⭔ ${prefix}metalr
│⭔ ${prefix}purpleg
│⭔ ${prefix}shiny
│⭔ ${prefix}jewelry
│⭔ ${prefix}jewelry2
│⭔ ${prefix}jewelry3
│⭔ ${prefix}jewelry4
│⭔ ${prefix}jewelry5
│⭔ ${prefix}jewelry6
│⭔ ${prefix}jewelry7
│⭔ ${prefix}jewelry8
│⭔ ${prefix}metalh
│⭔ ${prefix}golden
│⭔ ${prefix}glitter
│⭔ ${prefix}glitter2
│⭔ ${prefix}glitter3
│⭔ ${prefix}glitter4
│⭔ ${prefix}glitter5
│⭔ ${prefix}glitter6
│⭔ ${prefix}glitter7
│⭔ ${prefix}metale
│⭔ ${prefix}carbon
│⭔ ${prefix}candy
│⭔ ${prefix}candy
│⭔ ${prefix}metalb
│⭔ ${prefix}gemb
│⭔ ${prefix}metalb2
│⭔ ${prefix}metalg
│⭔ ${prefix}neon-light 
│⭔ ${prefix}snow 
│⭔ ${prefix}cloudsky 
│⭔ ${prefix}gradient2 
│⭔ ${prefix} luxury2
│⭔ ${prefix}christmas 
│⭔ ${prefix}summer 
│⭔ ${prefix}minion
│⭔ ${prefix}oscar
│⭔ ${prefix}neonlight
│⭔ ${prefix}metaldark
│⭔ ${prefix}3dglue
│⭔ ${prefix}summery
│⭔ ${prefix}engraved
│⭔ ${prefix}writing
│⭔ ${prefix}newyear2
│⭔ ${prefix}newyear
│⭔ ${prefix}neonc
│⭔ ${prefix}fabric
│⭔ ${prefix}glossyc
│⭔ ${prefix}deluxe2
│⭔ ${prefix}glossyb
│⭔ ${prefix}holographic
│⭔ ${prefix}purple
│⭔ ${prefix}skeleton
│⭔ ${prefix}natural
│⭔ ${prefix}firework
│⭔ ${prefix}wicker
│⭔ ${prefix}joker
│⭔ ${prefix}darkg
│⭔ ${prefix}blood
│⭔ ${prefix}xmas
│⭔ ${prefix}metals
│⭔ ${prefix}denim
│⭔ ${prefix}gloss
│⭔ ${prefix}steel
│⭔ ${prefix}balloon7
│⭔ ${prefix}balloon5
│⭔ ${prefix}balloon6
│⭔ ${prefix}balloon4
│⭔ ${prefix}balloon3
│⭔ ${prefix}balloon2
│⭔ ${prefix}balloon
│⭔ ${prefix}glass4
│⭔ ${prefix}glass3
│⭔ ${prefix}glass2
│⭔ ${prefix}glass
│⭔ ${prefix}rock
│⭔ ${prefix}peridot
│⭔ ${prefix}decorate2
│⭔ ${prefix}decorate
│⭔ ${prefix}toxic
│⭔ ${prefix}equalizer
│⭔ ${prefix}captain-as2
│⭔ ${prefix}glass7
│⭔ ${prefix}glass5
│⭔ ${prefix}glass6
│⭔ ${prefix}glass8
│⭔ ${prefix}robot
│⭔ ${prefix}sparkling5
│⭔ ${prefix}sparkling4
│⭔ ${prefix}sparkling3
│⭔ ${prefix}sparkling2
│⭔ ${prefix}sparkling
│⭔ ${prefix}metallic
│⭔ ${prefix}sircuit
│⭔ ${prefix}sketch
│⭔ ${prefix}water-pipe
│⭔ ${prefix}blackpink
│⭔ ${prefix}rainbow
│⭔ ${prefix}halloween
│⭔ ${prefix}discovery
│
└───────●

┌──●⭓ * Riview Cek *
│
│${prefix}gantengcek
│${prefix}cantikcek
│${prefix}jelekcek
│${prefix}goblokcek
│${prefix}begocek
│${prefix}pintarcek
│${prefix}jagocek 
│${prefix}nolepcek
│${prefix}babicek 
│${prefix}bebancek
│${prefix}baikcek
│${prefix}jahatcek 
│${prefix}anjingcek
│${prefix}haramcek
│${prefix}kontolcek 
│${prefix}pakboycek 
│${prefix}pakgirlcek	
│${prefix}sangecek
│${prefix}bapercek
│
└───────●⭓

┌──● *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu
│⭔ ${prefix}delete
│⭔ ${prefix}iklan
│⭔ ${prefix}sticker
│⭔ ${prefix}sgif
│⭔ ${prefix}tomp4
│⭔ ${prefix}tourl
│  ${prefix}tagall (query)
│⭔ ${prefix}toimg (foto) 
│
└───────●⭓

┌──●⭓ *Maker Menu*
│
│⭔ ${prefix}ktpmaker
│
└───────●⭓

┌──●⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}setmenu
│⭔ ${prefix}setpp
│
└───────●⭓

┌──●⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}hidetag (teks)
│⭔ ${prefix}add (tag)
│⭔ ${prefix}kick (tag)
│⭔ ${prefix}promote (tag)
│⭔ ${prefix}demote (tag)
│
└───────●⭓

⬣「 𝙄𝙉𝙁𝙊 𝙇𝘼𝙄𝙉 」⬣
❑ Jika bot tidak merespon, mungkin bot sedang off
❑ bot tidak menyimpan riwayat foto/media
❑ Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
❑ Jika menemukan bug/err silahkan hubungi owner

`

        // Public & Self
        if (!cafnay.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
        console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        cafnay.sendReadReceipt(m.chat, participant, [m.key.id])
        cafnay​.​sendPresenceUpdate​(​'available'​, id)   
        cafnay​.​sendPresenceUpdate​(​'composing'​, id)  
        }
       //WAPresence = 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'//

////menu
       switch(command) {
       case 'menu':
       case 'hlp':

       if (modelmenu == 'gif') {
       await sendButton5(from, anuy, fake, await cafnay.createMessage(from, {video: {url: "./media/cafnay.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "CAF"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton5(from, anuy, fake, await cafnay.createMessage(from, {image: {url: "./media/cafnay.jpg", caption: anuy}}))
       }
       break
       
/////sereach menu
       case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: troli })
            }
            break                                   
       case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
       case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
       case 'lirik':
			 if (!q) return reply('masukan nama lagu!')
			 m.reply('mencari lirik...')
		     var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
             cafnay.sendMessage(from, {text: Lirik.result}, {quoted: m})
            break
       case 'tr': {
		   if (!q) return m.reply('Masukan QUERY!!')
		   Tr = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/translate?kata=${q}&apikey=WanzBotz`)
		   dijasjusin = `TRANSLATE Dari ${Tr.result.from} ke ${Tr.result.to}
		   Hasil : ${Tr.result.text}
		   Typo : ${Tr.result.typo}`		   
		   cafnay.sendMessage(m.chat, {text: dijasjusin}, {quoted: troli})
		  break
	       }
	   case 'gimg':{
			if (!q) return m.reply('masukan query!')
			m.reply(`searching google img for ${q}`)
			G = await fetchJson(`https://api.dapuhy.ga/api/search/googleimage?query=${q}&apikey=${apikeyy}`)
			cafnay.sendMessage(m.chat, { image: { url: G.image }, caption: `Hasil Dari ${q}` }, {quoted: m})
			.catch((err) => {
            for (let x of ownerNumber) {
            reply(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                 }
            m.reply(`Maaf, tidak ada hasil google untuk ${q}`)
			 })
		 break				
			} 
	case 'kbbi':
	      if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	      biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	      cafnay.sendMessage(m.chat, {text: biba}, {quoted: m})
	    break	    
/////donload	  
     case 'play':{
         if (!q) return m.reply('Masukan Judul')
         srch = `${q}`
         var aramas = await yts(srch);
         aramat = aramas.all
         var ytresult = '';
         ytresult += '「 *YOUTUBE SEARCH* 」'
         ytresult += '\n⬣───────────────⬣\n\n'
         ytresult += '❖ Title: ' + aramat[0].title + '\n'
         ytresult += '❖ Durasi: ' + aramat[0].timestamp + '\n'
         ytresult += '❖ Views: ' + aramat[0].views + '\n'
         ytresult += '❖ Upload: ' + aramat[0].ago + '\n'
         ytresult += '❖ Link: ' + aramat[0].url + '\n⬣───────────────⬣'
         url = aramat[0].url
         tes = `https://youtu.be/3N9R_LcbjN0`
         console.log(url)
         var tbuff = await getBuffer(aramat[0].image)
         let button1 = [
                        {buttonId: `${prefix}ytmp3 ${url}`, buttonText: {displayText: '☰ AUDIO'}, type: 1},
                        {buttonId: `${prefix}ytmp4 ${url}`, buttonText: {displayText: '☰ VIDEO'}, type: 1}
                      ]
                    let buttonMessage = {
                    image: tbuff,
                    caption: ytresult,
                    footerText: fake,
                    buttons: button1,
                    headerType: 4
                   }
                   cafnay.sendMessage(from, buttonMessage, { quoted: m })
                   } 
               break
          case 'ytmp3':{
	           if (!q) return m.reply('link nya cok')
		       cafau = await y2mateA(q)
		       title = cafau[0].judul
		       audio = cafau[0].link
		       sendFileFromUrl(from,audio,`Done`,m)
		     break
	               }
	     case 'ytmp4':{
	          if (!q) return m.reply('link nya mana')
	     	  cafau = await y2mateV(q)
		      title = cafau[0].judul
		      video = cafau[0].link
		      sendFileFromUrl(from,video,`Done`,m)
		    break
	           }	   
	    case 'igdl':
               if (!q) return m.reply('Linknya?')
               res = await igDownloader(q)
               link = res.result.link
               desc = res.result.desc
               await sendFileFromUrl(from,link,desc,m)
            break		   		   
       case 'ttnowm':
                m.reply('tunggu anta')
            	kntl = `${q}`
                mmk = await TiktokDownloader(kntl)
              	link_bkp = mmk.result.nowatermark
            	sendFileFromUrl(from,link_bkp,'Done',m)
        	break
       case 'ttwm':
            	m.reply('sabar woi')
	            kntl = `${q}`
	            mmk = await TiktokDownloader(kntl)
	            link_bkp = mmk.result.watermark
	            sendFileFromUrl(from,link_bkp,'Done',m)
        	break
	   case 'ttmp3':
		   m.reply(mess.wait)
		   audio = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${q}`)
		   audio = audio.result.audio_only.original
		   cafnay.sendMessage(m.chat, {document: {url: audio}, mimetype: 'audio/mpeg', fileName: `audio_tiktok.mp3`}, {quoted:m})
		   break	   
	  case 'mediafire':{		 
		   if (!q) return m.reply('masukan link mediafire!')			   
		   dl = await fetchJson(`https://x-restapi.herokuapp.com/api/mediafire-dl?url=${q}&apikey=BETA`)
		   url = dl.urlDown
		   sendFileFromUrl(m.chat, url, m)
		   break
	          }         
////////katakata

////////random menu   
case 'waifu': 
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
              await m.reply('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
              await sendFileFromUrl(from,waifu.url,`Done`,m)
              .catch((err) => {
              for (let x of ownerNumber) {
              sendMess(x, `${prefix+command} Error: \n\n` + err)
                  }
              m.reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		    break
///////gabut asu
         