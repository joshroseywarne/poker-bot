//intiate with like !poker [number of players]
//then once howver many players go !hand or something it pms everyone their hand
//i reckon just start everyone with however much money and then once a round ends everyone has to go !cum or something to keep going

// require the discord.js module
const Discord = require('discord.js');
const dotenv = require('dotenv');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

//prevent feedback loops
if (message.author.bot) return;    

message.channel.send("yo");







});

console.log(process.env.TOKEN);
// login to Discord with your app's token, run it with the 
client.login(process.env.TOKEN);