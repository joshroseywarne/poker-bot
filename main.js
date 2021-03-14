//intiate with like !poker [number of players]
//then once howver many players go !hand or something it pms everyone their hand
//i reckon just start everyone with however much money and then once a round ends everyone has to go !cum or something to keep going

// require the discord.js module
const Discord = require('discord.js');
//const { count } = require('node:console');
const dotenv = require('dotenv').config();
//import Player from "C:/Users/tpraz/GitHub/poker-bot/classes.js"
const Game = require("./classes.js").Game
const Player = require("./classes.js").Player

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message)
	//prevent feedback loops
	if (message.author.bot) return;  
	if (message.content.includes('!poker')){
		let game = new Game();
		console.log('success')
		game.deck = game.createDeck()
		message.channel.send(game.deck[0].Suit);
	}  

});

// let game = new Game();
// game.deck = game.createDeck()
// console.log(game.deck);

//console.log(process.env.TOKEN);
// login to Discord 
client.login(process.env.TOKEN);