module.exports = {
 config: {
	 name: "❤️‍🩹",
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
 if (event.body && event.body.toLowerCase() === "❤️‍🩹") {
 return message.reply({
 body: "     「ইয়া রব\n\nআমাকে এমন হৃদয় দান করুন\n যে হৃদয় কখনোই আপনার ফয়সালায় অসন্তুষ্ট হবে না\n\nযে হৃদয়ে কখনোই  শিরক,কুফর, অহংকার, হিংসা বাসা বাধঁতে পারবে না🤲❤️‍🩹\n\nআমাকে এমন জ্ঞান দান করুন,\n যা দিয়ে কখনো মিথ্যা, হারাম কথা, গীবত, চোগলখোরি করবে না♡\n\nএমন চোখ-কান দান করুন, যা কখনোই হারাম কিছু দেখবে না,শুনবে না।\n\n\nএমন হাত দান করুন, যা দিয়ে কখনো অন্যের হক্ব নষ্ট হবে না। কখনোই হারাম কোনো কাজ করবে না।🌼🥰\n\n\nইয়া হাইয়্যু-ইয়া কাইয়্যুম, ইয়া জাল জালালি ওয়াল ইক্বরাম..!আমাকে সম্পূর্ণভাবে পরিশুদ্ধ করে দিন।এই জবান যেনো কোরআন এবং আপনার জ্বিকিরে ব্যস্ত থাকে।💕\n\nআমাদের হৃদয় সমূহ আপনার ভালোবাসায় পূর্ণ করে দিন,,\n\n\n\nআমিন♡🌼♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/SWsW2iv.mp4")
 });
 }
 }
}
