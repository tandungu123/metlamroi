module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thá»i gian",
    commandCategory: "Há» thá»ng",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var color = ["\x1b[33m", "\x1b[34m", "\x1b[35m", '\x1b[36m','\x1b[31m','\x1b[1m'];
  var more = color[Math.floor(Math.random() * color.length)];
  var idad = global.config.ADMINBOT;    
  console.log('\x1b[36m'+ 'ð TIME ð: '+ more + timeNow + '\x1b[31m' + ' â£ ' + '\x1b[0m' +  thu + more + '\n ââ¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬Û©â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â')
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `23:59:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1) && seconds < 5 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`[ ððð ðððð ] - ðð¿ð® ðð¿ð® ð, bð®Ìð ð´ð¶ð¼ÌÌ ð¹ð®Ì ð: ${timeNow}\nð©ð¼ÌÌ£ ðð²Ì ðð¶ð²ÌÌð» ðµð®Ìð»ðµ ð¿ð²ðð²ð ðµð²Ì£Ì ððµð¼ÌÌð»ð´ ð¹ð®Ì£ð¶ ð»ðµð²ð®ð® ð°ðµð¼ÌÌð»ð´ ðð²Ìð ð°ðµð¼ÌÌ ðð¶Ì ð»ðµð²Ì â¢ï¸`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}