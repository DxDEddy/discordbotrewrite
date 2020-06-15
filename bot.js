

/*
 * 
 * section .data
 * Initialised variables here
 *
*/

const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var date = new Date();

const eddyUserID = "239399070454644736"; 

const creativearray = ['im feeling creative', 'imfeelingcreative','i\'m feeling creative']
const artarray = ['https://i.imgur.com/vYsmowP.png','https://i.imgur.com/ZB19P3m.png','https://i.imgur.com/fLEcTR5.png','https://i.imgur.com/NoqMWbo.png','https://i.imgur.com/4p7HwOB.png','https://i.imgur.com/qrVTSJt.png','https://i.imgur.com/nc2ZneY.png']

const sadArrayPhrases = ['this is so sad', 'this is such a despacito moment','gonna kms', 'fml', 'kill me']
const sadImageArray = ['https://i.imgur.com/x8MoeBV.png','https://i.imgur.com/nwtM8sk.jpg','https://i.imgur.com/0hIvypq.png','https://i.imgur.com/vwrMvur.png','https://i.imgur.com/YI3Qn3n.png','https://i.imgur.com/s9RWcDo.jpg']

const vibearray = ['https://i.imgur.com/ocXJzLe.jpg','https://i.imgur.com/kvI4coL.png','https://i.imgur.com/yUDQysL.png','https://i.imgur.com/ZUwQoHe.jpg','https://i.imgur.com/UNKJmSo.png','https://i.imgur.com/ZmThMQJ.png','https://i.imgur.com/gOYhrJY.png','https://i.imgur.com/Z6rkk26.png','https://i.imgur.com/0FyDb6I.png']

const noncereactionpictures = ['https://i.imgur.com/oLbf1Yn.png','https://i.imgur.com/HxbIpgm.png','https://i.imgur.com/wq11X75.png']

//Liam, Me, Spaghett, Milos, Lain
const deanbarryVideoFeedIDArray = ['380045599724142594','239399070454644736','362256312626708481','477631074458140674','314318021680300032']

//Angela, Eddy, Jack, Liam 
const deanbarryPictureSubscriptionIDArray = ['239414210277277708','239399070454644736','402881756656566292', '380045599724142594']

/*
 * 
 * section .bss
 * Uninitialised variables here
 *
*/

//Will add this later
const deanBarryPictureArray = []



var i;


/*
 * 
 * section .text
 * Main program goes here
 *
*/



/*
 * 
 * Here I am going to place the functions that I will use in my code
 *
*/


function generateRandomNumber (ceilingValue) {
	return Math.floor(Math.random() * ceilingValue)
}

function sendUserAMessage (id, content) {
	var user = client.users.cache.get(id);
	user.send(content)
}

function sendChannelAMessage (id, content) {
	var channel = client.channels.cache.get(id);
	channel.send(content)
}

function sendEddyAMessage (content) {
	var channel = client.channels.cache.get("239399070454644736")
	channel.send(content)
}

/*
 * 
 * The majority of the logic will go here
 *
*/



client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	console.log("Ready")
});

client.on('message', msg => {
//Start of message event code

message = msg.content;
lowerMessage = message.toLowerCase();


if(msg.author.bot) return;

//Bot DM forwarding code -- FINISHED
if(msg.channel.type === "dm") {
	sendUserAMessage(eddyUserID,"I received a message from: "+msg.author.toString()+" they sent:\n "+msg.content)
};


//Deanbarry video feed code -- FINISHED
if (message.substring(0,1) == "!" && msg.author.id == "239399070454644736") {
	for (i = 0; i < deanbarryVideoFeedIDArray.length; i++) {
		sendUserAMessage(deanbarryVideoFeedIDArray[i],"----------------------------------\nYou've recieved a message: \n"+message.substring(1))
	}
}

//Russian Roulette code -- FINISHED
if(message == "russianroulette" || message == "russian roulette") {
	var revolver = generateRandomNumber(9999998)
	msg.reply("10,000,000 deletes #general - you got: "+revolver)
	msg.react("👌");
}

//Cheers Dean code -- FINISHED
if ("cheers dean".includes(message) || "cheersdean".includes(message) || "thanks dean".includes(message) || "thanksdean".includes(message) || "arigatodean".includes(message) || "arigato dean".includes(message)) {
	msg.reply(`
		https://www.patreon.com/deanbarry/posts
		https://www.youtube.com/user/deanbarry1971
		https://twitter.com/deanBarry
		`);
	msg.react('👌');
}

//Wardropdrop picker -- REMOVED

//Welcome - FINISHED
if (message == "welcome") {
	var embedImage = new Discord.MessageEmbed()
		.setTitle('WELCOME TO DXD CLAN')
		.attachFiles("https://i.imgur.com/0SnJEMv.png")
		.setImage("https://i.imgur.com/0SnJEMv.png")
	msg.reply(embedImage)
	msg.react("👌");
}

//I'm feeling creative -- FINISHED
if (creativearray.includes(lowerMessage)) {
	var embedImage = new Discord.MessageEmbed()
		.setTitle("I\'m feeling creative ")
		.attachFiles(artarray[generateRandomNumber(artarray.length)])
		.setImage(artarray[generateRandomNumber(artarray.length)])
	msg.reply(embedImage)
	msg.react("👌");
}

//Funny word detector -- FINISHED
if (lowerMessage.includes("nigge")) {
	msg.reply("HAHA FUNNY WORD");
	msg.react('👌');
}

//Coomer detector -- FINISHED
if (lowerMessage.includes("coom") || lowerMessage.includes(" coom ") || lowerMessage.includes(" coomer ")) {
	var embedImage = new Discord.MessageEmbed()
		.setTitle("COOMER SPOTTED")
		.attachFiles('https://i.imgur.com/IHvRQvG.png')
		.setImage('https://i.imgur.com/IHvRQvG.png')
	msg.reply(embedImage)
	msg.react('👌');
}

//Boomer detector -- FINISHED
if (lowerMessage.includes("boomer")) {
	var embedImage = new Discord.MessageEmbed()
		.setTitle("BOOMER SPOTTED")
		.attachFiles('https://i.imgur.com/mY5RGIX.png')
		.setImage('https://i.imgur.com/mY5RGIX.png')
		msg.reply(embedImage)
	msg.react('👌');
}

//Vibe check -- FINISHED
if (lowerMessage === "vibe check") {
	if (!msg.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return msg.reply('Missing the required `Move Members` permission.');

	var vibeRoll = generateRandomNumber(8)
	var imageRoll = generateRandomNumber(vibearray.length)


	if (vibeRoll == 1) {
		msg.reply("You have passed the vibe check")
		msg.react('👌');
		// ADDITION - happy image?
	}
	else if (vibeRoll > 1 && vibeRoll < 6) {
		var embedImage = new Discord.MessageEmbed()
			.setTitle("YOU HAVE FAILED THE VIBE CHECK - GIVE ME YOUR PENIS LICENSE")
			.attachFiles(vibearray[imageRoll])
			.setImage(vibearray[imageRoll])
		msg.reply(embedImage)
		msg.react('👌');

	}
	else {
		var embedImage = new Discord.MessageEmbed()
			.setTitle("I WILL NOW PERFORM COCK AND BALL TORTURE ON THE EPIC LOSER")
			.attachFiles(vibearray[imageRoll])
			.setImage(vibearray[imageRoll])
		msg.reply(embedImage)
		msg.react('👌');
	}
}

//This is so sad -- FINISHED
if (sadArrayPhrases.includes(lowerMessage)) {
	var sadArrayIndex = generateRandomNumber(sadImageArray.length)
	var embedImage = new Discord.MessageEmbed()
		.setTitle("This is so sad...")
		.attachFiles(sadImageArray[sadArrayIndex])
		//.setImage(sadImageArray[sadArrayIndex]) - This duplicates Kaneki image for some reason?
	msg.reply(embedImage)
	msg.react('👌');
}

//Nonce detector -- FINISHED
if (lowerMessage.includes("nonce")) {
	var nonceIndex = generateRandomNumber(noncereactionpictures.length)
	var embedImage = new Discord.MessageEmbed()
		.setTitle("Please take a seat right over there sir...")
		.attachFiles(noncereactionpictures[nonceIndex])
		//.setImage(noncereactionpictures[nonceIndex])
	msg.reply(embedImage)
	msg.react('👌');
}

//End of message event code
});

//DEBUG INFO

client.on("channelCreate", function(channel){
	var currenttime = date.toTimeString();
	if (channel.name == "undefined") {
		return;
	} else{
	sendUserAMessage("239399070454644736","	- A " + channel.type + " channel called: \"" + channel.name + "\" was created. The time was: "+ currenttime + "\n-----------------------\n")
}});

client.on("channelDelete", function(channel){
	var currenttime = date.toTimeString();
	if (channel.name == "undefined") {
		return;
	} else{
	sendUserAMessage("239399070454644736","	- A " + channel.type + " channel called: \"" + channel.name + "\" was deleted. The time was: "+ currenttime + "\n-----------------------\n")
}});

client.on("guildMemberRemove", function(member){
	sendUserAMessage("239399070454644736","Someone left or was kicked. " + member.user.username + " - the time was: " + currenttime)
});

client.on("guildMemberUpdate", function(oldMember, newMember){
	sendUserAMessage("239399070454644736","Someone changed something about their profile...\n Their old username was/is: " + oldMember.user.username + " / " + newMember.user.username + ". Their nickname was/is: " + oldMember.nickname + " / " + newMember.nickname + ". Their presence was/is: " + oldMember.presence + " / " + newMember.presence + ". The time was: " + currenttime)
});

client.on("messageDelete",  function(message) {
	sendUserAMessage("239399070454644736","A message was deleted... It's content was: \n\"" + message.content + "\"\nIt was sent at: " + message.createdAt + ". It was sent by User: " + message.author.username + " In channel: " + message.channel.name)
});

client.login(config.token);