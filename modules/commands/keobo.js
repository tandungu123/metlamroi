const axios = require("axios");
module.exports.config = {
    name: "keobo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Araxy XD",
    description: "",
    commandCategory: "TrÃ² ChÆ¡i",
    usages: "",
    cooldowns: 0
};
module.exports.run = async ({ api, event, Threads, args, Currencies }) => {
const { threadID, messageID, senderID } = event;
  if(args[0] == "help"){
  let imag = (await axios.get("https://i.imgur.com/OkyUXDf.png", {
        responseType: "stream"
      })).data;
  var msg = { body: 'ð®==== [ ððÌð ððÌ ] ====ð®\n\nð¡ð²ÌÌð ðºðð¼ÌÌð» ð°ðµð¼Ìð¶ ð¯ð®Ì£ð» ðµð®Ìð ð»ðµð®Ì£Ìð½ ð¹ð²Ì£Ìð»ðµ ð»ðµðÌ ðð®ð:\n/ð¸ð²ð¼ð¯ð¼ [ðð¼ÌÌ ðð¶ð²ÌÌð»] (ðð¼ÌÌð¶ ððµð¶ð²ÌÌð ð¹ð®Ì ð±ð¬$)\nððÌð ðÌ: ðð¶Ì ð¹ð²Ì£Ì ð°ð®Ìð»ð´ ð°ð®ð¼ ððµð¶Ì ð°ð®Ìð»ð´ ð±ð²ÌÌ ðð¿ðÌð»ð´ ððµðÌð¼ÌÌð»ð´ â¤ï¸',
attachment: imag 
}
    return api.sendMessage(msg, threadID, messageID)
  }
if(!args[0] || isNaN(args[0])){
    return api.sendMessage('ððÌ£ð§ ðð¡ð®Ìð ð§ð¡ðÌ£Ìð© ð¬ð¨ÌÌ ð­ð¢ðÌÌð§ ðð®Ìð¨ÌÌ£ð ð¡ð¨ðÌ£Ìð ð¤ð¡ð¨Ìð§ð  ð¡ð¨ÌÌ£ð© ð¥ðÌ£Ì ð«', threadID, messageID)
    }
 else {
   if (await checkMoney(senderID, 50) == false){return api.sendMessage('ððÌð® ððÌÌð® ððÌ£ð§ ððÌÌð§ ðð¨Ì ð¢Ìð­ ð§ð¡ðÌÌð­ ðð$ ð§ðÌÌð® ð¦ð®ð¨ÌÌð§ ð­ð¡ðð¦ ð ð¢ð ð¤ðÌð¨ ðð¨Ì ð®', threadID, messageID)}
     await Currencies.decreaseMoney(senderID, parseInt(args[0]));
var tile_1 = Math.floor(Math.random() * 100)
    var tile_2 = Math.floor(Math.random() * 100)
    var tile_3 = Math.floor(Math.random() * 100)
    var tile_4 = Math.floor(Math.random() * 100)
    var tile_5 = Math.floor(Math.random() * 100)
  var sotien_1 = args[0]
  var sotien_2 = args[0] * 2
  var sotien_3 = args[0] * 12
  var sotien_4 = args[0] * 144
  var sotien_5 = args[0] * 2880
let gif = (await axios.get("https://i.imgur.com/XSqIAPD.gif", {
        responseType: "stream"
      })).data;
  const cuoc = parseInt(args[0])
  var msg = { body: `ð®==== [ ððÌð ððÌ ] ====ð®\n\nð­. ðð¼Ì ð­ (${sotien_1}$) || ð§ðÌ ðð²Ì£Ì ${tile_1}\nð®. ðð¼Ì ð® (${sotien_2}$) || ð§ðÌ ðð²Ì£Ì ${tile_2}\nð¯. ðð¼Ì ð¯ (${sotien_3}$) || ð§ðÌ ðð²Ì£Ì ${tile_3}\nð°. ðð¼Ì ð° (${sotien_4}$) || ð§ðÌ ðð²Ì£Ì ${tile_4}\nð±. ðð¼Ì ð± (${sotien_5}$) || ð§ðÌ ðð²Ì£Ì ${tile_5}\n\nððð©ð¥ð² ð­ð¢ð§ ð§ð¡ðÌÌð§ ð§ðÌð² ð¤ðÌð¦ ððð ðð®Ìð ðð¨ð§ ðð¨Ì ð¦ðÌ ððÌ£ð§ ð¦ð®ð¨ÌÌð§ ððÌÌð­ ð§ð¡ðÌ ð®`,
   attachment: gif
}
return api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            cuoc
        });
    }, messageID)
}
   async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
}
module.exports.handleReply = async ({ api, Currencies, event, handleReply }) => {
const { threadID, senderID, messageID, body } = event;
  const { cuoc, author } = handleReply;
   const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
if (author !== senderID) { return api.sendMessage('ððÌ£ð§ ð¤ð¡ð¨Ìð§ð  ð©ð¡ðÌð¢ ð¥ðÌ ð§ð ð®Ìð¨ÌÌð¢ ðð¡ð¨Ìð¢ ð§ðÌð§ ð¤ð¡ð¨Ìð§ð  ð­ð¡ðÌÌ ðð¡ð¨Ì£ð§ ð®', threadID, messageID)};
 if(!("keobo" in global.client)) global.client.keobo = {}
 if(isNaN(body)) return api.sendMessage("ððÌ£ð§ ð©ð¡ðÌð¢ ð§ð¡ðÌ£Ìð© ð¦ð¨Ì£Ìð­ ð¬ð¨ÌÌ ð®", threadID);
if(1 > body || body > 5) return api.sendMessage("ððÌ£ð§ ðð¡ð¢Ì ðð¨Ì ð­ð¡ðÌÌ ðð¡ð¨Ì£ð§ ð­ð®ÌÌ ð ð­ð¨ÌÌð¢ ð ð®", threadID, messageID);
  if(body == "1"){
    var tienan = cuoc,
    win = "https://i.imgur.com/TCVTXtk.jpg",
      losse = "https://i.imgur.com/SSlJHrk.jpg"
  }
  else if(body == "2"){
    var tienan = cuoc * 2,
    win = "https://i.imgur.com/DcXn5a7.jpg",
      losse = "https://i.imgur.com/ALZ6WS8.jpg"
  }
  else if(body == "3"){
    var tienan = cuoc * 12,
    win = "https://i.imgur.com/XI7Hu3I.jpg",
      losse = "https://i.imgur.com/U3PPK6t.jpg"
  }
  else if(body == "4"){
    var tienan = cuoc * 144,
    win = "https://i.imgur.com/egKCSKK.jpg",
      losse = "https://i.imgur.com/lCwXTEG.jpg"
  }
  else if(body == "5"){
    var tienan = cuoc * 2880,
    win = "https://i.imgur.com/eHmb2eU.jpg",
      losse = "https://i.imgur.com/3P46yMd.jpg"
  }
  if( moneyUser < tienan){
    return api.sendMessage(`Báº¡n KhÃ´ng Äá»§ Tiá»n Äá» Chá»n Con BÃ² Sá» ${body} vá»i sá» tiá»n lÃ  ${tienan} vÃ  báº¡n cÃ²n thiáº¿u ${tienan - moneyUser}`, threadID)
  } else {
  
var msg = `ððÌ£ð§ ð¯ð®ÌÌð ðð¡ð¨Ì£ð§ ðð¨Ì ${body} ð¯ðÌ ð¬ð¨ÌÌ ð­ð¢ðÌÌð§ ðð¨Ì ð­ð¡ðÌÌ ððÌ£ð§ ð§ð¡ðÌ£Ìð§ ð¯ðÌÌ ð¥ðÌ ${tienan}\nðð¡ðÌ£Ìð© "ð¤ðÌð¨" ð§ðÌÌð® ð¦ð®ð¨ÌÌð§ ððÌÌð­ ðð¨ð§ ðð¨Ì\nððÌ ð¥ð¢ðÌð§ ð­ð®Ì£ð ð§ð¡ðÌ£Ìð© "ð¤ðÌð¨" ð­ð«ð¨ð§ð  ððð¬ ð¬ðð® `;

const keobo = (msg, bo) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.keobo[senderID] = {
            spam: 10,
            count: 0,
            bo,
            stt: body,
            author: senderID,
            tienan: tienan,
          win: win,
          lose: losse
        }
    })
keobo(msg, body.trim())
}
}
module.exports.handleEvent = async({ api, event, Currencies, Users }) => {
  const { threadID, senderID, body } = event;
    if(!("keobo" in global.client)) global.client.keobo = {};
    if (!([senderID] in global.client.keobo)) return;
    const { increaseMoney, decreaseMoney } = Currencies;
  if(body == "kÃ©o" || body == "KÃ©o") {
        global.client.keobo[senderID].count++;
     if (global.client.keobo[senderID].count > 1) return;
    setTimeout(async () => {
      let name1 = await Users.getNameUser(senderID)
      let reward = global.client.keobo[senderID].tienan * 2
      let type_bo = global.client.keobo[senderID].stt
       let type_bo_win = global.client.keobo[senderID].win
      let type_bo_lose = global.client.keobo[senderID].lose
      if( type_bo == '1'){
        var choose = ["true", "false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 5){
        let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððÌ£ð§ ð¯ð®ÌÌð ð¤ðÌð¨ ð¡ð®Ì£ð­ ð¯ðÌ ðð¢Ì£ ðð¨Ì ðªð®ðÌ£Ìð­ ð¥ðÌ£ð¢\nððÌÌð­ ${global.client.keobo[senderID].tienan}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ðð¡ð®Ìð ð¦ð®ÌÌð§ð  ${name1} ð¯ð®ÌÌð ð¤ðÌð¨ ð­ð«ð®Ìð§ð \nðð¡ðÌ£Ìð§ ð¯ðÌÌ ${reward}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '2'){
        var choose = ["true", "false", "false", "false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 7){
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððÌ£ð§ ð¯ð®ÌÌð ð¤ðÌð¨ ð¡ð®Ì£ð­ ð¯ðÌ ðð¢Ì£ ðð¨Ì ðªð®ðÌ£Ìð­ ð¥ðÌ£ð¢\nððÌÌð­ ${global.client.keobo[senderID].tienan}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ðð¡ð®Ìð ð¦ð®ÌÌð§ð  ${name1} ð¯ð®ÌÌð ð¤ðÌð¨ ð­ð«ð®Ìð§ð \nðð¡ðÌ£Ìð§ ð¯ðÌÌ ${reward}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } 
      else if( type_bo == '3'){
        var choose = ["true", "false", "false", "false","false","true","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 8){
let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððÌ£ð§ ð¯ð®ÌÌð ð¤ðÌð¨ ð¡ð®Ì£ð­ ð¯ðÌ ðð¢Ì£ ðð¨Ì ðªð®ðÌ£Ìð­ ð¥ðÌ£ð¢\nððÌÌð­ ${global.client.keobo[senderID].tienan}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ðð¡ð®Ìð ð¦ð®ÌÌð§ð  ${name1} ð¯ð®ÌÌð ð¤ðÌð¨ ð­ð«ð®Ìð§ð \nðð¡ðÌ£Ìð§ ð¯ðÌÌ ${reward}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '4'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððÌ£ð§ ð¯ð®ÌÌð ð¤ðÌð¨ ð¡ð®Ì£ð­ ð¯ðÌ ðð¢Ì£ ðð¨Ì ðªð®ðÌ£Ìð­ ð¥ðÌ£ð¢\nððÌÌð­ ${global.client.keobo[senderID].tienan}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ðð¡ð®Ìð ð¦ð®ÌÌð§ð  ${name1} ð¯ð®ÌÌð ð¤ðÌð¨ ð­ð«ð®Ìð§ð \nðð¡ðÌ£Ìð§ ð¯ðÌÌ ${reward}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '5'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","true","false","fale","fale"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 10){
       let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `${name1} ððÌ£ð§ ð¯ð®ÌÌð ð¤ðÌð¨ ð¡ð®Ì£ð­ ð¯ðÌ ðð¢Ì£ ðð¨Ì ðªð®ðÌ£Ìð­ ð¥ðÌ£ð¢\nððÌÌð­ ${global.client.keobo[senderID].tienan}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `ðð¡ð®Ìð ð¦ð®ÌÌð§ð  ${name1} ð¯ð®ÌÌð ð¤ðÌð¨ ð­ð«ð®Ìð§ð \nðð¡ðÌ£Ìð§ ð¯ðÌÌ ${reward}$ ð®`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
        }}}, 10000);
    }
  }