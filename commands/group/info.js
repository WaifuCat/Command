const config = {
  "name": "info",
  "aliases": [],
  "description": "Info admin chạy bot",
  "usage": "",
  "cooldown": 3,
  "permissions": [0, 1, 2],
  "credits": "WaifuCat",
  "extra": {}
};

const data = `
🐳𝐈𝐧𝐟𝐨 𝐀𝐝𝐦𝐢𝐧🐳
👀 𝐓𝐞̂𝐧: 𝐖𝐚𝐢𝐟𝐮𝐂𝐚𝐭
💮 𝐁𝐢𝐞̣̂𝐭 𝐃𝐚𝐧𝐡: 𝐍𝐨𝐧𝐞 
👤 𝐆𝐢𝐨̛́𝐢 𝐭𝐢́𝐧𝐡: 𝐂𝐡𝐮̛𝐚 𝐫𝐨̃
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 𝐯𝐚̀ 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠: 𝟏𝐦𝟔𝟒 - 𝟒𝟏𝐤𝐠
💘 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: 𝐍𝐨𝐧𝐞
🌎 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝐂𝐚̂̀𝐧 𝐭𝐡𝐨̛
👫 𝐆𝐮: 𝐍𝐨𝐧𝐞
🌸 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝐍𝐡𝐚̂𝐲,𝐪𝐮𝐚̣̂𝐲 𝐧𝐡𝐮̛𝐧𝐠 𝐦𝐚̀ 𝐳𝐮𝐢 𝐭𝐢́𝐧𝐡 :>>
🌀 𝐒𝐨̛̉ 𝐭𝐡𝐢́𝐜𝐡: 𝐓𝐡𝐢́𝐜𝐡 𝐩𝐡𝐚́, 𝐚̆𝐧 𝐮𝐨̂́𝐧𝐠
☎ 𝑺𝑫𝑻: 𝐍𝐨𝐧𝐞
🌐 𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌: https://www.facebook.com/waifucat.supporters
✉️ 𝑬𝒎𝒂𝒊𝒍: 𝐍𝐨𝐧𝐞
🐣 𝖂𝖆𝖎𝖋𝖚𝕮𝖆𝖙 🐣
`;

export function onCall({ message }){
 message.reply(data);
}
 export default {
    config,
    onCall
  }