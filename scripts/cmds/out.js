const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('আমি উল্লাস বট আপনাদের গ্রুপ থেকে leave নিচ্ছি 😅,আমি artificial intelligent 🤓 আমাকে আপনাদের বিনোদন দেওয়ার জন্য বানানো হয়েছে🌺 যদি আমার কথায় কখনো কেউ মনে কষ্ট পেয়ে থাকেন, তাহলে ক্ষমাশুলব দৃষ্টিতে দেখবেন 🐸 আমি চলে গেলাম সবাই নিজের খেয়াল রাখবেন, আল্লাহাফেজ , আসসালামু আলাইকুম 🌺', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};










--------------


const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('bot leave the group', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
