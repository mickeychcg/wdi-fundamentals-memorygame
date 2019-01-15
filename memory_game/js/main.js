var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

if (cardsInPlay.length === 2) {
  alert("You found a match!");
} else cardsInPlay[0] === cardsInPlay;
alert("Sorry, try again");

var flipCard = function(cardId) {
  /*cards[cardId.rank];*/

  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + " " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

flipCard(0);
flipCard(2);

//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped" + " " + cardOne);
//console.log("User flipped" + " " + cardTwo);
