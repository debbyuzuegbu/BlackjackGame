let cards = [];
let sumCard = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name: "Per",
    chips: 145

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if ((randomCard = 1)) {
    return 11;
  } else if (randomCard == 12 || randomCard == 13) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sumCard = firstCard + secondCard;
  hasBlackJack = true;
  isAlive = true;

  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sumCard;
  if (sumCard <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sumCard === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sumCard += card;
    // Push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}