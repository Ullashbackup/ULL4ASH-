module.exports = {
 config: {
	 name: "miss you",
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
 if (event.body && event.body.toLowerCase() === "miss you") {
 return message.reply({
 body: "     「°-۵༎-ভাগ্যিস তুমি জন্মেছিলে!!💚🌸\n\n━༊༎ নয়তো  আমাকে ༎ এতো যত্ন করে ༎ দুঃখ দেওয়ায় !\n\n_________মানুষ ༎  আমি কোথায় ༎  পেতাম!!! 💔 ༎۵༎࿐ 🍁🌼\n\n❥━༊༎ কিন্তুু ༎ পাওয়ার ༎ ভাগ্যটা ༎ সবার ༎ নেই ༎۵࿐ 🌸🍁\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n\n\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\n____ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/yOUl42H.mp4")
 });
 }
 }
}
