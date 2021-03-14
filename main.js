//intiate with like !poker [number of players]
//then once howver many players go !hand or something it pms everyone their hand
//i reckon just start everyone with however much money and then once a round ends everyone has to go !cum or something to keep going

// require the discord.js module
const Discord = require('discord.js');
const dotenv = require('dotenv').config();
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
		//getting args
		const args = message.content.slice(prefix.length).trim().split(' ');  
		const command = args.shift().toLowerCase();

		//converting to relevant data type
		let no_players = parseInt(args[0]);
		let money = parseInt(args[1]) 

		//initialising game object and card deck
		let game = new Game();
		game.deck = game.createDeck();

		//list to contain players (will be objects from the Player class)
		let players = [];
		//list to contain player usernames, will be used to identify if someone has already joined
		let player_users = [];

		// loop until we have enough players, as specified by the first input arguemnt
		while (players.length <= no_players){
			//now wait for a join message
			client.on('message', message => {
				//if message == join, and the player has not already joined
				if (message.content.startsWith('join')){
					if (!players.includes(message.author.username)){
						let newPlayer = new Player(message.author.username,money);
						players.push(newPlayer);
						player_users.push(message.author.username);
					}
				}
			});
		}
		//debugging purposes
		console.log(players)
	}  
	if (message.content.startsWith(`${prefix}hands`)){
		message.channel.send("Here are the poker hands", {files: ["poker-hand-rankings-mobile.png"]});
	}
	
});

client.login(process.env.TOKEN);