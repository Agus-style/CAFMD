function help() {
    return `
╔══✪〘 INFORMATION 〙✪══
║
║
╠══✪〘 LIST MENU 〙✪══
║
║ ${prefix}ownermenu*
║ ${prefix}adminmenu*
║ ${prefix}textpromenu*
║ ${prefix}markermenu*
║ ${prefix}artinyamenu*
║ ${prefix}mediamenu*
║ ${prefix}animemenu*
║ ${prefix}downloadmenu*
║ ${prefix}othermenu*
╠═════✪ OTHER 〙✪══
║
║⭔ ${prefix}ping
║⭔ ${prefix}owner
║⭔ ${prefix}menu
║⭔ ${prefix}delete
║⭔ ${prefix}iklan
║⭔ ${prefix}sticker
║⭔ ${prefix}sgif
║⭔ ${prefix}tomp4
║⭔ ${prefix}tourl
║  ${prefix}tagall (query)
║⭔ ${prefix}malingpp
║⭔ ${prefix}toimg (foto) 
║
╚═══════✪ 
`
}
exports.help = help()
function admincmd() {
    return `
╔══════✪〘 ADMIN 〙✪══
║
║⭔ ${prefix}leave
║⭔ ${prefix}join
║⭔ ${prefix}linkgroup
║⭔ ${prefix}hidetag (teks)
║⭔ ${prefix}add (tag)
║⭔ ${prefix}kick (tag)
║⭔ ${prefix}promote (tag)
║⭔ ${prefix}demote (tag)
║
╚═══════✪ `
}
exports.admincmd = admincmd()
function downloadercmd() {
    return `
╔══════✪ DOWNLOADER 〙✪══
║
║⭔ ${prefix}ytmp3 (linkyt)
║⭔ ${prefix}ytmp4 (linkyt)
║⭔ ${prefix}play (nama lagu)
║⭔ ${prefix}ttaudio (link tt)
║⭔ ${prefix}igdl (link ig)
║⭔ ${prefix}ttwm (link tt)
║⭔ ${prefix}ttnowm (link ig)
║⭔ ${prefix}mediafire(link)
║
╚═══════✪`
}
exports.downloadcmd = downloadcmd()
function mediacmd() {
    return `
╔══════✪ MEDIA 〙✪══
║
║⭔ ${prefix}pinterest
║⭔ ${prefix}wallpaper
║⭔ ${prefix}wikimedia
║⭔ ${prefix}lirik (query)
║⭔ ${prefix}tr (query)
║⭔ ${prefix}gimg (query)
║⭔ ${prefix}kbbi (query)
║
╚═══════✪⭓`
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
╔══════✪ ANIME 〙✪══
║
║⭔ ${prefix}porno
║⭔ ${prefix}hentai
║⭔ ${prefix}quotesanime
║⭔ ${prefix}loli
║⭔ ${prefix}neko
║⭔ ${prefix}waifu
║⭔ ${prefix}shinobu
║⭔ ${prefix}megumin
║⭔ ${prefix}bully
║⭔ ${prefix}cuddle
║⭔ ${prefix}cry
║⭔ ${prefix}hug
║⭔ ${prefix}awoo
║⭔ ${prefix}kiss
║⭔ ${prefix}lick
║⭔ ${prefix}pat
║⭔ ${prefix}bonk
║⭔ ${prefix}smug
║⭔ ${prefix}blush
║⭔ ${prefix}yeet
║⭔ ${prefix}smile
║⭔ ${prefix}wave
║⭔ ${prefix}highfive
║⭔ ${prefix}handhold
║⭔ ${prefix}nom
║⭔ ${prefix}bite
║⭔ ${prefix}glomp
║⭔ ${prefix}slap
║⭔ ${prefix}kill
║⭔ ${prefix}happy
║⭔ ${prefix}wink
║⭔ ${prefix}poke
║⭔ ${prefix}dance
║⭔ ${prefix}cringe
║⭔ ${prefix}hilih (query)
║
╚═══════✪ `
}
exports.animecmd = animecmd()
function artinyacmd() {
    return `
╔══════✪ ARTINYA 〙✪══
║
║⭔ ${prefix}artimimpi
║⭔ ${prefix}artinama
║⭔ ${prefix}ramalanjodoh
║⭔ ${prefix}ramalanjodohbali
║⭔ ${prefix}nomerhoki
║⭔ ${prefix}suamiistri
║⭔ ${prefix}ramalancinta
║⭔ ${prefix}kecocokannama
║⭔ ${prefix}kecocokanpasangan
║⭔ ${prefix}jadianpernikahan
║⭔ ${prefix}sifatusaha
║⭔ ${prefix}rejeki
║⭔ ${prefix}pekerjaan
║⭔ ${prefix}ramalannasib
║⭔ ${prefix}artitarot
║⭔ ${prefix}potensipenyakit
║⭔ ${prefix}haribaik
║⭔ ${prefix}fengshui
║⭔ ${prefix}harinaas
║⭔ ${prefix}harisangar
║⭔ ${prefix}arahrejeki
║⭔ ${prefix}peruntungan
║⭔ ${prefix}nagahari
║⭔ ${prefix}weton
║⭔ ${prefix}sifat
║⭔ ${prefix}keberuntungan
║⭔ ${prefix}memancing
║⭔ ${prefix}masasubur
║⭔ ${prefix}shio
║
╚═══════✪⭓`
}
exports.artinyacmd = artinyacmd()
function textprocmd() {
    return `
╔══════✪ TEXTPRO 〙✪══
║
║⭔ ${prefix}fiction
║⭔ ${prefix}transformer
║⭔ ${prefix}demon
║⭔ ${prefix}berry
║⭔ ${prefix}thunder
║⭔ ${prefix}magma
║⭔ ${prefix}3dstone
║⭔ ${prefix}neon
║⭔ ${prefix}glitch
║⭔ ${prefix}embossed
║⭔ ${prefix}harry-potter
║⭔ ${prefix}broken
║⭔ ${prefix}papercut
║⭔ ${prefix}gradient
║⭔ ${prefix}glossy
║⭔ ${prefix}watercolor
║⭔ ${prefix}multicolor
║⭔ ${prefix}underwater
║⭔ ${prefix}neon-devil
║⭔ ${prefix}bear
║⭔ ${prefix}wonderfulg
║⭔ ${prefix}sparkling6
║⭔ ${prefix}sparkling7
║⭔ ${prefix}decorative
║⭔ ${prefix}strawberry
║⭔ ${prefix}chocolate
║⭔ ${prefix}koifish
║⭔ ${prefix}bread
║⭔ ${prefix}matrix
║⭔ ${prefix}blood2
║⭔ ${prefix}neonligth2
║⭔ ${prefix}thunder2
║⭔ ${prefix}neon2
║⭔ ${prefix}3dbox
║⭔ ${prefix}roadw
║⭔ ${prefix}bokeh
║⭔ ${prefix}gneon
║⭔ ${prefix}advanced
║⭔ ${prefix}dropwater
║⭔ ${prefix}wall
║⭔ ${prefix}chrismast
║⭔ ${prefix}honey
║⭔ ${prefix}drug
║⭔ ${prefix}marble
║⭔ ${prefix}marble2
║⭔ ${prefix}ice
║⭔ ${prefix}juice
║⭔ ${prefix}rusty
║⭔ ${prefix}abstra
║⭔ ${prefix}biscuit
║⭔ ${prefix}wood
║⭔ ${prefix}scifi
║⭔ ${prefix}metalr
║⭔ ${prefix}purpleg
║⭔ ${prefix}shiny
║⭔ ${prefix}jewelry
║⭔ ${prefix}jewelry2
║⭔ ${prefix}jewelry3
║⭔ ${prefix}jewelry4
║⭔ ${prefix}jewelry5
║⭔ ${prefix}jewelry6
║⭔ ${prefix}jewelry7
║⭔ ${prefix}jewelry8
║⭔ ${prefix}metalh
║⭔ ${prefix}golden
║⭔ ${prefix}glitter
║⭔ ${prefix}glitter2
║⭔ ${prefix}glitter3
║⭔ ${prefix}glitter4
║⭔ ${prefix}glitter5
║⭔ ${prefix}glitter6
║⭔ ${prefix}glitter7
║⭔ ${prefix}metale
║⭔ ${prefix}carbon
║⭔ ${prefix}candy
║⭔ ${prefix}candy
║⭔ ${prefix}metalb
║⭔ ${prefix}gemb
║⭔ ${prefix}metalb2
║⭔ ${prefix}metalg
║⭔ ${prefix}neon-light 
║⭔ ${prefix}snow 
║⭔ ${prefix}cloudsky 
║⭔ ${prefix}gradient2 
║⭔ ${prefix} luxury2
║⭔ ${prefix}christmas 
║⭔ ${prefix}summer 
║⭔ ${prefix}minion
║⭔ ${prefix}oscar
║⭔ ${prefix}neonlight
║⭔ ${prefix}metaldark
║⭔ ${prefix}3dglue
║⭔ ${prefix}summery
║⭔ ${prefix}engraved
║⭔ ${prefix}writing
║⭔ ${prefix}newyear2
║⭔ ${prefix}newyear
║⭔ ${prefix}neonc
║⭔ ${prefix}fabric
║⭔ ${prefix}glossyc
║⭔ ${prefix}deluxe2
║⭔ ${prefix}glossyb
║⭔ ${prefix}holographic
║⭔ ${prefix}purple
║⭔ ${prefix}skeleton
║⭔ ${prefix}natural
║⭔ ${prefix}firework
║⭔ ${prefix}wicker
║⭔ ${prefix}joker
║⭔ ${prefix}darkg
║⭔ ${prefix}blood
║⭔ ${prefix}xmas
║⭔ ${prefix}metals
║⭔ ${prefix}denim
║⭔ ${prefix}gloss
║⭔ ${prefix}steel
║⭔ ${prefix}balloon7
║⭔ ${prefix}balloon5
║⭔ ${prefix}balloon6
║⭔ ${prefix}balloon4
║⭔ ${prefix}balloon3
║⭔ ${prefix}balloon2
║⭔ ${prefix}balloon
║⭔ ${prefix}glass4
║⭔ ${prefix}glass3
║⭔ ${prefix}glass2
║⭔ ${prefix}glass
║⭔ ${prefix}rock
║⭔ ${prefix}peridot
║⭔ ${prefix}decorate2
║⭔ ${prefix}decorate
║⭔ ${prefix}toxic
║⭔ ${prefix}equalizer
║⭔ ${prefix}captain-as2
║⭔ ${prefix}glass7
║⭔ ${prefix}glass5
║⭔ ${prefix}glass6
║⭔ ${prefix}glass8
║⭔ ${prefix}robot
║⭔ ${prefix}sparkling5
║⭔ ${prefix}sparkling4
║⭔ ${prefix}sparkling3
║⭔ ${prefix}sparkling2
║⭔ ${prefix}sparkling
║⭔ ${prefix}metallic
║⭔ ${prefix}sircuit
║⭔ ${prefix}sketch
║⭔ ${prefix}water-pipe
║⭔ ${prefix}blackpink
║⭔ ${prefix}rainbow
║⭔ ${prefix}halloween
║⭔ ${prefix}discovery
║
╚═══════✪ `
}
exports.textprocmd = textprocmd()
function markercmd() {
    return `
╔══════✪ MARKER 〙✪══
║
║⭔ ${prefix}ktpmaker
║
╚═══════✪⭓`
}
exports.makercmd = makercmd()
function ownercmd() {
    return `
╔══════✪ OWNER〙✪══
║
║⭔ ${prefix}chat [option]
║⭔ ${prefix}public
║⭔ ${prefix}self
║⭔ ${prefix}setmenu
║⭔ ${prefix}setpp
║
╚═══════✪⭓`
}
exports.ownercmd = ownercmd()
function info() {
    return `
⬣「 𝙄𝙉𝙁𝙊 𝙇𝘼𝙄𝙉 」⬣
❑ Jika bot tidak merespon, mungkin bot sedang off
❑ bot tidak menyimpan riwayat foto/media
❑ Silahkan beri waktu 5 detik penggunaan per fitur agar tidak menyebabkan spam
❑ Jika menemukan bug/err silahkan hubungi owner `
}

/*const { 
    help,
    admincmd,
    ownercmd,
    textprocmd,
    mediacmd,
    animecmd,
    othercmd,
    downloadcmd,
    artinyacmd,
    info,   
    } = require('./lib/help')


      // LIST MENU
        case '#menu':
        case '#help':
            cafnay.sendText(from, help)
            break        
        case '#textpromenu':
            cafnay.sendText(from, textprocmd)
            break
        case '#mediamenu':
            cafnay.sendText(from, mediacmd)
            break
        case '#animemenu':
            cafnay.sendText(from, animecmd)
            break
        case '#markermenu':
            cafnay.sendText(from, markercmd)
            break
        case '#downloadmenu':
            cafnay.sendText(from, downloadcmd)
            break
        case '#othermenu':
            cafnay.sendText(from, othercmd)
            break
        case '#artinyamenu':
            cafnay.sendText(from, artinyacmd)
            break
        case '#adminmenu':
            if (!isAdmin) return m.reply(from, 'Perintah ini hanya untuk Admin Elaina', id)
            cafnay.sendText(from, admincmd)
            break
        case '#ownermenu':
            if (!isOwner) return m.reply(from, 'Perintah ini hanya untuk Owner Elaina', id)
            cafnay.sendText(from, ownercmd)
            break        
        // INFORMATION       
        case '#info':
            cafnay.sendText(from, info)
            break*/
        