class Player {
    constructor(username,money) {
        //gives player a username and sets money
        this.username = username;
        this.money = money;
        this.hand = [];
    }

    createHand(deck) {
        // gives a player a hand
        // decide on how to store
        function randInt(){
            let minimum = 0;
            let maximum = game.deck.length();
            let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            return randomnumber;
        }
        //need to pass a deck object from the Game class to the player class
        this.hand[0] = deck[randInt];
        //remove this card from deck selection pool
        this.hand[1] = deck[randInt];
        //remove this card from deck selection pool

    }

    setMoney(newMoney){
        //changes a players money
        this.money = newMoney;
    }


}

class Game {
    constructor() {
        this.deck = createDeck();
    }

    createDeck(){
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var deck = new Array();

        for(var i = 0; i < suits.length; i++)
        {
            for(var x = 0; x < values.length; x++)
            {
                var card = {Value: values[x], Suit: suits[i]};
                deck.push(card);
            }
        }
    
        return deck;
    }

    handsHelp(){

    }
}
