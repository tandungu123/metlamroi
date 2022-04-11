module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "info admin nè",
  commandCategory: "Admin",
  usages: "ad",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/tmv33JS.jpg",
"https://i.imgur.com/zP3JK9m.jpg",
"https://i.imgur.com/kUrgX0B.jpg",
"https://i.imgur.com/r21Eivn.jpg",
"https://i.imgur.com/OSLSsP0.jpg",
"https://i.imgur.com/1iQU40X.jpg",
"https://i.imgur.com/s5lrZOl.jpg",
"https://i.imgur.com/9ANPy00.jpg",
"https://i.imgur.com/Grmt2zM.jpg",
"https://i.imgur.com/VJi1ufD.jpg",
"https://i.imgur.com/eKJb4C9.jpg",
"https://i.imgur.com/0oLMzJA.jpg",
"https://i.imgur.com/KMPeebi.jpg",
  ];
	  var callback = () => api.sendMessage({body:`ㅤㅤ🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
 `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };