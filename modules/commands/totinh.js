module.exports.config = {
    name: "totinh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MewMew mod by VanHung, DinhPhuc, Vietdz, VĐT&NTH, Thỏadz",
    description: "",
    commandCategory: "Tình Yêu",
    usages: "[tag]",
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "totinh.png")) request("https://i.imgur.com/s0iSgrX.jpg").pipe(fs.createWriteStream(dirMaterial + "totinh.png"));
}

async function makeImage({ one, two }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");
    let totinh_img = await jimp.read(__root + "/totinh.png");
    let pathImg = __root + `/totinh_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
   totinh_img.resize(500, 500).composite(circleOne.resize(65, 65), 142, 86).composite(circleTwo.resize(65, 65), 293, 119);
    
    let raw = await totinh_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}


module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions)[0]
    let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = senderID, two = mention;
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝗧𝗼̛́ 𝘁𝗵𝗶́𝗰𝗵 𝗰𝗮̣̂𝘂 ❤ " + tag + '\n𝗟𝗮̀𝗺 𝗻𝘆 𝘁𝗼̛́ 𝗻𝗵𝗮 👉🏻👈🏻',
            mentions: [{
          tag: tag,
          id: mention
        }],
     attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
