const discord = require('discord.js');
const {Client, Attachment} = require ("discord.js");
const {prefix, token} = require("./config.json")

const ytdl = require('ytdl-core')

const client = new discord.Client();
client.login(token);


var servers = {};

client.once('ready', () => {
    console.log('Ready!');
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});


client.on('message', async message => {

    if (message.author.bot) return;

    let args = message.content.substring(prefix.length).split(" ")

    switch (args[0]) {
        case "play":

            function play(connection, message){
                var server = servers[message.guild.id];

                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    } else {
                        connection.disconnect();
                    }
                });

            }

            if(!args[1]) {
                message.channel.send("Provide a link");
                return;
            }

            if(!message.member.voice.channel){
                message.channel.send("You must be in a voice channel")
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1])

            if(!message.guild.voice.connection) message.member.voice.channel.join().then(function(connection){
                play(connection, message);

            })

    }
  
})