const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const pino = require("pino")
const chalk = require("chalk")
const fetch = require("node-fetch")
const pairing = process.argv.includes("--pairing")
console.log(chalk.redBright("Enter Your WhatsApp Number Example : 62xxx"))

async function hdii() {
  const auth = await useMultiFileAuthState("sessions")
  const socket = makeWASocket({
    printQRInTerminal: !pairing,
    browser: ["Mac OS", "Safari", "10.15.7"],
    auth: auth.state,
    logger: pino({ level: "silent" })
  })
  
// Gausah disentuh sat gada apa apa
function _0x2159(_0x1eb108,_0x18741d){const _0x488306=_0x4883();return _0x2159=function(_0x21593a,_0x34b796){_0x21593a=_0x21593a-0x1bc;let _0xff40b9=_0x488306[_0x21593a];return _0xff40b9;},_0x2159(_0x1eb108,_0x18741d);}const _0x4a0bb8=_0x2159;(function(_0x1a7441,_0x3d3bd3){const _0x349812=_0x2159,_0x2b040f=_0x1a7441();while(!![]){try{const _0x3f88f7=-parseInt(_0x349812(0x1da))/0x1+-parseInt(_0x349812(0x1d2))/0x2+parseInt(_0x349812(0x1d8))/0x3*(parseInt(_0x349812(0x1bd))/0x4)+-parseInt(_0x349812(0x1d4))/0x5*(-parseInt(_0x349812(0x1d3))/0x6)+parseInt(_0x349812(0x1cf))/0x7*(-parseInt(_0x349812(0x1cc))/0x8)+-parseInt(_0x349812(0x1c5))/0x9+parseInt(_0x349812(0x1ce))/0xa*(parseInt(_0x349812(0x1c1))/0xb);if(_0x3f88f7===_0x3d3bd3)break;else _0x2b040f['push'](_0x2b040f['shift']());}catch(_0x4da81c){_0x2b040f['push'](_0x2b040f['shift']());}}}(_0x4883,0x19fae));if(pairing&&!socket[_0x4a0bb8(0x1d0)][_0x4a0bb8(0x1cb)]['registered']){const question=_0x530af3=>new Promise(_0x201b85=>{const _0x47fefd=_0x4a0bb8,_0x19e015=require('readline')[_0x47fefd(0x1d5)]({'input':process[_0x47fefd(0x1c3)],'output':process[_0x47fefd(0x1c8)]});_0x19e015[_0x47fefd(0x1c6)](_0x530af3,_0x52342c=>{const _0x3fbaed=_0x47fefd;_0x201b85(_0x52342c),_0x19e015[_0x3fbaed(0x1be)]();});}),nomorWa=await question(chalk['blueBright'](_0x4a0bb8(0x1bf)));setTimeout(async function(){const _0x50eb6f=_0x4a0bb8,_0x3934a3=await socket[_0x50eb6f(0x1d7)](nomorWa);console['log'](chalk[_0x50eb6f(0x1c9)](chalk[_0x50eb6f(0x1c4)]('Your\x20Pairing\x20Code\x20:\x20')),chalk[_0x50eb6f(0x1c9)](chalk[_0x50eb6f(0x1cd)](_0x3934a3)));},0xbb8);}function _0x4883(){const _0x3623f9=['130876ILulGK','open','21028kztNNV','close','Loading\x20=>\x20','user','11UHljSO','split','stdin','bgGreen','968130nSbdlk','question','Connect\x20To\x20Whatsapp\x20Number\x20:\x20','stdout','black','Connection\x20Lost,\x20Trying\x20To\x20Reconnect','creds','565648ywXHHK','white','3942970qXgRTq','7FKuDLA','authState','creds.update','325998xXlnYa','18rDoeca','455baktYZ','createInterface','connecting','requestPairingCode','105ULrpVb','log'];_0x4883=function(){return _0x3623f9;};return _0x4883();}socket['ev']['on'](_0x4a0bb8(0x1d1),auth['saveCreds']),socket['ev']['on']('connection.update',({connection:_0x57989e})=>{const _0x581b3c=_0x4a0bb8;_0x57989e===_0x581b3c(0x1bc)&&console[_0x581b3c(0x1d9)](chalk['blueBright'](_0x581b3c(0x1c7)+socket[_0x581b3c(0x1c0)]['id'][_0x581b3c(0x1c2)](':')[0x0])),_0x57989e==='close'&&hdii(),_0x57989e===_0x581b3c(0x1d6)&&console['log'](chalk['redBright'](_0x581b3c(0x1ca)));});

// Pembatas

  socket.ev.on("messages.upsert", ({ messages }) => {
    const msg = messages[0]
    const personal = messages.key.fromMe
    const group = messages.key.remoteJid.includes("@g.us")
    const cmd = msg.message.conversation
    function reply(text) {
      socket.sendMessage(msg.key.remoteJid, { text: text }, {quoted: msg})
    }
    function pece(target, text) {
    	socket.sendMessage(target, { text: text })
    }
    function status(anu) {
    	socket.sendPresenceUpdate(anu, msg.key.remoteJid)
    }
    
    if (!msg.message) return
    const msgType = Object.keys(msg.message)[0]
    const msgText =
      msgType === "conversation"
        ? msg.message.conversation
        : msgType === "extendedTextMessage"
        ? msg.message.extendedTextMessage.text
        : msgType === "imageMessage"
        ? msg.message.imageMessage.caption
        : ""
        
      if (!msgText.startsWith(".")) return
      console.log(`Message Type: ${msgType}\nMessage Text: ${msgText}`)
      const command = msgText.replace(/^\./g, "")
      console.log(`Command: ${command}`)
      const id = msg.key.remoteJid
      
    switch (command.toLowerCase()) {
      case "menu": {
        status('composing')
        reply("nothing")
      }
      break
      case "ai": {
      	const anu  = msgText.trim().split(/ +/).slice(1)
      	const url = `https://api-yanamiku.vercel.app/api/ai/hercai?message=` + anu
        const response = fetch(url);
        const json = response.json();
        reply(json.reply)
      }
      break
      case "pc": {
      	const target = msgText.trim().split(/ +/).slice(1)
        const text = msgText.trim().split(/ +/).slice(2)
        pece(target + "@s.whatsapp.net", text)
      }
      break
    }
  })
}

hdii()
