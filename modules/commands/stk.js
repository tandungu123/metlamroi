module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Donate cho admin",
  commandCategory: "Admin",
  usages: "stk",
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
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/ij2RQ0j.gif",
  ];
	  var callback = () => api.sendMessage({body:`=== đ¸ [ đđđđđđ ] đ¸ ===\n
đđ đđđ đđđđđđ đđ\nđđ đŽđ˛đĖĖđ§ đđĄđĖŖđĻ đđĸđ§đĄ đđŽđĖĖđ§\nđđđ: đđđđđđđđđđđđ\n\nđđĸĖđ§đĄ đđĄđ¨ đ­đĄđŽđĖ đđ¨đ­ đ¯đ¨ĖĖđĸ đ đĸđĖ đÄ đ§đĄđŽĖđ§đ  đđĖŖđ§ đ§đĖđ¨ đđ¨Ė đĨđ¨Ėđ§đ  đ­đ¨ĖĖđ­ đ­đĄđĸĖ đ­đĄđĸĖđ§đĄ đ­đĄđ¨đĖđ§đ  đđđ§đ¤ đĸĖđ­ đĻđŽđ đĻđĸĖ đ đ¨Ėđĸ, đĻđĖđĸ đĸđŽđŽđŽ â¤ī¸`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };