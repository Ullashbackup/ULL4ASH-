module.exports = {
 config: {
	 name: "assalamualaikum",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "assalamualaikum") {
 return message.reply({
 body: "     「𝘄𝗮𝗹𝗮𝗶𝗸𝘂𝗺 𝗮𝘀𝘀𝗹𝗮𝗺 ❤‍🩹\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆-----ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/cET2Skz.mp4")
 });
 }
 }
}
