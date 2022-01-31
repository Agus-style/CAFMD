//====================>BACA INI DULU
/*
==>SC INI 94% DIRAKIT SENDIRI OLEH CAF
==>Contact Me on wa.me/6283167714830
==>Follow https://github.com/GUS-ID
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateForwardMessageContent, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
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
const moment = require("moment-timezone")
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const Brainly = require('brainly-scraper')
const hx = require('hxz-api')
const zs = require('zs-extract')
const nhen = require('nhentai-node-api')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { uploadimg, upload } = require('./lib/uploadimg')
const { igDownloader } = require('./lib/igdown')
const { mediafireDl } = require('./lib/mediafire.js')
const tebakgambar = require('./lib/tebakgambar')
const { wikiSearch } = require('./lib/wiki')
const { textpro } = require('./lib/textpro')
const { color } = require('./lib/color')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, apload, pormatDate } = require('./lib/ytdl')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
botname = setting.namabot
const fake = 'GUS BOTz - Bot MD'
ownerNumber = ["6285793887010@s.whatsapp.net"]
modelmenu = 'image'
hentai_pdf = ''
hentai_id = ''
//===================>MENU
const { grubmenu } = require('./menu/grubmenu.js')
//===================>Double Image Fitur
let pelaku = ``
let korban = ``
//===================>GAME STATUS
game_status = 'false'
//===================>GAME STATUS
game_tebakgambar = 'off'
game_caklontong = 'off'
game_susunkata = 'off'
game_siapakahaku = 'off'
game_family100 = 'off'
game_tebakkalimat = 'off'
game_tebakkata = 'off'
game_lirik = 'off'
/*game_caklontong = 'off'*/
//====================>BENAR & SALAH
benar = '*BENAR* !!!!'
salah = '*SALAH* !!!!'
media_benar = './media/kuis/benar.jpg'
media_salah = './media/kuis/salah.jpg'
//====================>BENAR & SALAH



//=============>JAWABAN GAME MENU
//==>TEBAK GAMBAR
tebakgambar_status = 'false'
kunci_gambar = ''
petunjuk_gambar = ''
//==>CAKLONTONG
caklontong_status = 'false'
caklontong_soal = ''
caklontong_jawaban = ''
caklontong_desc = ''
//==>SUSUN KATA
susunkata_status = 'false'
susunkata_tipe = ''
susunkata_soal = ''
susunkata_jawaban = ''
//==>SIAPAKAH AKU
siapakahaku_status = 'false'
siapakahaku_soal = ''
siapakahaku_jawaban = ''
//==>FAMILY 100
family100_status = 'false'
family100_soal = ''
family100_jawaban = ''
//==>TEBAK KALIMAT
tebakkalimat_status = 'false'
tebakkalimat_soal = ''
tebakkalimat_jawaban = ''
//==>TEBAK KATA
tebakkata_status = 'false'
tebakkata_soal = ''
tebakkata_jawaban = ''
//==>TEBAK LIRIK
tebaklirik_status = 'false'
tebaklirik_soal = ''
tebaklirik_jawaban = ''
//==============>GUS-BOTz
//====>GAME WAKTU<====\\
remaining = 'off'
time_remaining = '60'
//====>GUS-BOTz<====\\

//==========================>INI APIKEY
apikeyy = 'sQMpXbHimbTkxGC'
//==========================>GUS-BOTz


// Database



module.exports = cafnay = async (cafnay, m, chatUpdate) => {
    try {
        //var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        //Body lu ada yg kurang gw tambahin
        //var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = setting.prefix
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
	    
	     
	    //DATABASE WA BOT GUA//
	    
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
			
			//CONST FILE DATABASE JSON
			const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
			//BATAS
            
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
        let buttonReply = []
        let buttonMessageReply = {
        text: teks,
        footer: '©GUS-BOTz',
        buttons: buttonReply,
        headerType: 1
           }
        cafnay.sendMessage(m.chat, buttonMessageReply, { quoted: m })
        }
        //===============>SEND DOCUMENT
        const sendFileDocument = (from, url, filename, m) => {
            cafnay.sendMessage(from, {document: {url: url}, mimetype: 'application/octet-stream', fileName: filename}, {quoted:m})
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

// Tebak Gambar
            

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌄'//'Pagi'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🌅'//'Pagi '
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🌞'//'Siang '
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞☀️'//'Soree '
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌠'//'Selamat '
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'//'Malam '
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

//VAR KUIS
var kuis = false
//BATAS SUCI

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
                         "message": `CAF•BOTz - MD`, 
                         "orderTitle": 'CAF', 
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
                         "orderTitle": 'dapet salam dari owner GUS!', 
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
//////////BUTTON BUATAN GUS/////////////
 const sendButtonImg = async (id, text1, desc1, btext, idbut, caf) => {
 
 var tes = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...caf.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "quickReplyButton": {
              "displayText": btext,
              "id": idbut
            }
          }
          ]
      }
    }
  }, {})
cafnay.relayMessage(id, tes.message, { messageId: tes.key.id })
}
//=================>LIST MENU<===================\\

//=================>BUTTON LOCATION<=============\\
/*async sendButtonLoc(jid, buffer, content, footer, button1, row1, quoted, options = {}) {
      return await this.sendMessage(jid, {
        locationMessage: { jpegThumbnail: buffer },
        contentText: content,
        footerText: footer,
        buttons: [{ buttonId: row1, buttonText: { displayText: button1 }, type: 1 }],
        headerType: 6
      }, MessageType.buttonsMessage, { quoted, ...options })
    }*/
///////////////////////BATAS SUCI////////////////////

//BUTTON 5
        const sendButton5 = async (id, text1, desc1, yo) => {
//==>BUAT PESAN
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
              "url": "https://github.com/GUS-ID"
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
              "displayText": "RULES",
              "id": `${prefix}rules`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "PING",
              "id": `${prefix}ping`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "My Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
cafnay.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}
//======================>LIST MENU
//const sendList(from, titel, desc, fake) cafnay.createMessage(from, {image: {url: "./media/cafnay.jpg", caption: anuy}}))
const sendList = async (from, titel, desc, buttontext, fake) => {
template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: titel,
                    description: desc,
                    buttonText: buttontext,
                    footerText: fake,
                    listType: "SINGLE_SELECT",
                    sections: [{
                      rows: [
                        {
                          title: "ALL MENU",
                          rowId: `${prefix}menu`,
                          description: "Pilih Ini Untuk Melihat Keseluruhan Fitur !!"
                        },
                        {
                          title: "GROUP MENU",
                          rowId: "ya",
                          description: " "
                        },
                                                {
                          title: "NSFW MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "MAIN MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "STALK MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "GAME MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "OWNER MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "DOWNLOAD MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "TOOLS MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "CONVERT MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "SEARCH MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "RANDOM TEXT",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "IMAGE EDITOR",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "TEXTPRO MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "MEME MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "MAKER MENU",
                          rowId: "ya",
                          description: " "
                        },
                          {
                          title: "PHOTOOXY MENU",
                          rowId: "ya",
                          description: " "
                        }
                        ]
                    }]
                }
            }), {})
 cafnay.relayMessage(from, template.message, { messageId: template.key.id })
}
//=====================>BATAS SUCI<=====================\\

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

╭◪ 𝐑𝐮𝐥𝐞𝐬𝐒 
├❖ *Donasi Biar BOT Lebih Berkembang!*
├❖ *Spam : Auto Block!*
├❖ *Beri Jeda 5 Detik!*
├❖ *No Vc/Tlpn=Block!*
╰──────────────╯

┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}resetlinkgc
│⭔ ${prefix}hidetag (teks)
│⭔ ${prefix}tagall (teks)
│⭔ ${prefix}add <628xxx>
│⭔ ${prefix}kick (tag)
│⭔ ${prefix}promote (tag)
│⭔ ${prefix}demote (tag)
│⭔ ${prefix}join <link gc>
│⭔ ${prefix}leave
│⭔ ${prefix}setnamegc
│
└───────⭓

┌──⭓ *NSFW Menu*
│
│⭔ ${prefix}porno 
│⭔ ${prefix}hentai 
│⭔ ${prefix}nhentai <id>
│⭔ ${prefix}nhentaisearch <query>
│⭔ ${prefix}neko-nsfw 
│⭔ ${prefix}blowjob-nsfw 
│⭔ ${prefix}kemonomimi-nsfw
│⭔ ${prefix}kitsune-nsfw 
│⭔ ${prefix}yuri-nsfw 
│⭔ ${prefix}boobs-nsfw
│⭔ ${prefix}kuni-nsfw
│
└───────⭓

┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu
│⭔ ${prefix}iklan
│
└───────⭓

┌──⭓ *Text Menu*
│
│⭔ ${prefix}halah (query)
│⭔ ${prefix}hilih (query)
│⭔ ${prefix}huluh (query)
│⭔ ${prefix}heleh (query)
│
└───────⭓

┌──⭓ *Stalk Menu*
│
│⭔ ${prefix}stalkyt
│⭔ ${prefix}stalkig 
│⭔ ${prefix}stalktiktok
│⭔ ${prefix}stalkgithub 
│
└───────⭓

┌──⭓ *Owner Menu*
│
│⭔ ${prefix}sendmsg <628xxx•teks>
│⭔ ${prefix}chat [option]
│⭔ ${prefix}delete
│⭔ ${prefix}public
│⭔ ${prefix}self
│⭔ ${prefix}setmenu
│⭔ ${prefix}setpp
│⭔ ${prefix}block
│⭔ ${prefix}unblock
│
└───────⭓

┌──⭓ *Random Menu*
│
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
│
└───────⭓

┌──⭓ TEXT PRO 1
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
└───────⭓

         [ *POWERED BY GUS* ]`
//======[=>BATAS SUCI<=]======//
        // Public & Self
        if (!cafnay.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            teksnyo = `[ PESAN ] ${new Date} ${budy || m.mtype}\n=> Dari ${pushname} ${m.sender}\n => Di ${m.isGroup ? pushname : 'Private Chat', m.chat}`
            //m.reply(teksnyo)
        }

        switch(command) {
       case 'menu':
       case 'hlp':
       if (modelmenu == 'gif') {
       await sendButton5(from, anuy, fake, await cafnay.createMessage(from, {video: {url: "./media/cafnay.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GUS"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton5(from, anuy, fake, await cafnay.createMessage(from, {image: {url: "./media/cafnay.jpg", caption: anuy}}))
       }
       break
       
	   ///====>Banned User
	   
	   
	   case 'ytdl':{
		   if (!q) return m.reply('Masukan Link Yt')
			  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link not valid')
		   m.reply(mess.wait)
		   dlmp3 = `${q}`
		   var cafau = await y2mateA(dlmp3);
		   console.log(cafau[0].link)
		   var thumbnail = await getBuffer(cafau[0].thumb)
           caf_teks = '❖ Title: ' + cafau[0].judul + '\n'
           caf_teks += '❖ Size: ' + cafau[0].output + '\n'
           let button12 = [
                    {buttonId: `${prefix}cafmp3 ${url}`, buttonText: {displayText: '☰ AUDIO'}, type: 1},
                    {buttonId: `${prefix}cafmp4 ${url}`, buttonText: {displayText: '☰ VIDEO'}, type: 1}
                ]
                let buttonMessage2 = {
                    image: thumbnail,
                    caption: caf_teks,
                    footerText: fake,
                    buttons: button12,
                    headerType: 4
                }
                cafnay.sendMessage(from, buttonMessage2, { quoted: m })
		  break
	   }
/* TIKTOK DOWNLOADER*/
	   case 'tiktokdl':
		   if (!q) return m.reply('masukan link video tiktok!')
	   	   if (!isUrl(q) && !q.includes('tiktok')) throw 'Link Invalid!'
		   tt1 = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/tiktok?url=${q}&apikey=Alphabot`)
		   tt2 = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/tiktok2?url=${q}&apikey=Alphabot`)
		   thumb = tt2.results.thumb
		   var caf_thumb = await getBuffer(thumb)
		   console.log(caf_thumb)
		   teks = `•> Title : ${tt2.results.title}`
           let but_tt = [
                    {buttonId: `${prefix}ttnowm ${q}`, buttonText: {displayText: 'NO WATERMARK'}, type: 1},
                    {buttonId: `${prefix}ttwm ${q}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
                    {buttonId: `${prefix}ttaudio ${q}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let button_tt = {
                    image: caf_thumb,
                    caption: teks,
                    footerText: fake,
                    buttons: but_tt,
                    headerType: 4
                }
                cafnay.sendMessage(from, button_tt, { quoted: m })
		   break
		   case 'ttnowm':
		   m.reply(mess.wait)
		   hx.ttdownloader(q)
		   .then(result => {
		   const { wm, nowm, audio } = result
		   console.log(nowm)
		   sendFileFromUrl(from,nowm,'Done️',m)
		   })
		   break
		   case 'ttwm':
		   m.reply(mess.wait)
		   hx.ttdownloader(q)
		   .then(result => {
		   const { wm, nowm, audio } = result
		   console.log(wm)
		   sendFileFromUrl(from,wm,'Done️',m)
		   })
		   break
		   case 'ttmp3':
		   m.reply(mess.wait)
		   audio = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${q}`)
		   caf = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/tiktok2?url=${q}&apikey=Alphabot`)
		   audio = audio.result.audio_only.original
		   cafnay.sendMessage(m.chat, {document: {url: audio}, mimetype: 'audio/mpeg', fileName: `${caf.results.title}.mp3`}, {quoted:m})
		   break
		   
/* BATAS SUCI */
	   case 'mediafire':{
		   if (!q) return m.reply('masukan link mediafire!')
		   if (!isUrl(q) && !q.includes('mediafire')) throw 'Link Invalid!'
		   let url = args.join(' ')
		   res = await mediafireDl(url)
		   firest = '[ *MEDIAFIRE DOWNLOAD* ] \n\n'
		   firest += '⬣───────────────⬣ \n'
		   firest += '❖ Name File: ' + res[0].nama + '\n'
           firest += '❖ File Size: ' + res[0].size + '\n' 
		   firest += '⬣───────────────⬣\n\n'
		   firest += '❑Tunggu Beberapa Saat Untuk Mengirim File'
		   link = res[0].link
		   nama = res[0].nama
		   cafnay.sendMessage(m.chat, {text: firest}, {quoted: m})
		   cafnay.sendMessage(m.chat, {document: {url: link}, mimetype: res[0].mime, fileName: nama}, {quoted: m})
		   break
	   }
	   case 'zippyshare':{
	   if (!q) return m.reply('masukan link mediafire!')
	   if (!isUrl(q) && !q.includes('zippyshare.com')) throw 'Link Invalid!'
	   zippy = await zs.extract(q)
	   let cadangan = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${zippy.download}`)
	   link_cadangan = cadangan.result
	   teks_zippy = '[ *ZIPPYSHARE DOWNLOAD* ] \n\n'
	   teks_zippy += '⬣───────────────⬣ \n'
	   teks_zippy += '❖ Name File: ' + zippy.filename + '\n'
    teks_zippy += '❖ Url Cadangan: ' + link_cadangan + '\n' 
	   teks_zippy += '⬣───────────────⬣\n\n'
    teks_zippy += '❑Tunggu Beberapa Saat Untuk Mengirim File'
    m.reply(teks_zippy)
    sendFileDocument(from, zippy.download, zippy.filename, m)
	   break
	   }
	   case 'gdrive':{
	   let url_drive = `${q}`
	   let regexDrive = RegExp(`/file/d/(.*?)/view`).exec(url_drive)[1]
	   let gdrivedl = `https://docs.google.com/uc?export=download&id=${regexDrive}`
	   let buffdl = await getBuffer(gdrivedl)
	   cafnay.sendMessage(m.chat, { document: buffdl, caption: `Cowo` }, {quoted: m})
	   console.log(gdrivedl)
	   break
	   }
	  
	  case 'kbbi':
	  if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  cafnay.sendMessage(m.chat, {text: biba}, {quoted: m})
	  break
	  case 'copy':
	  if (!quoted) throw 'Balas Pesan'
	  t_copy = cafnay.copyNForward(from, true)
	  m.reply(t_copy)
	  break
                        	   
////////////INSTAGRAM MEDIA DOWNLOADER///////////
   case 'igdl':
   if (!q) return m.reply('Linknya?')
   if (!isUrl(args[0]) && !args[0].includes('www.instagram')) throw 'Link Invalid!'
   res = await igDownloader(q)
   let linkig = res.result.link
   sendFileFromUrl(from,linkig,'Done️',m)
   break
///////////PLAY FROM YOUTUBE
case 'play':{
if (!q) return m.reply('Masukan Judul')
srch = `${q}`
var aramas = await yts(srch);
console.log(aramas)
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
                    {buttonId: `${prefix}cafmp3 ${url}`, buttonText: {displayText: '☰ AUDIO'}, type: 1},
                    {buttonId: `${prefix}cafmp4 ${url}`, buttonText: {displayText: '☰ VIDEO'}, type: 1}
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
/////TES BRAINLY
/*case 'brainly':
if (!q) return m.reply('Masukkan Pertanyaan')
Brainly(q).then(res => {
console.log(res)
for (let Y of resp) {
teks = `❉───────────────────────❉\n\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
}
m.reply(teks)			
})								
break 			*/
/////BATAS
	   case 'ytmp3':
	   case 'cafmp3':
		  m.reply(mess.wait)
		  cafau = await y2mateA(q)
		  title = cafau[0].judul
		  audio = cafau[0].link
		  cafnay.sendMessage(m.chat, {document: {url: audio}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted:m})
		  break
	   
	   case 'ytmp4':
	   case 'cafmp4':
		  m.reply(mess.wait)
		  cafvid = await y2mateV(q)
		  video = cafvid[0].link
		  console.log(video)
		  vidnya = await getBuffer(video)
		  cafnay.sendMessage(m.chat, { video: vidnya, caption: 'Done' }, { quoted: m })
		  break
		  case 'reply':
		  m.reply('TES')
		  break
		  case 't':
		  const buttonst = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessaget = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttonst,
    headerType: 1
}

const sendMsg = await cafnay.sendMessage(m.chat, buttonMessaget)
		  break
	   
///////////////BATAS SUCI///////////////
                            
	    case 'sc': {
	    m.reply('Ngapain Bang ?')
                //m.reply('Script : https://github.com/DikaArdnt/cafnay-Morou\n\n Dont Forget Give Star')
            }
            break
            
			
			case 'latestnews':{
				
					f = await fetchText(`https://wanz-apik.herokuapp.com/api/news/kumparan?type=Berita&apikey=WanzBotz`)
					cafnay.sendMessage(m.chat, {text: f.result}, {quoted: troli})
					m.reply('Saya lagi malas.')
					break
			}
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                cafnay.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			case 'halah':
			break
			case 'hilih':
	        if (!q) return m.reply ('masukan query')
			dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
			cafnay.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
			break
			case 'huluh':
			break
			case 'heleh':
			break
			case 'pantun':
			pantun = await fetchJson(`https://x-restapi.herokuapp.com/api/random-pantun?apikey=BETA`)
			pantun = pantun.pantun
			m.reply(pantun)
			break
			
			
				   
			 
			
			
			
			
			
			
			case 'gimg':
				if (!q) return m.reply('masukan query!')
				GUS-nay.sendMessage(m.chat, {text: 'Emror'}, {quoted: peksaya})
				/*gimage = await getBuffer(url)
				cafnay.sendMessage(m.chat, { image: gimage , caption: tgimg }, {quoted: m})*/
				break
            case 'pinterest': {
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                console.log(result)
                cafnay.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: troli })
            }
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                console.log(result)
                //cafnay.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: troli })
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
                                            url: 'https://github.com/GUS-ID'
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
                if (!text) throw 'Masukkan Query Title'
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: 'Hisoka Morrow',
                    buttons: buttons,
                    headerType: 4
                }
                cafnay.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wiki':
            
            break
            case 'porno': case 'porn': case 'bokep': {
                m.reply('BOKEP TROSS')
               /* anu = await porno()
                console.log(anu.video)*/
              //  cafnay.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+anu.video }, caption: `⭔ Title : ${anu.title}\n⭔ Viewers : ${anu.views}\n⭔ Tags : ${anu.tags}\n⭔ Likes : ${anu.like}\n⭔ Dislikes : ${anu.dislike}\n⭔ Favourite : ${anu.favorite}\n⭔ Time Upload : ${anu.upload}\n⭔ Description : ${anu.desc}\n⭔ Source : https://tikporntok.com/${anu.source}` }, { quoted: m })
            }
            break
            case 'hentai': {
                m.reply('HENTAI TROSS')
                /*anu = await hentai()
                result = anu[Math.floor(Math.random() * anu.length)]
                console.log(result)*/
                //cafnay.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            //=============>RANDOM TEXT MENU
            case 'quotesanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                teks = `~_${result.quotes}_~ \n\n`
                teks += `By *"${result.karakter}"*\n ${result.anime},${result.episode} \n\n`
                teks += `- ${result.up_at}`
                m.reply(teks)
                //cafnay.sendMessage(m.chat, {image: img_buf, caption: teks}, {quoted:m})
            }
            break
            case 'quotesislami':
            fetchislm = await fetchJson(`https://hardianto.xyz/api/random/quotes/muslim?apikey=hardianto`)
            txtislam = fetchislm.result.text_id
            cafnay.sendMessage(m.chat, {text: txtislam }, {quoted: troli})
            break
            //==================>BATAS SUCI
            case 'rules':
            rules_teksb = `1. Jangan Spam Bot.🙅‍♀️
Sanksi :

2. Jangan Telepon Bot
Sanksi:

3. Jangan Mengeksploitasi Bot
Sanksi:

4. Jika Memasukkan Bot Kedalam _GROUP_ *_Wajib Jadikan Bot Sebagai Admin!!_*

Bot Tidak Atau Lambat Merespon ?
➱Mungkin Dipengaruhi Oleh Jaringan, Server,Banned Oleh WhatsApp dan Beberapa Alasan  dari WhatsApp. Tetap Patuhin Rules *!!*

Dimana Saya Mendapatkan Script dari Bot Ini ?
➱Script Ini Masih Private dan Tidak Pernah Diperjualbelikan, Bijaklah Dalam Mengetahui Penipu

Prefixnya Apa Kak ?
➱ Bot Ini Tidak Menggunakan Prefix

Kak, Kok Saya Chat Owner Tidak Direspon ?
➱ Owner Hanya Menerima Pertanyaan Seputqar Bot dan Kendala Error, Tidak Untuk Kenalan Atau Mengemis Script.


Jika Sudah Dipahami Rules-nya, Silahkan Ketik *menu* Untuk Memulai

⚠️ Segala Kebijakan dan Ketentuan GUS-BOTz Dipegang Oleh Owner dan Segala Kebijakan, Sewaktu Waktu Owner Berhak Menambah Atau Mengurangi Rules, Ban User, Maupun Blok User. (*﹏*)

Arigatou Gozaimasu! Untuk Kalian User Ramah dan Beberapa Orang Yang Ikut Membantu Juga Dalam Pengembangan Project GUS-BOTz 😖🙏
 `
 const buttonsRules = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1}
]

const buttonMessageRules = {
    text: rules_teksb,
    footerText: fake,
    buttons: buttonsRules,
    headerType: 1
}
cafnay.sendMessage(from, buttonMessageRules)
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
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n⭓────────────⭓\n')}

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
                    + 'N:;GUS;;;'
                    + 'FN:GUS•NAY\n' // full name
                    + 'ORG:Owner - GUS;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283167714830:+62 857-6217-9624\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                cafnay.sendMessage(m.chat, { contacts: { displayName: 'Owner - GUS', contacts: [{ vcard }] } }, { quoted: troli })
            }
            break
            
            
			case 'malingpp': {
            if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
            anu = await cafnay.profilePictureUrl(m.quoted.sender, 'image')
            console.log(m.quoted.sender)
            cafnay.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
            }
            break
			
           case 'neko': 
              await m.reply(('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		   break
		   case 'loli':
		   m.reply(mess.wait)
		   hadi_loli = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
		   cafnay.sendMessage(m.chat, { image: hadi_loli , caption: `Ni ${pushname} ${command} nya` }, {quoted: m})
		   .catch((err) => {
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
caf = `https://github.com/${user}/${repo}/archive/refs/heads/master.zip`
sendFileFromUrl(from,caf,`Done`,m)
break
///////////////////BATAS SUCI///////////////////////

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
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		//cafnay.sendMessage(from, {video: {url: "./media/cafnay.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GUS"}))
		break
		//////////////////TEXT PRO/////////////////
		case 'natural-leaves': case 'black-pink': case 'drop-water': case 'christmas': case '3d-gradient':
              if (!q) return m.reply('Masukkan Text!!')
              await m.reply(('Loading..'))
              let cafx = await fetchJson(`https://hardianto.xyz/api/textpro/${command}?apikey=hardianto&text=${q}`)
              await sendFileFromUrl(from,cafx.result,`Ni ${pushname} ${command} nya`,m)
                m.reply(cafx.result)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
		case 'logo-wolf': case 'logo-wolf2':
 	          var wolf1 = q.split('|')[0]
              var wolf2 = q.split('|')[1]
              await m.reply(('Loading..'))
              hem = `https://hardianto.xyz/api/textpro/logo-wolf?apikey=hardianto&text=${wolf1}&text2=${wolf2}`
              console.log(hem)
              let cafy = await fetchJson(hem)
              buff = await getBuffer(cafy.result)
		      cafnay.sendMessage(m.chat, { image: buff , caption: 'Done' }, {quoted: m})
		break
		case 'shadow': case 'romantic': case 'smoke': case 'burn-paper': case 'naruto': case 'love-message': case 'double-heart': case 'coffe-cup': case 'love-text': case 'butterfly': case 'message-under-grass':
              if (!q) return m.reply('Masukkan Text!!')
              m.reply(('Loading..'))
              test = `https://hardianto.xyz/api/photooxy/${command}?apikey=hardianto&text=${q}`
              let nay = await fetchJson(test)
              console.log(nay.result)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
break
case 'send':
img = `https://photooxy.com/apps_user/jpg/2021/12/26/61c8935d835b4.jpg`
let ktpnya = await getBuffer(img)
cafnay.sendMessage(m.chat, {image: ktpnya, caption: 'test'}, {quoted:m})
break
case 'glitch':{
             	var glit = q.split('|')[0]
              var glit2 = q.split('|')[1]
              await m.reply(('Loading..'))
              let cafoxy = await fetchJson(`https://hardianto.xyz/api/textpro/glitch?apikey=hardianto&text=${glit}&text2=${glit2}`)
              teks = `Ni ${pushname} Image ${command} nya`
              await cafnay.sendMessage(m.chat, {image: cafoxy, caption: teks}, {quoted:m})
		}
		break
//////////////////MAKER MENU//////////////////
   case 'ktp': {
                 if (!quoted) throw `Balas Image`
 if (args.length == 0) return m.reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|Gol Darah\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|O`)
                m.reply(mess.wait)
                let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    imgupld = require('imgbb-uploader')
                    anu = await imgupld('520bd6f6209077d1777c2a4f20c509c2', media)
                    var nik = q.split('|')[0]
                    var prov = q.split('|')[1]
                    var kabu = q.split('|')[2]
                    var name = q.split('|')[3]
                    var ttl = q.split('|')[4]
                    var jk = q.split('|')[5]
                    var jl = q.split('|')[6]
                    var rtrw = q.split('|')[7]
                    var lurah = q.split('|')[8]
                    var camat = q.split('|')[9]
                    var agama = q.split('|')[10]
                    var nikah = q.split('|')[11]
                    var kerja = q.split('|')[12]
                    var warga = q.split('|')[13]
                    var berlaku = q.split('|')[14]
                    var gdarah = q.split('|')[15]
                    anu1 = `${anu.display_url}`
                    console.log(anu1)
                    ktp = `https://fdz-app.herokuapp.com/api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=${gdarah}&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${berlaku}&prov=${prov}&kab=${kabu}&picurl=${anu1}`
                    console.log(ktp)
                    let ktpnya = await getBuffer(ktp)
                    caf = `Nihh KTP Lu Bang :v \n\n`
                    cafnay.sendMessage(m.chat, {image: ktpnya, caption: caf}, {quoted:m})
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case 'serti-epep':
var ngep1 = q.split('|')[0]
if(!ngep1) return m.reply('Masukkan Nama Peserta!!')
var ngep2 = q.split('|')[1]
if(!ngep2) return m.reply('Masukkan Nama Penyelenggara!!')
m.reply(mess.wait)
linkngep = `https://ferdiz-afk.my.id/api/Fmake/sertiff?text=${ngep1}&text2=${ngep2}&apikey=8ldSj8Utl`
imgngep = await getBuffer(linkngep)
textngep = `Gua Ga Nyangka Kalo Lu Itu Bocil Ngep-Ngep Bro!`
cafnay.sendMessage(m.chat, {image: imgngep, caption: textngep}, {quoted:m})
break
///////////////////////BATAS SUCI///////////////////
/*case 'tes':
let gambar = fs.readFileSync('./media/caf.webp')
teks = `Hanya Test Doank`
await sendButtonImg(from, teks, fake, await cafnay.createMessage(from, {image: {url: "./media/caf.webp", caption: teks}}))
break*/
////////////////////////CONVERTER MENU//////////////////////////////////
case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
		
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await cafnay.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 31) return m.reply('Maksimal 30 detik!')
		    let media = await quoted.download()
		    let encmedia = await cafnay.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else {
              throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break
	    case 'men':
	   
        
	    break
	   /* case 'smeme':
	    if (!quoted) return m.reply('Reply Image')
	    if (!q) return m.reply(`Masukkan Text`)
	    m.reply(mess.wait)
	    let smeme1 = await cafnay.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) { 
        let link_tod = await TelegraPh(smeme1)
        smeme1 = await getBuffer(`https://hadi-api.herokuapp.com/api/converter/ezgif-with-url/png-to-webp?url=https://api.memegen.link/images/custom/_/${q}.png?background=${link_tod}`)
        let smeme = await cafnay.sendImageAsSticker(m.chat, smeme1, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(smeme)
        //cafnay.sendMessage(m.chat, {sticker: smeme1}, {quoted:m}, { packname: global.packname, author: global.author })
        } else { m.reply('Media Tidak Valid') }
	    //https://api.memegen.link/images/custom/_/CAF.png?background=http://www.gstatic.com/webp/gallery/1.png
	    break
	    case 'smeme2':
	    if (!quoted) throw `Balas Image`
	    var tsmeme1 = q.split('•')[0]
	    var tsmeme2 = q.split('•')[1]
	    if (!tsmeme1) return m.reply(` Balas Gambar Dengan *${prefix + command} GUS•BOT*`)
	    if (!tsmeme2) return m.reply(` Balas Gambar Dengan *${prefix + command} GUS•BOT*`)
	    m.reply(mess.wait)
	    let smeme2 = await cafnay.downloadAndSaveMediaMessage(quoted)
        if (/image/.test(mime)) { 
        let link_ngent = await TelegraPh(smeme2)
        //let smeme2stick = await getBuffer(`https://api.memegen.link/images/custom/${tsmeme1}/${tsmeme2}.png?background=${link_ngent}`)
       // console.log(string(`https://hadi-api.herokuapp.com/api/converter/ezgif-with-url/png-to-webp?url=https://api.memegen.link/images/custom/${tsmeme1}/${tsmeme2}.png?background=${link_ngent}`))
        let smemeq = await cafnay.sendImageAsSticker(m.chat, {url: https://api.memegen.link/images/custom/${tsmeme1}/${tsmeme2}.png?background=${link_ngent}`, m, { packname: global.packname, author: global.author }})
        await fs.unlinkSync(smemeq)
        //cafnay.sendMessage(m.chat, {sticker: smeme2}, {quoted:m}, { packname: global.packname, author: global.author })
        } else { m.reply('Media Tidak Valid') }
	    //https://api.memegen.link/images/custom/_/GUS.png?background=http://www.gstatic.com/webp/gallery/1.png
	    break*/
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
                let fotodl = await cafnay.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(fotodl)
                    m.reply(anu)
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(fotodl)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'tovn':
            break
            case 'tomp3':
            break
            case 'todocument':
            break
////////////////////////TOOLS MENU//////////////////////////////////
case 'fetch':
        if (!q) return reply("linknya?")
        if(mime.split("/")[0] === "image"){
        return cafnay.sendMessage(from, { image: { url: q }, caption: caption, mentions: men ? men : []}, {quoted: m})
        } else if(mime.split("/")[0] === "video"){
        cafnay.sendMessage(m.chat, { video: { url: q }, caption: 'Done' }, { quoted: m })
        } else {
        fetch(q)
        .then((res) => res.text())
        .then((bu) => {
        m.reply(bu)
          })
          }
        break
case 'getexif':
break
case 'translate': {
		   if (!q) return m.reply('Masukan QUERY!!')
			   Tr = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/translate?kata=${q}&apikey=WanzBotz`)
		   dijasjusin = `TRANSLATE Dari ${Tr.result.from} ke ${Tr.result.to}
		   Hasil : ${Tr.result.text}
		   Typo : ${Tr.result.typo}`
		   
		   cafnay.sendMessage(m.chat, {text: dijasjusin}, {quoted: troli})
		   break
	   }
case 'removebg':
if (!quoted) throw `Balas Image`
/*m.reply(mess.wait)
let quotedimg = await cafnay.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let linkbg = await TelegraPh(quotedimg)
let linkgambarbg = `https://api.ichikaa.xyz/api/removebg?url=${linkbg}&apikey=free20d`
let gambarbg = await getBuffer(linkgambarbg)
cafnay.sendMessage(m.chat, { image: gambarbg, caption: `Done` }, {quoted: m})
} else { m.reply('Media Tidak Valid') }*/
m.reply('Saat Ini Fitur Tersebut Tidak Dapat Digunakan')
break
case 'ssweb':
image_buff = `http://hadi-api.herokuapp.com/api/ssweb2?url=${q}`
sswebimg = await getBuffer(image_buff)
cafnay.sendMessage(m.chat, { image: sswebimg , caption: `Done` }, {quoted: m})
break
case 'ssweb2':
memeg = `https://ferdiz-afk.my.id/api/ssweb?url=${q}`
console.log(memeg)
ssweb2img = await getBuffer(memeg)
cafnay.sendMessage(m.chat, { image: ssweb2img , caption: `Done` }, {quoted: m})
break
case 'shortlink':
const buttons = [
  {buttonId: `${prefix}tinyurl ${q}`, buttonText: {displayText: 'TINYURL'}, type: 1},
  {buttonId: `${prefix}bitly ${q}`, buttonText: {displayText: 'BITLY'}, type: 1},
  {buttonId: `${prefix}cuttly ${q}`, buttonText: {displayText: 'CUTTLY'}, type: 1}
]

const buttonMessage = {
    text: "Pilih Salah Satu Type Shortlink !!",
    footerText: fake,
    buttons: buttons,
    headerType: 1
}
cafnay.sendMessage(from, buttonMessage)
               break
               case 'gaje':
               //
               axios.get(`https://cutt.ly/api/api.php?url=http://hadi-api.herokuapp.com/api`)
               .then((p) => {
               console.log(p.data)
               })
               break
case 'tinyurl':
link = await fetchJson(`http://hadi-api.herokuapp.com/api/tinyurl?url=${q}`)
url = link.result
teks = `「 *SHORT LINK* 」`
teks += '⬣───────────────⬣ \n'
teks += '❖ Short Link: ' + link.result + '\n'
teks += '❖ Uploaded: ' + Tanggal + '\n' 
teks += '⬣───────────────⬣\n'
m.reply(teks)
break
case 'bitly':
link = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${q}`)
url = link.result
teks = `「 *SHORT LINK* 」`
teks += '⬣───────────────⬣ \n'
teks += '❖ Short Link: ' + link.result + '\n'
teks += '❖ Uploaded: ' + Tanggal + '\n' 
teks += '⬣───────────────⬣\n'
m.reply(teks)
break
case 'cuttly':
link = await fetchJson(`http://hadi-api.herokuapp.com/api/cuttly?url=${q}`)
url = link.result
teks = `「 *SHORT LINK* 」`
teks += '⬣───────────────⬣ \n'
teks += '❖ Short Link: ' + link.result + '\n'
teks += '❖ Uploaded: ' + Tanggal + '\n' 
teks += '⬣───────────────⬣\n'
m.reply(teks)
break
/*│⭔ ${prefix}base64enc <teks>
│⭔ ${prefix}base64dec <teks>
│⭔ ${prefix}base32enc <teks>
│⭔ ${prefix}base32dec <teks>*/
case 'base64enc':
str = await fetchJson(`https://hardianto.xyz/api/base?apikey=hardianto&type=base64&encode=${q}`)
teks_str = `〘 *BASE64 ENC* 〙\nString: *${q}*\n\nEncrypted: *${str.result.encode}* `
cafnay.sendMessage(m.chat, {text: teks_str }, {quoted: m})
break
case 'base64dec':
str = await fetchJson(`https://hardianto.xyz/api/base?apikey=hardianto&type=base64&encode=${q}`)
teks_str = `〘 *BASE64 DEC* 〙\nString: *${q}*\n\nDecrypted: *${str.result.string}* `
cafnay.sendMessage(m.chat, {text: teks_str }, {quoted: m})
break
case 'base32enc':
break
case 'base32dec':
break
////////////////////////OWNER MENU//////////////////////////////////
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
                            case 'setpp': 
                            if (!isCreator) throw mess.owner
                            if (!quoted) throw 'Reply Image'
                            let media = await cafnay.downloadAndSaveMediaMessage(quoted)
                            if (m.isGroup) {
                            await cafnay.updateProfilePicture(m.chat, { url: media }).catch((err) => m.reply('Gagal Mengganti Foto Profil'))
                            } else if (isCreator) {
                            await cafnay.updateProfilePicture(cafnay.user.id, { url: media }).catch((err) => m.reply('Gagal Mengganti Foto Profil'))
                            }
                            break

  
  case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cafnay.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cafnay.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
////////////////////////GROUP MENU/////////////////////////
case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await cafnay.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'leave': {
                if (!isCreator) throw mess.owner
                await cafnay.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await cafnay.groupInviteCode(m.chat)
                cafnay.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'resetlinkgc': {
                if (!isCreator) throw mess.owner
                const gc_code = await cafnay.groupInviteCode(m.chat)
                teks_res = `Group Name: *${groupMetadata.subject}*\nLink Group:\n*https://chat.whatsapp.com/${gc_code}*`
                m.reply(teks_res)
            }
            break
case 'tagall':
                if (!isGroup) return m.reply(mess.group)
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *GUS-BOTz* ⋘`
                cafnay.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: m })
            break
break
case 'hidetag':
                if (!isGroup) return m.reply(mess.group)
                cafnay.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
case 'edotensei':
                if (!isGroup) return m.reply(mess.group)
                let tekss1 = `✪〘 *EDOTENSEI NO JUTSU* 〙✪\n\n`
		      	for (let mem of participants) {
		            tekss1 += `❑️ @${mem.id.split('@')[0]}\n`
				}
                caf_foot = `⋙ *GUS-BOTz* ⋘`
                let imageku = fs.readFileSync('./media/caf.webp')
                let buttonE = [
                    {buttonId: `${prefix}edo`, buttonText: {displayText: 'EDOTENSEI 🙏'}, type: 1}
                ]
                let buttonEdo = {
                    image: imageku,
                    caption: tekss1,
                    footerText: caf_foot,
                    buttons: buttonE,
                    headerType: 4
                }
                cafnay.sendMessage(from, buttonEdo, { quoted: m })
            break
case 'ohidetag':
                cafnay.copyNForward(from, true)
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!isGroup) return m.reply(mess.group)
                cafnay.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break

			case 'kick': {
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				console.log(from)
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'remove')
				m.reply(`Sukses kick ${users}`)
				}
				break
			case 'add': {
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'add')
				m.reply(`sukses add ${users}`)
				
				}
				break
			case 'promote': {
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'promote')
				m.reply('sukses promote!')
				}
				break
			case 'demote': {
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await cafnay.groupParticipantsUpdate(m.chat, [users], 'demote')
				m.reply('sukses demote!')
				}
				break
				case 'setnamegc': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!text) throw 'Text ?'
                try {
                m.reply(`Sukses Mengganti Name Group Ke: ${text}`)
                await cafnay.groupUpdateSubject(m.chat, text)
                } catch (e) {
                m.reply(`ERROR,Gagal Mengganti Nama Group`)
                }
            }
            break
//////////////////NSFW MENU//////////////
case 'nhentai':
if (!q) return m.reply(`Kirim perintah ${prefix + command} *kode nuklir*`)
let npdf = await fetchJson(`https://hadi-api.herokuapp.com/api/nhentai?id=${q}`)
let link = await fetchJson(`http://hadi-api.herokuapp.com/api/bitly?url=${npdf.result.download_pdf}`)
let nhentai  = `「 *NHENTAI* 」
⬣───────────────⬣

❖ *Title* : ${npdf.result.name}
❖ *Tag* : ${npdf.result.tag}
❖ *Artist* : ${npdf.result.artist}
❖ *Pages* : ${npdf.result.pages}
❖ *Groups* : ${npdf.result.groups}
❖ *Parodies* : ${npdf.result.parodies}
❖ *Uploaded* : ${npdf.result.uploaded}
❖ *Language* : ${npdf.result.language}
❖ *Categories* : ${npdf.result.categories}
❖ *Characters* : ${npdf.result.characters}
⬣───────────────⬣
❖ *Url Cadangan* : ${link.result}
⬣───────────────⬣`
const buttons_hentai = [
  {buttonId: `${prefix}npdf ${npdf.result.download_pdf}|${q}`, buttonText: {displayText: 'DOWNLOAD PDF'}, type: 1}
]

const MessageHentai = {
    text: nhentai,
    footerText: fake,
    buttons: buttons_hentai,
    headerType: 1
}
cafnay.sendMessage(from, MessageHentai)
break
case 'gg':
try {
nuklir = await nhen.getDoujin(q)
console.log(nuklir.artists)
let tekshen  = `「 *NHENTAI* 」
⬣───────────────⬣

❖ *Title* : ${nuklir.title.default}
❖ *Tag* : ${nuklir.tags}
❖ *Artist* : ${nuklir.artists}
❖ *Pages* : ${nuklir.pages.length}
❖ *Groups* : ${nuklir.groups}
❖ *Parodies* : ${nuklir.parodies}
❖ *Uploaded* : ${nuklir.uploadedAt}
❖ *Language* : ${nuklir.language}
❖ *Categories* : ${nuklir.categories}
❖ *Characters* : ${nuklir.characters}
⬣───────────────⬣
❖ *Url Cadangan* : -
⬣───────────────⬣`
m.reply(tekshen)
for (x in nuklir.pages) {
imghen = await getBuffer('https://i.nhentai.net/galleries/1789160/10.jpg')
cafnay.sendMessage(m.chat, { image: imghen , caption: `Done` }, {quoted: m})
}
} catch (err) {
m.reply(`*Kode:* _${q}_\n\n Tidak Valid`)
}
break
case 'ggs':
try {
nuklir = await nhen.search(q)
console.log(nuklir)
} catch (err) {
m.reply(`*Query:* _${q}_ \n\n Tidak Valid`)
}
break
case 'hent':
nuklir = await nhen.getDoujin(q)
pge = nuklir.pages
for (x in pge) {
/*henti = await getBuffer(x)
cafnay.sendMessage(m.chat, { image: henti , caption: `Done` }, {quoted: m})*/
m.reply(x)
}
break
case 'npdf':
//cafnay.sendMessage(m.chat, {document: {url: `${q}`}, mimetype:'application/pdf', fileName: `NHENTAI-${text}.pdf`}, {quoted:m})
break
case 'neko-nsfw': case 'blowjob-nsfw': case 'kemonomimi-nsfw': case 'kitsune-nsfw': case 'yuri-nsfw': case 'boobs-nsfw': case 'kuni-nsfw': 
m.reply(mess.wait)
nsfwXjson = await fetchJson(`https://x-restapi.herokuapp.com/api/${command}?apikey=BETA`)
url = nsfwXjson.url
console.log(url)
nsfwXimage= await getBuffer(url)
cafnay.sendMessage(m.chat, { image: nsfwXimage , caption: ` ${pushname} Hentai >\\\<` }, {quoted: m})
break
case 'sendmsg':
var nomornye = q.split('•')[0]
var teksnye = q.split('•')[1]
if (!nomornye) return m.reply(`Masukan Nomor Penerima, Contoh: \n 628xxxx•Hallo`)
if (!teksnye) return m.reply(`Masukan Pesan Nya, Contoh: \n 628xxxx•Hallo`)
const id = `${nomornye}@s.whatsapp.net` 
const tksmsg = `${teksnye}` 
const sentMsg  = await cafnay.sendMessage(id, { text: tksmsg })
m.reply(`Berhasil Mengirim Pesan :\n*${teksnye}*\n\nKe Nomor :\n*_${nomornye}_*\n\n\nMessage By: *GUS-BOTz*`)
break
/*case 'sendmsg':
const _0x248915=_0x377d;(function(_0x2984c9,_0x3af54e){const _0x10f823=_0x377d,_0x3edf7c=_0x2984c9();while(!![]){try{const _0x2da6a8=parseInt(_0x10f823(0x1ea))/0x1+parseInt(_0x10f823(0x1e9))/0x2+parseInt(_0x10f823(0x1df))/0x3+-parseInt(_0x10f823(0x1e5))/0x4+parseInt(_0x10f823(0x1e0))/0x5*(-parseInt(_0x10f823(0x1e6))/0x6)+parseInt(_0x10f823(0x1e4))/0x7+parseInt(_0x10f823(0x1e3))/0x8*(-parseInt(_0x10f823(0x1e1))/0x9);if(_0x2da6a8===_0x3af54e)break;else _0x3edf7c['push'](_0x3edf7c['shift']());}catch(_0x308710){_0x3edf7c['push'](_0x3edf7c['shift']());}}}(_0x53d0,0x9f4ae));var nomornye=q[_0x248915(0x1dd)]('•')[0x0],teksnye=q['split']('•')[0x1];function _0x53d0(){const _0x522e32=['*\x0a\x0aKe\x20Nomor\x20:\x0a*_','sendMessage','split','@s.whatsapp.net','1551288kwNFYK','321505iHLVKB','224451IvIkwT','_*\x0a\x0a\x0aMessage\x20By:\x20*GUS-BOTz*','8dHUqEw','1822289xEXKMm','4505036hXpuyw','18kBINLh','Masukan\x20Nomor\x20Penerima,\x20Contoh:\x20\x0a\x20628xxxx•Hallo','reply','486912aYTfjT','975684VTxGZy'];_0x53d0=function(){return _0x522e32;};return _0x53d0();}if(!nomornye)return m['reply'](_0x248915(0x1e7));if(!teksnye)return m[_0x248915(0x1e8)]('Masukan\x20Pesan\x20Nya,\x20Contoh:\x20\x0a\x20628xxxx•Hallo');const id=nomornye+_0x248915(0x1de),tksmsg=''+teksnye,sentMsg=await cafnay[_0x248915(0x1dc)](id,{'text':tksmsg});function _0x377d(_0x497abd,_0x319291){const _0x53d0f3=_0x53d0();return _0x377d=function(_0x377ddd,_0x26a3df){_0x377ddd=_0x377ddd-0x1db;let _0x257637=_0x53d0f3[_0x377ddd];return _0x257637;},_0x377d(_0x497abd,_0x319291);}m[_0x248915(0x1e8)]('Berhasil\x20Mengirim\x20Pesan\x20:\x0a*'+teksnye+_0x248915(0x1db)+nomornye+_0x248915(0x1e2));
break*/
/////////STALKMENU
case 'stalkyt':
if (!q) return m.reply('Masukan Username')
stalkyt = await fetchJson(`https://x-restapi.herokuapp.com/api/yt-stalk?username=${q}&apikey=BETA`)
let teks  = `「 *YouTube* 」
⬣───────────────⬣
❖ *Channel* : ${stalkyt.channel}
❖ *Subscriber* : ${stalkyt.subscriberCount}
❖ *Verified* : ${stalkyt.isVerified}
❖ *isFamilyFriendly* : ${stalkyt.isFamilyFriendly}
❖ *Link* : ${stalkyt.link}
❖ *Deskripsi* : ${stalkyt.description}
⬣───────────────⬣
<<<<<<<*GUSBOTz*>>>>>>>
⬣───────────────⬣`
image = await getBuffer(stalkyt.thumb)
cafnay.sendMessage(m.chat, { image: image , caption: teks }, {quoted: m})
break

/////////////STALK MENU
case 'stalkig':
break
case 'stalkgithub':
break
case 'stalktiktok':
if (!q) return m.reply('Masukan Username')
stalktt = await fetchJson(`https://x-restapi.herokuapp.com/api/tiktok-stalk?username=${q}&apikey=BETA`)
let tekstt  = `「 *TikTok* 」
⬣───────────────⬣
❖ *Nama* : ${stalktt.username}
❖ *Pengikut* : ${stalktt.followerCount}
❖ *Mengikuti* : ${stalktt.followingCount}
❖ *Private* : ${stalktt.isprivate}
❖ *Id* : ${stalktt.id}
⬣───────────────⬣
<<<<<<<*GUSBOTz*>>>>>>>
⬣───────────────⬣`
image = await getBuffer(stalktt.avatarLarger)
cafnay.sendMessage(m.chat, { image: image , caption: tekstt }, {quoted: m})
break
///=======================>GAME MENU

//MAKER
case 'ttp':
if (!q) return m.reply('Masukan Query')
m.reply(mess.wait)
ttp = await getBuffer(`https://hardianto.xyz/api/maker/ttp?text=${q}&apikey=hardianto`)
cafnay.sendImageAsSticker(m.chat, ttp, m, { packname: global.packname, author: global.author })
break
case 'attp':
if (!q) return m.reply('Masukan Query')
m.reply(mess.wait)
//attp = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${q}&apikey=hardianto`)
//attplink = `https://hardianto.xyz/api/maker/attp?text=${q}&apikey=hardianto`
//sendFileFromUrl(from,attplink,'Done️',m)
//cafnay.sendVideoAsSticker(m.chat, attp, m, { packname: global.packname, author: global.author })
attp = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${q}&apikey=hardianto`)
cafnay.sendMessage(m.chat, {sticker: attp}, {quoted:m}, { packname: global.packname, author: global.author })
break
case 'tts':
var lg1 = q.split('|')[0]
var texts = q.split('|')[1]
tts = `http://hadi-api.herokuapp.com/api/tts?language=${lg1}&text=${texts}`
par_lg = `*af* = *Afrikaans*\n*sq* = *Albanian*\n*ar* = *Arabic*\n*hy* = *Armenian*\n*ca* = *Catalan*\n*zh* = *Chinese*\n*zh-cn* = *Chinese (Mandarin/China)*\n*zh-tw* = *Chinese (Mandarin/Taiwan)*\n*zh-yue* = *Chinese (Cantonese)*\n*hr* = *Croatian*\n*cs* = *Czech*\n*da* = *Danish*\n*nl* = *Dutch*\n*en* = *English*\n*en-au* = *English (Australia)*\n*en-uk* = *English (United Kingdom)*\n*en-us* = *English (United States)*\n*eo* = *Esperanto*\n*fi* = *Finnish*\n*fr* = *French*\n*de* = *German*\n*el* = *Greek*\n*ht* = *Haitian Creole*\n*hi* = *Hindi*\n*hu* = *Hungarian*\n*is* = *Icelandic*\n*id* = *Indonesian*\n*it* = *Italian*\n*ja* = *Japanese*\n*ko* = *Korean*\n*la* = *Latin*\n*lv* = *Latvian*\n*mk* = *Macedonian*\n*no* = *Norwegian*\n*pl* = *Polish*\n*pt* = *Portuguese*\n*pt-br* = *Portuguese (Brazil)*\n*ro* = *Romanian*\n*ru* = *Russian*\n*sr* = *Serbian*\n*sk* = *Slovak*\n*es* = *Spanish*\n*es-es* = *Spanish (Spain)*\n*es-us* = *Spanish (United States)*\n*sw* = *Swahili*\n*sv* = *Swedish*\n*ta* = *Tamil*\n*th* = *Thai*\n*tr* = *Turkish*\n*vi* = *Vietnamese*\n*cy* = *Welsh*`
if (!lg1) return m.reply(`Masukan Parameter Language\nKode Bahasa Yang Terdaftar:\n\n${par_lg}`)
if (!texts) return m.reply('Masukan Parameter Text')
m.reply(mess.wait)
console.log(tts)
tod = await getBuffer(tts)
cafnay.sendMessage(m.chat, {audio: tod, mimetype:'audio/mp4', ptt:true}, {quoted:m})
break
case 'imgbb':
if (!quoted) throw `Balas Image`
var imgbb = require('imgbb-uploader')
let media_bb = await cafnay.downloadAndSaveMediaMessage(quoted)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media_bb)
m.reply(njay.display_url)
break

//cafnay.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
	    //cafnay.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
////////////////////////////////GABUT MENU
case 'ppcouple':
           m.reply(mess.wait)
           let ppcp = JSON.parse(fs.readFileSync(`./NoApi/ppcouple.json`))
           let json = ppcp[Math.floor(Math.random() * ppcp.length)]
           console.log(ppcp.length)
           console.log(color('','aqua'), color(`||===========================================================||`, "cyan"))
           console.log(color(' ||> ','cyan'), color(`Cowo : ${json.male}`, 'cyan'))
           console.log(color(' ||> ','cyan'), color(`Cewe : ${json.female}`, 'cyan'))
               console.log(color('','aqua'), color(`||===========================================================||`, "cyan"))
           male = await getBuffer(json.male)
           female = await getBuffer(json.female)
           cafnay.sendMessage(m.chat, { image: male , caption: `Cowo` }, {quoted: m})
           GUS-nay.sendMessage(m.chat, { image: female , caption: `Cewe` }, {quoted: m})
		   break
case 'husbu':
           let husbu = JSON.parse(fs.readFileSync(`./NoApi/husbu.json`))
           let jsonHus = husbu[Math.floor(Math.random() * husbu.length)]
           image = await getBuffer(jsonHus.image)
           teks = `${jsonHus.teks}`
           cafnay.sendMessage(m.chat, { image: image , caption: `Name: ${teks}` }, {quoted: m})
break
case 'darkjokes':
           let datares = fs.readFileSync('./NoApi/darkjokes.js');
	       jsonData = JSON.parse(datares);
		   randIndex = Math.floor(Math.random() * jsonData.length);
		   randKey = jsonData[randIndex];
		   await sendFileFromUrl(from,randKey.result,`Done`,m)
		   break
		   case 'meme':
		   meme = await fetchJson(`https://hardianto.xyz/api/random/meme?apikey=hardianto`)
		   meme = meme.result
		   image = meme.url
		   buff = await getBuffer(image)
		   cafnay.sendMessage(m.chat, { image: buff , caption: 'Done' }, {quoted: m})
		   break
case 'artikata':
if (!q) return m.reply('Masukan Query')
artikatax = await fetchJson(`https://x-restapi.herokuapp.com/api/arti-kata?q=${q}&apikey=BETA`)
m.reply(artikatax.artikata)
break
case 'katabijak':
if (!q) return m.reply('Masukan Query')
linkny = `https://x-restapi.herokuapp.com/api/kata-bijak?q=${q}&apikey=BETA`
console.log(linkny)
katajak = await fetchJson(linkny)
console.log(katajak)
katajak = katajak.data
teksJak = `${katajak.katabijak}`
m.reply(teksJak)
break
//===================[=>IMAGE EDITOR MENU<=]
case 'circle': case 'triggered': case '3000years': case 'rejected': case 'approved': case 'distort': case 'glitch': 
case 'sepia': case 'contrast': case 'greyscale': case 'blur': case 'invert': case 'beautiful': case 'wanted': 
case 'rip': case 'utatoo': case 'wasted': case 'moustache': case 'scary': case 'instagram': case 'sniper': 
case 'thanos': case 'sharpen': case 'redple': case 'ps4': case 'missionpassed': case 'lookwhatkarenhave': case 'jail': case 'gay': 
case 'fire': case 'dictator': case 'deepfry': case 'ddungeon': case 'challenger': case 'burn': case 'brazzers': case 'dictator': 
let media_caf = await cafnay.downloadAndSaveMediaMessage(quoted)
let upld = await TelegraPh(media_caf)
link_buff = `https://api-alphabot.herokuapp.com/api/image_editor/${command}?apikey=Alphabot&url=${upld}`

console.log(link_buff)
imgedit = await getBuffer(link_buff)
cafnay.sendMessage(m.chat, { image: imgedit , caption: `Ni ${pushname} *${command}* nya` }, {quoted: m})
//imgedit = await getBuffer(``)
//cafnay.sendMessage(m.chat, { image: imgedit , caption: `Ni ${pushname} ${command} nya` }, {quoted: m})
break
case 'boonk':
if (q == 'pelaku') {  
let boonk_caf = await cafnay.downloadAndSaveMediaMessage(quoted)
let link_upld = await TelegraPh(boonk_caf)
m.reply(link_upld)
let pelaku = `${link_upld}`
}
if (q == 'korban') {  
let boonk_caf2 = await cafnay.downloadAndSaveMediaMessage(quoted)
let link_upld2 = await TelegraPh(boonk_caf2)
m.reply(link_upld2)
let korban = `${link_upld2}`
}
if (q == 'buat') {  
let link_buffbonk = `https://api.ichikaa.xyz/api/bonk?url=${pelaku}&url2=${korban}&apikey=free20d`
console.log(link_buffbonk)
let let_buff = await getBuffer()
cafnay.sendMessage(m.chat, { image: let_buff , caption: `Done` }, {quoted: m})
}
break
//==================IMAGE EDITOR 2
case 'porncomment':
if (!quoted) return m.reply(`Balas Image`)
if (args.length == 0) return m.reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|Gol Darah\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|O`)
var porn_user = q.split('•')[0]
var porn_komen = q.split('•')[1]
tekg = `${porn_user} ${porn_komen}`
if (tekg.includes('ch')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('Ch')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('ar')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('ru')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('an')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('rul')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('6')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('nam')) return m.reply('Ga boleh pake nama gua')
if (tekg.includes('kh')) return m.reply('Ga boleh pake nama gua')
if (!porn_user) return m.reply('Masukan Nama User')
if (!porn_komen) return m.reply('Masukan Teks Nya')
m.reply(mess.wait)
linknyo = await cafnay.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let upld = await TelegraPh(linknyo)
console.log(upld)
let permen = `https://api.zeks.me/api/phub?apikey=apivinz&img=${upld}&username=${porn_user}&msg=${porn_komen}`
let imgkomen = await getBuffer(permen)
cafnay.sendMessage(m.chat, { image: imgkomen , caption: `Done` }, {quoted: m})
}
break
case 'ytbuttonsilver':
if (!q) return m.reply('Masukkan Text')
m.reply(mess.wait)
let ytbuttonsilver = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=apivinz&text=${q}`)
cafnay.sendMessage(m.chat, { image: ytbuttonsilver , caption: `Done` }, {quoted: m})
break
case 'ytbuttongold':
m.reply(mess.wait)
if (!q) return m.reply('Masukkan Text')
link = `https://api.zeks.me/api/gplaybutton?apikey=apivinz&text=${q}`
console.log(link)
var ytbuttongold = await getBuffer(link)
cafnay.sendMessage(m.chat, { image: ytbuttongold , caption: `Done` }, {quoted: m})
break
case 'logoepep':
m.reply(mess.wait)
if (!q) return m.reply('Masukkan Text')
link = `https://api.zeks.me/api/epep?apikey=apivinz&text=${q}`
console.log(link)
var logoepep = await getBuffer(link)
cafnay.sendMessage(m.chat, { image: logoepep , caption: `Done` }, {quoted: m})
break
case 'oranghilang': case 'baranghilang':
if (!quoted) throw 'Reply Image'
m.reply(mess.wait)
let fotosing = await cafnay.downloadAndSaveMediaMessage(quoted)
let foto_url = await TelegraPh(fotosing)
var missing1 = q.split('|')[0]
var missing2 = q.split('|')[1]
var missing3 = q.split('|')[2]
let oranghilang = await getBuffer(`https://api.zeks.me/api/missing-image?apikey=apivinz&image=${foto_url}&text1=${missing1}&text2=${missing2}&text3=Call ${missing3}`)
cafnay.sendMessage(m.chat, { image: oranghilang , caption: `Mohon Segera Dicari!!` }, {quoted: m})
break

//==================BATAS SUCI
//===================[=>TEXTPRO ALPHA 1 TEXT MEJU<=]
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
//===================[=>TEXTPRO ALPHA 2 TEXT MENU<=]
case 'horror': case 'halloween2': case ' ': case 'game8bit': case 'layered': case 'glitch2': case 'coolg': case 'coolwg': case 'realistic': 
case 'space3d': case 'gtiktok': case 'stone': case 'pornhub': case 'avengers': case 'marvel': case 'marvel2': case 'metalg': case 'metalr': 
case '3dsteel': case 'metalg2': case 'halloween2': case 'lion': case 'lava': case 'ninja': case 'bagel': case 'horror2': case 'captain-as': case 'wolf-g': case 'wolf-bw': 
if (!q) return m.reply(`Masukan query!`)
command_r = command.replace("-", "_")
m.reply(mess.wait)
var txtpro1 = q.split('|')[0]
var txtpro2 = q.split('|')[1]
try {
link_buff = `https://api-alphabot.herokuapp.com/api/textpro/${command_r}?text=${txtpro1}&text2=${txtpro2}&apikey=Alphabot`
console.log(link_buff)
txtproimg = await getBuffer(link_buff)
cafnay.sendMessage(m.chat, { image: txtproimg , caption: `Ni ${pushname} *${command}* nya` }, {quoted: m})
} catch (e) {
m.reply(`Apikey *${command}* Undefined`)
}
break
//=======================ALL MENU======================\\
case 'grubmenu':{
m.reply(grubmenu)
}
break
case 'nsfwmenu':
break
case 'mainmenu':
break
case 'stalkmenu':
break
case 'gamemenu':
break
case 'ownermenu':
break
case 'downloadmenu':
break
case 'toolsmenu':
break
case 'konvertmenu':
break
case 'searchmenu':
break
case 'randomtext':
break
case 'imgeditor':
break
case 'textpromenu':
break
case 'menumeme':
break
case 'maker':
break
case 'photooxymenu':
break
//=======================PRIMBON MENU
	        case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + comman} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + comman} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                //hisoka.sendImage( anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!texthispk) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                //hisoka.sendImage(anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                m.reply(`⭔ *Hasil :* ${anu.message}`)
            }
            break
///TES REPEAT
case 'stopgame':
game_status = 'false'
break
case 'quoted':
cafnay.sendMessage(from, { text: 'Halo' }, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw Wibu bro:v!*`} } } })
break
case 'tebakgambar':
m.reply('Dalam Perbaikan')
/*soal = await tebakgambar()
game_status = 'true'
console.log(soal)
timg = soal.img
saver = soal.petunjuk
petunjuk_gambar = `${saver}`
kunci = soal.jawaban
kunci_gambar = `${kunci}`
console.log(kunci_gambar)
img = await getBuffer(timg)
tekt = `Petunjuk:\n\n*${saver}*`
let hooh = `Jawab Pertanyaan Nya,Kalo Kalah Wajib Donasi`
let btntbkgambar = [
                    {buttonId: `${prefix}petunjuktebakgambar ${saver}`, buttonText: {displayText: 'PETUNJUK'}, type: 1},
                    {buttonId: `${prefix}tebakgambar `, buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonbtntbkgambar = {
                    image: img,
                    caption: hooh,
                    footerText: 'Waktu : 60 detik',
                    buttons: btntbkgambar,
                    headerType: 4
                }
                cafnay.sendMessage(from, buttonbtntbkgambar, { quoted: m })
/*const timeoutId = setTimeout(function(){ m.reply("10 Detik") }, 50000);
const timeoutId = setTimeout(function(){ m.reply("30 Detik") }, 30000);
const timeoutId = setTimeout(function(){ m.reply("60 Detik Lagi"); }, 1000);
const timeoutId = setTimeout(function(){ m.reply("Waktu Habis"), kuis_gambar = 'false' }, 60000);*/
break
case 'petunjuktebakgambar':
if (!q) return m.reply('Masukkan Query')
m.reply(petunjuk_gambar)
break
case 'end2':
if (q.endsWith('on')) { console.log('true') } else { console.log('false') }
break
case 'list':
//(from, titel, desc, buttontext, fake)
sendList(from, '', 'Hallo👋', '*LIST MENU*', ` ${ucapanWaktu} ${pushname}, Saya *${botname}* !`)
break
case 'list2':
const secti = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    }
  ]
const  listMessage = {
  title: "Amazing boldfaced list title",
  description: 'Deskripsi',
  footerText: "nice footer, link: https://google.com",
  buttonText: "Required, text on the button to vie the list",
  listType: "SINGLE_SELECT",
  secti
}
cafnay.sendMessage(m.chat, listMessage)
break
////////////////////////////////BATAS SUCI///////////////////////////////////////////
                            
                  

            default:
//==========================>EXECUTE CMD<==========================\\
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
                        mer = String(err)
                        await m.reply(mer)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                if (budy.startsWith('<')) {
                    if (!m.key.fromMe && !isCreator) return reply(mess.owner)
                    try {
                    return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
                    } catch (e) {
                m.reply(e)
                }
                }
//==========================>BATAS SUCI<==========================\\


//========================>TEBAK GAMBAR<========================\\
/*if (budy.startsWith(`${kunci_gambar}`)) {
petunjuk_gambar = `Soal Telah Berakhir!!`
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>CAKLONTONG<========================\\
if (budy.startsWith(`${caklontong_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>SUSUN KATA<========================\\
if (budy.startsWith(`${susunkata_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>SIAPA AKU<========================\\
if (budy.startsWith(`${siapakahaku_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>FAMILY 100<========================\\
if (budy.startsWith(`${family100_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>TEBAK KALIMAT<========================\\
if (budy.startsWith(`${tebakkalimat_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>TEBAK KATA<========================\\
if (budy.startsWith(`${tebakkata_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}
//========================>TEBAK LIRIK<========================\\
if (budy.startsWith(`${tebaklirik_jawaban}`)) {  
sendButtonImg(from, benar, '© GUS-BOTz google.com', 'NEXT', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_benar, caption: benar}}))
game_status = 'false'
} else {
sendButtonImg(from, salah, '© GUS-BOTz google.com', 'NYERAH', `${prefix}tebakgambar`, await cafnay.createMessage(from, {image: {url: media_salah, caption: salah}}))
}*/
//========>PENTUP GAME
  /*👈YANG DISITU JANGAN DIHAPUS*/
//====================>GAME TAMAT<============================\\


//====================>AUTO RESPONDER<============================\\
if (budy == 'p') {
m.reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik *menu* Ya Kak`)
}
if (budy == 'P') {
m.reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik *menu* Ya Kak`)
}
/*if (budy == 'Bot') {
m.reply(`Ya, Emng Gw bot ngapa? mau ngajak by one lu??`)
}
if (budy == 'bot') {m.reply(`Ya, Emng Gw bot ngapa? mau ngajak by one lu😒`)
}*/

if (budy == 'assalamualaikum') {
m.reply(` وَعَلَيْكُمُ السَّلاَمُ \nAda Yang Bisa Saya Bantu? kalo Bingung Ketik *menu* Ya Kak`)
}
if (budy == 'mastah') {
m.reply(`Waw Ada Mastah Ampun Mastah`)
}
if (budy == 'Mastah') {
m.reply(`Waw Ada Mastah Ampun Mastah`)
}
if (budy == 'Assalamualaikum') {
m.reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)
}
if (budy == 'Terimakasih') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'terimakasih') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'makasih') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'Thanks') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'thanks') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'Tq') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
if (budy == 'tq') {
m.reply(`Sama sama, Semoga Harimu Menyenangkan :)`)
}
//====================>BATAS SUCI<============================\\
                
        }
      if (budy.includes('GUS')) {  
cafnay.sendMessage(m.chat, {text: 'Ada Apa Ya Kok Nyebut² Nama Owner Ku'}, {quoted: peksaya})
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
