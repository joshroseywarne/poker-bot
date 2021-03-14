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

let prefix = '!';

client.on('message', message => {
	//prevent feedback loops
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	if (message.content.startsWith(`${prefix}poker`)){
		const args = message.content.slice(prefix.length).trim().split(' ');  
		const command = args.shift().toLowerCase();

		let no_players = parseInt(args[0]);
		let money = parseInt(args[1]) 

		let game = new Game();
		game.deck = game.createDeck();

		let players = [];
		while (players.length <= no_players){
			client.on('message', message => {
				console.log(message.content)
				if (message.content.startsWith('join')){
					if (!players.includes(message.author.username)){
						let newPlayer = new Player(message.author.username,money);
						players.push(newPlayer);
					}
				}
			});
		}
		console.log(players)
	}  
	if (message.content.startsWith(`${prefix}hands`)){
		message.channel.send("Here are the poker hands", {files: ["poker-hand-rankings-mobile.png"]});
	}
	
});

// let game = new Game();
// game.deck = game.createDeck()
// console.log(game.deck);

//console.log(process.env.TOKEN);
// login to Discord 
client.login(process.env.TOKEN);