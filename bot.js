

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

//Angela, Eddy, Jack, Liam, Lain
const deanbarryPictureSubscriptionIDArray = ['239414210277277708','239399070454644736','402881756656566292', '380045599724142594','508070749748068367']
//Lain, Me
const tempDeanbarryPictureSubscriptionIDArray = ['239399070454644736']
const noImportantValePictureSubscriptionIDArray = ['508070749748068367']

//Array of profile pics for the bot
const deanBarryPictureArray = ['https://i.imgur.com/ZGG1coY.jpg','https://i.imgur.com/GkKHZ6g.jpg','https://i.imgur.com/7eaxzyF.jpg','https://i.imgur.com/x9YI637.jpg','https://i.imgur.com/U3ndiif.jpg','https://i.imgur.com/lojVszj.jpg','https://i.imgur.com/YXT77gT.jpg','https://i.imgur.com/41YgnKX.jpg','https://i.imgur.com/etqbkJF.jpg','https://i.imgur.com/CzZYE8V.jpg','https://i.imgur.com/w7p2evs.jpg','https://i.imgur.com/yN0lGPm.jpg','https://i.imgur.com/itoJLCz.jpg','https://i.imgur.com/2HnqLR0.jpg','https://i.imgur.com/HvzOwaX.jpg','https://i.imgur.com/iQhr0hh.jpg','https://i.imgur.com/fOyleut.jpg','https://i.imgur.com/r8Opgti.jpg','https://i.imgur.com/s29yllp.png','https://i.imgur.com/nei8JNb.jpg','https://i.imgur.com/Z2LIEbx.jpg','https://i.imgur.com/XWWc1Fk.jpg','https://i.imgur.com/nGICHOP.jpg','https://i.imgur.com/9uPaJHW.jpg','https://i.imgur.com/Ec690T2.jpg','https://i.imgur.com/F3koQ6V.jpg','https://i.imgur.com/rWzWmev.jpg','https://i.imgur.com/kYW2VSR.jpg','https://i.imgur.com/1LWEy2Y.jpg','https://i.imgur.com/itm7huY.jpg','https://i.imgur.com/y91eeym.jpg','https://i.imgur.com/8s9ffkN.jpg','https://i.imgur.com/O5OWBlk.jpg','https://i.imgur.com/g3aK5oS.jpg','https://i.imgur.com/nABAcmj.jpg','https://i.imgur.com/OOBBruh.jpg','https://i.imgur.com/KGuITtN.jpg','https://i.imgur.com/klO5b3u.jpg','https://i.imgur.com/5iYVmxG.jpg','https://i.imgur.com/TvuDmCS.jpg','https://i.imgur.com/X6ay2pk.jpg','https://i.imgur.com/NfReQRR.jpg','https://i.imgur.com/uvKOLUW.png','https://i.imgur.com/NHs44Bi.png','https://i.imgur.com/kLkgrJZ.png','https://i.imgur.com/QIyXPnu.png','https://i.imgur.com/rhsTuiA.png','https://i.imgur.com/UzkInUS.png','https://i.imgur.com/UzkInUS.png','https://i.imgur.com/x3Z4RJb.png','https://i.imgur.com/etzJWwt.png','https://i.imgur.com/Kixu5xo.png','https://i.imgur.com/frG7xmQ.png','https://i.imgur.com/9EPabKn.png','https://i.imgur.com/XUZHw5B.png','https://i.imgur.com/X2BTB6E.png']
const messagearray = ["felt cute - might delete later","Look at the animation","jojo day!","The world is truly going though the ringer right now.","Stay well and wash your damn hands.","Enjoy..."]

const statusTypeArray = ["WATCHING","PLAYING","PLAYING","PLAYING","PLAYING","WATCHING","WATCHING","WATCHING","WATCHING","WATCHING","WATCHING","WATCHING"]
const statusValueArray = ["Hentai","in the road","with myself","Animal Crossing: New Horizons","Dark Souls: Remastered","Promised Neverland","Steins;Gate","JoJo: DIU","Astra: Lost in Space","RvB","My Hero Academia","Berserk"]

const cheersdean = ['cheers dean','cheersdean','thanks dean','thanksdean','arigato dean','arigatodean']

/*
 * 
 * section .bss
 * Uninitialised variables here
 *
*/

//Will add this later

var quote;
var image;

var roll;

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

function deanSetProfile () {

	client.user.setAvatar(deanBarryPictureArray[generateRandomNumber(deanBarryPictureArray.length)])

	roll = generateRandomNumber(statusTypeArray.length)

	client.user.setActivity(statusValueArray[roll], {type: statusTypeArray[roll]});

}

function sendOutDBPicture (pictureArray,messageArray,idArray) {
	var image = pictureArray[generateRandomNumber(pictureArray.length)]
	var quote = messageArray[generateRandomNumber(messageArray.length)]
	for (i = 0; i < idArray.length; i++) {

	var embedImage = new Discord.MessageEmbed()
		.setTitle(quote)
		.attachFiles(image)
		//.setImage(image)
	sendUserAMessage(idArray[i],embedImage)
	}
}

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

/*
 * 
 * The majority of the logic will go here
 *
*/



client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	
	//const bot = new Discord.Client({disableEveryone: False});

	console.log("Ready")
	
	sendUserAMessage(eddyUserID,"Logged is as: "+client.user.tag)

	//sendOutDBPicture (deanBarryPictureArray,messagearray,tempDeanbarryPictureSubscriptionIDArray)
	setInterval(sendOutDBPicture, 52400000, deanBarryPictureArray,messagearray,deanbarryPictureSubscriptionIDArray)

	//setInterval(sendUserAMessage,10000,eddyUserID,"test")

	deanSetProfile()
	setInterval(deanSetProfile, 1000000)

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

//Ping - FINISHED
if (message == "ping") {
	msg.reply("pong")
	msg.react("👌");
}

//Deanbarry video feed code -- FINISHED
if (message.substring(0,1) == "!" && msg.author.id == "239399070454644736") {
	for (i = 0; i < deanbarryVideoFeedIDArray.length; i++) {
		sendUserAMessage(deanbarryVideoFeedIDArray[i],"----------------------------------\nYou've received a message: \n"+message.substring(1))
	}
}

//Russian Roulette code -- FINISHED
if(message == "russianroulette" || message == "russian roulette") {
	var revolver = generateRandomNumber(9999998)
	msg.reply("10,000,000 deletes #general - you got: "+revolver)
	msg.react("👌");
}

//Cheers Dean code -- FINISHED
if (cheersdean.includes(lowerMessage)) {
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
		//.setImage("https://i.imgur.com/0SnJEMv.png")
	msg.reply(embedImage)
	msg.react("👌");
}

//I'm feeling creative -- FINISHED
if (creativearray.includes(lowerMessage)) {
	var embedImage = new Discord.MessageEmbed()
		.setTitle("I\'m feeling creative ")
		.attachFiles(artarray[generateRandomNumber(artarray.length)])
		//.setImage(artarray[generateRandomNumber(artarray.length)])
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
		//.setImage('https://i.imgur.com/IHvRQvG.png')
	msg.reply(embedImage)
	msg.react('👌');
}

//Boomer detector -- FINISHED
if (lowerMessage.includes("boomer")) {
	var embedImage = new Discord.MessageEmbed()
		.setTitle("BOOMER SPOTTED")
		.attachFiles('https://i.imgur.com/mY5RGIX.png')
		//.setImage('https://i.imgur.com/mY5RGIX.png')
		msg.reply(embedImage)
	msg.react('👌');
}

//Vibe check -- FINISHED
if (lowerMessage === "vibe check") {
	if (msg.channel.type === "dm") return msg.reply("You cannot do that in DM");
	if (!msg.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return msg.reply('Missing the required `Move Members` permission.');

	var vibeRoll = generateRandomNumber(8)
	var imageRoll = generateRandomNumber(vibearray.length)

	var member = msg.member;


	if (vibeRoll == 1) {
		msg.reply("You have passed the vibe check")
		msg.react('👌');
		// ADDITION - happy image?
	}
	else if (vibeRoll > 1 && vibeRoll < 6) {
		member.voice.kick()
		var embedImage = new Discord.MessageEmbed()
			.setTitle("YOU HAVE FAILED THE VIBE CHECK - GIVE ME YOUR PENIS LICENSE")
			.attachFiles(vibearray[imageRoll])
			//.setImage(vibearray[imageRoll])
		msg.reply(embedImage)
		msg.react('👌');

	}
	else {
		member.voice.kick()
		var embedImage = new Discord.MessageEmbed()
			.setTitle("I WILL NOW PERFORM COCK AND BALL TORTURE ON THE EPIC LOSER")
			.attachFiles(vibearray[imageRoll])
			//.setImage(vibearray[imageRoll])
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
		//.setImage(sadImageArray[sadArrayIndex])// - This duplicates Kaneki image for some reason?
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
	if (channel.name == "undefined" || channel.name == undefined) {
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
	var currenttime = date.toTimeString();
	sendUserAMessage("239399070454644736","Someone left or was kicked. " + member.user.username + " - the time was: " + currenttime)
	sendChannelAMessage("494651540561330217","Someone left or was kicked, their username was: " + member.user.username + " - the time was: " + currenttime)
});

/*
client.on("guildMemberUpdate", function(oldMember, newMember){
	var currenttime = date.toTimeString();
	if(oldMember.user.username != "DeanBot") {
	sendUserAMessage("239399070454644736","Someone changed something about their profile...\n Their old username was/is: " + oldMember.user.username + " / " + newMember.user.username + ". Their nickname was/is: " + oldMember.nickname + " / " + newMember.nickname + ". Their presence was/is: " + oldMember.presence.status + " / " + newMember.presence.status + ". The time was: " + currenttime)
	
	var embedImage = new Discord.MessageEmbed()
		.setTitle("Their profile picture was:")
		.attachFiles(oldMember.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
		//.setImage(oldMember.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	sendUserAMessage("239399070454644736",embedImage)

	var embedImage = new Discord.MessageEmbed()
		.setTitle("Their profile picture is:")
		.attachFiles(newMember.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
		//.setImage(newMember.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	sendUserAMessage("239399070454644736",embedImage)

}});
*/

client.on("messageDelete",  function(message) {
	var currenttime = date.toTimeString();
	sendUserAMessage("239399070454644736","A message was deleted... It's content was: \n\"" + message.content + "\"\nIt was sent at: " + message.createdAt + ". It was sent by User: " + message.author.username + " In channel: " + message.channel.name)
});


client.login(config.token);