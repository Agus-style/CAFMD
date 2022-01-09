(/**
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
botname = setting.namabot
const fake = 'AGUS STYLE - Bot MD'
ownerNumber = ["6282268562601@s.whatsapp.net"]
modelmenu = 'gif'
apikeyy = 'sQMpXbHimbTkxGC'


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
              "url": "https://github.com/CAF-ID"
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

┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}hidetag (teks)
│⭔ ${prefix}add (tag)
│⭔ ${prefix}kick (tag)
│⭔ ${prefix}promote (tag)
│⭔ ${prefix}demote (tag)
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}ytmp3 (linkyt)
│⭔ ${prefix}ytmp4 (linkyt)
│⭔ ${prefix}play (nama lagu)
│⭔ ${prefix}ttaudio (link tt)
│⭔ ${prefix}igdl (link ig)
│⭔ ${prefix}ttwm (link tt)
│⭔ ${prefix}ttnowm (link ig)
│⭔ ${prefix}mediafire(link)
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}pinterest
│⭔ ${prefix}wallpaper
│⭔ ${prefix}wikimedia
│⭔ ${prefix}lirik (query)
│⭔ ${prefix}tr (query)
│⭔ ${prefix}gimg (query)
│⭔ ${prefix}kbbi (query)
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}porno
│⭔ ${prefix}hentai
│⭔ ${prefix}quotesanime
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
│⭔ ${prefix}hilih (query)
│
└───────⭓

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

┌──⭓ *Main Menu*
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
└───────⭓

┌──⭓ *Maker Menu*
│
│⭔ ${prefix}ktpmaker
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}setmenu
│⭔ ${prefix}setpp
│
└───────⭓
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
        }

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
	   
	   case 'tr': {
		   if (!q) return m.reply('Masukan QUERY!!')
			   Tr = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/translate?kata=${q}&apikey=WanzBotz`)
		   dijasjusin = `TRANSLATE Dari ${Tr.result.from} ke ${Tr.result.to}
		   Hasil : ${Tr.result.text}
		   Typo : ${Tr.result.typo}`
		   
		   cafnay.sendMessage(m.chat, {text: dijasjusin}, {quoted: troli})
		   break
	   }
	   
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
			   if (!isUrl) return
		   dl = await fetchJson(`https://x-restapi.herokuapp.com/api/mediafire-dl?url=${q}&apikey=BETA`)
		   url = dl.urlDown
		   sendFileFromUrl(m.chat, url, m)
		   break
	   }
	  
	  case 'kbbi':
	  if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  cafnay.sendMessage(m.chat, {text: biba}, {quoted: m})
	  break
	
	case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await cafnay.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave':
				if (!isGroup) return m.reply(mess.only.group)
				if (!isCreator && !mek.key.fromMe) return m.reply(mess.only.owner)				
				cafnay.groupLeave(from)
						break
	  
case 'hidetag':
                if (!isGroup) return m.reply(mess.group)
                cafnay.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
case 'ohidetag':
                m.quoted.copyNForward(from, true)
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!isGroup) return m.reply(mess.group)
                cafnay.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
            
            case 'tagall': case 'infoall':
                if (!isGroup) return m.reply(mess.groupOnly)               
                let teks = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of groupMembers) {
		            teks += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *${botname}* ⋘`
                cafnay.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
            break
            
             case 'setpp': 
                  if (!isCreator) throw mess.owner                  
                  let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                  await cafnay.updateProfilePicture(kuntul, { url: media }).catch((err) => m.reply('Gagal Mengganti Foto Profil'))
                  break
                  
                  case 'setgp':
                  if (isGroup) {
                  let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                  await cafnay.updateProfilePicture(ngen_uh, { url: media }).catch((err) => m.reply('Gagal Mengganti Foto Profil'))
                  }
                  break
                 
                        	   
///////////PLAY FROM YOUTUBE
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
	   case 'cafmp3':{
		  yt = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${q}&apikey=HHIy0nIGja`)
		  audio = yt.result.url
		  console.log(yt.result.url)
		  sendFileFromUrl(from,audio,`Done`,m)
		  break
	   }
	   case 'cafmp4':{
		  yt = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp4?url=${q}&apikey=HHIy0nIGja`)
		  video = yt.result.url
		  console.log(yt.result.url)
		  sendFileFromUrl(from,video,`Done`,m)
		  break
	   }
///////////////BATAS SUCI///////////////

                            case 'setmenu':
                            if (!q) return m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            if (q == "gif") {
                            modelmenu = "gif"
                            m.reply("Done change menu to "+q)
                            } 

                            else if (q == "image") {
                          modelmenu = "image"
                            m.reply("Done change menu to "+q)
                            } 

                            else {
                            m.reply(`Masukan opts :\n⭔gif\n⭔image`)
                            }
                            break
	    case 'sc': {
	    m.reply('Ngapain Bang ?')
                //m.reply('Script : https://github.com/DikaArdnt/cafnay-Morou\n\n Dont Forget Give Star')
            }
            break
                    case 'faq':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1},
  {buttonId: '${prefix}faq22', buttonText: {displayText: 'Apa itu CAF?'}, type: 1},
  {buttonId: '${prefix}faq33', buttonText: {displayText: 'Terinspirasi dsri mana?'}, type: 1}
]

const buttonMessage = {
    text: "no faq available now.",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}
cafnay.sendMessage(from, buttonMessage)
               break			   			   			   
			       
               case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await cafnay.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await cafnay.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                        throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
                        
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await cafnay.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await cafnay.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    anu1 = `${anu.url}`
                    console.log(anu1)
                    m.reply(util.format(anu1))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
			
			case 'latestnews':{
				
					f = await fetchText(`https://wanz-apik.herokuapp.com/api/news/kumparan?type=Berita&apikey=WanzBotz`)
					cafnay.sendMessage(m.chat, {text: f.result}, {quoted: troli})
					m.reply('Saya lagi malas.')
					break
			}
			
            case 'chat': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    cafnay.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    cafnay.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    cafnay.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    cafnay.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    cafnay.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    cafnay.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    cafnay.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await cafnay.groupInviteCode(m.chat)
                cafnay.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                cafnay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			case 'hilih': {
				if (!q) return reply ('masukan query')
					dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
				cafnay.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
				break
			}
			
			
				   
			 
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    cafnay.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
			
			
			
			
			
			
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
			case 'iklan': 
var templatetun = proto.Message.fromObject({
                       templateMessage: proto.TemplateMessage.fromObject({
                               hydratedTemplate: {
                                 hydratedContentText: `Pasang Iklan Hubungi wa.me/6285793887010`,

                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: 'Github Owner',
                                            url: 'https://github.com/CAF-ID'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: 'Call Owner',
                                            phoneNumber: '6283167714830s.whatsapp.net'
                                        }
                                    }, {
									"quickReplyButton": {
										"displayText": 'Chat Owner',
										"id": "#owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "#tos"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "NAN"
									}
                     }]
                                }
                            })
                        })
var p = generateWAMessageFromContent(from, templatetun, {})
                        await cafnay.relayMessage(from, p.message, { messageId: p.key.id });
break
			 case 'lirik':
				   if (!q) return reply('masukan nama lagu!')
					   m.reply('mencari lirik...')
				   var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
cafnay.sendMessage(from, {text: Lirik.result}, {quoted: m})
break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
 m.reply('Bokeppp tross')
			}
            break
            case 'hentai': {
                m.reply('Bokeppp tross')
				/*
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: troli })
          */
		  }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                cafnay.sendMessage(m.chat, { text: `~_${result.quotes}\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}` })
            }
            break
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                cafnay.public = true
                m.reply('*_Succes Change To Public - Mode_*')
            }
            break
            case 'self': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                cafnay.public = false
                m.reply('*_Succes Change To Self - Mode_*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;CAF;;;'
                    + 'FN:CAF•NAY\n' // full name
                    + 'ORG:Owner - CAF;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282268562601:+62 857-6217-9624\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                cafnay.sendMessage(m.chat, { contacts: { displayName: 'Owner - CAF', contacts: [{ vcard }] } }, { quoted: troli })
            }
            break
			case 'kick': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'remove')
				m.reply(`Sukses kick ${users}`)
				}
				break
			case 'add': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'add')
				m.reply(`sukses add ${users}`)
				
				}
				break
			case 'promote': {
				  if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'promote')
				m.reply('sukses promote!')
				}
				break
			case 'demote': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'demote')
				m.reply('sukses demote!')
				}
				break
				
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
			case 'malingpp': {
         if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
        anu = await cafnay.profilePictureUrl(m.quoted.sender, 'image')
        cafnay.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
       }
break
			
           case 'loli': 
           case 'neko': 
              await m.reply(('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
		//////YTS (yt-search)
		case 'yts': case 'ytsearch':
if (args.length < 1) return m.reply(`Kirim perintah ${prefix + command} *query*`)
srch = `${q}`
var aramas = await yts(srch);
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n⬣───────────────⬣\n\n'
aramas.videos.map((video) => {
ytresult += '❖ Title: ' + video.title + '\n'
ytresult += '❖ Link: ' + video.url + '\n'
ytresult += '❖ Durasi: ' + video.timestamp + '\n'
ytresult += '❖ Views: ' + video.views + '\n'
ytresult += '❖ Upload: ' + video.ago + '\n⬣───────────────⬣\n\n'
});
ytresult += `*${botname}*`
cafnay.sendMessage(m.chat, { image: tbuff, caption: ytresult }, { quoted: m } )
break
//////////////GITHUB DOWNLOADER/////////////
case 'ghdl':
if (args.length == 0) return m.reply(`Usage: ${prefix + command} USER|REPO`)
get_args = args.join(" ").split("|")
user = get_args[0]
repo = get_args[1]
caf = (`https://github.com/${user}/${repo}/archive/refs/heads/master.zip`)
sendFileFromUrl(from,caf,`Done`,m)
break
///////////////////BATAS SUCI///////////////////////
case 'get':
        if (!q) return reply("linknya?")
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu)
          })
        break
////GET RESULT
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
		//////////////////MAKER MENU//////////////////
   case 'ktp': {
                 if (!quoted) throw `Balas Image`
 if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|Gol Darah\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|O`)
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    berlaku = get_args[14]
                    gdarah = get_args[15]
                    anu1 = `${anu.url}`
                    let ktpnya = await getBuffer(`https://fdz-app.herokuapp.com/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=${gdarah}&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${berlaku}&prov=${prov}&kab=${kabu}&picurl=${anu1}`)
                    ktp = `https://fdz-app.herokuapp.com/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=${gdarah}&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${berlaku}&prov=${prov}&kab=${kabu}&picurl=${anu1}`
                    console.log(ktp)
                    console.log(anu1)
                    caf = `Nihh KTP Lu Bang :v \n\n`
                    caf += `❖ Url : ${ktp}`
                    cafnay.sendMessage(m.chat, {image: ktpnya, caption: caf}, {quoted:m})
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            
////////////////////////WELCOME/////////////////////

////////////////////////PHOTOOXY/////////////////////
 case '3d-summer': case 'wooden-boards': case 'flower-heart': case 'wood-heart': case 'coffe-cup': case 'undergrass': case 'naruto-banner':
 case 'burn-paper': case 'romantic': case 'shadow': case 'cup': case 'smoke': case 'funny-cup': case 'love-text': case 'double-romantic':
 case 'lol-rankboder': case 'lol-pentakill': case 'party': case 'silk': case 'smoke': case 'cemetery': case 'coffe-cup-2': case 'harrypotter':
 case 'butterfly': case 'glow-metallic': case 'crisp-chrome': case 'fur': case 'glow-rainbow': case 'graffiti-cover': case 'glowing-neon': case 'underwater':
 case '3d-nature': case 'golden-roses': case 'rainbow-shine': case 'rainbow-shine': case 'gradient': case 'night-sky': case 'flaming': case 'write-birthday':
 case 'waterlemon': case '3d-wooden': case 'neon-light': case 'luxury': case 'woodblock': case 'sweetcandy': case 'between': case 'dark-metal':
 case 'lol-coverglowing':
if (!q) return m.reply(`Masukan query!`)
command_r = command.replace("-", "_")
try {
photoxy = `https://kuontol-api.herokuapp.com/api/photooxy/${command_r}?text=${q}&apikey=kuontol`
console.log(photoxy)
potoxy = await getBuffer(photoxy)
cafnay.sendMessage(m.chat, { image: potoxy , caption: `Ni ${pushname} *${command}* nya` }, {quoted: m})
} catch (e) {
m.reply(`Apikey *${command}* Undefined`)
}
break
///////////////////////WELCOME///////////////////
///////////////////////TEXT PRO///////////////////

case 'blackpink': case 'rainbow': case 'water_pipe': case 'halloween': case 'sketch': case 'discovery': case 'sircuit': case 'metallic': case 'fiction': 
case 'transformer': case 'demon': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neon': case 'glitch': case 'glitch': case 'embossed': 
case 'harry_potter': case 'broken': case 'papercut': case 'gradient': case 'glossy': case 'watercolor': case 'multicolor': case 'underwater': case 'neon_devil': case 'bear': case 'wonderfulg': 
case 'sparkling6': case 'sparkling7': case 'decorative': case 'strawberry': case 'chocolate': case 'koifish': case 'bread': case 'matrix': case 'blood2': case 'neonligth2': case 'thunder2': case 'neon2': 
case '3dbox': case 'roadw': case 'bokeh': case 'gneon': case 'advanced': case 'dropwater': case 'wall': case 'chrismast': case 'honey': case 'drug': case 'marble': case 'marble2': case 'ice': case 'juice': case 'rusty': case 'abstra': 
case 'biscuit': case 'wood': case 'scifi': case 'metalr': case 'purpleg': case 'shiny': case 'jewelry': case 'jewelry2': case 'jewelry3': case 'jewelry4': case 'jewelry5': case 'jewelry6': case 'jewelry7': case 'jewelry8': case 'metalh': case 'golden': 
case 'glitter': case 'glitter2': case 'glitter3': case 'glitter4': case 'glitter5': case 'glitter6': case 'glitter7': case 'metale': case 'carbon': case 'candy': case 'candy': case 'metalb': case 'gemb': case 'metalb2': case 'metalg': 
case 'neon_light':  case 'snow':  case 'cloudsky ': case 'gradient2 ': case ' luxury2': case 'christmas ': 
case 'summer ': case 'minion': case 'oscar': case 'neonlight': case 'metaldark': case '3dglue': 
case 'summery': case 'engraved': case 'writing': case 'newyear2': case 'newyear': case 'neonc': 
case 'fabric': case 'glossyc': case 'deluxe2': 
case 'glossyb': case 'holographic': case 'purple': case 'skeleton': case 'natural': case 'firework': case 'wicker': case 'joker': case 'darkg': case 'blood': case 'xmas': case 'metals': case 'denim': case 'gloss': 
case 'steel': case 'balloon7': case 'balloon5': case 'balloon6': case 'balloon4': case 'balloon3': case 'balloon2': case 'balloon': case 'glass4': case 'glass3': case 'glass2': case 'glass': case 'rock': 
case 'peridot': case 'decorate2': case 'decorate': case 'toxic': case 'equalizer': case 'captain_as2': case 'glass7': case 'glass5': case 'glass6': case 'glass8': case 'robot': case 'sparkling5': case 'sparkling4': case 'sparkling3': case 'sparkling2': case 'sparkling': 
if (!q) return m.reply(`Masukan query!`)
command_r = command.replace("-", "_")
try {
tekpro = `https://api-alphabot.herokuapp.com/api/textpro/${command_r}?text=${q}&apikey=Alphabot`
console.log(tekpro)
tekproimg = await getBuffer(tekpro)
cafnay.sendMessage(m.chat, { image: tekproimg , caption: `Ni ${pushname} *${command}* nya` }, {quoted: m})
} catch (e) {
m.reply(`Apikey *${command}* Undefined`)
}
break
///////////////////////WELCOME///////////////////


/////////////////////////BATASNYA ASU///////////////////            
                            
                  
            /*case 'tes': case 'menu': case 'help': case '?': {
                anu = `
┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ ${prefix}pinterest
│⭔ ${prefix}wallpaper
│⭔ ${prefix}wikimedia
│
└───────⭓

┌──⭓ *Random Menu*
│
│⭔ ${prefix}porno
│⭔ ${prefix}hentai
│⭔ ${prefix}quotesanime
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu
│⭔ ${prefix}delete
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}chat [option]
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/cafnaym.mp4') }, { upload: cafnay.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/cafnay-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                cafnay.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator && !m.key.fromMe) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator && !m.key.fromMe) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
      if (budy.includes('CAF')) {  
cafnay.sendMessage(m.chat, {text: 'Hmmm....'}, {quoted: peksaya})
	  }	  

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
