let firsCard = 6;
let secondCard = 6;
var sumCard = firsCard + secondCard; 
let cards = [firsCard, secondCard];
let hasBlackJack = false
let isalive = true

let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
    if (sumCard <= 20) {
        message = "Do you want to draw a new card? "
    }else if (sumCard === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
     
    }else {
        message = "You're out of the game!"
        isalive = false 
    }
    sumEl.textContent = "Sum: " + sumCard
    cardEl.textContent = "card: " + cards[0] + "," + cards[1];
    messageEl.textContent = message
}

function newCard(){
    let newCard = 5;
    let sumCard = firsCard + secondCard + newCard;

    if (sumCard <= 20) {
        message = "Do you want to draw a new card? "
    }else if (sumCard === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
     
    }else {
        message = "You're out of the game!"
        isalive = false 
    }
    sumEl.textContent = "Sum: " + sumCard
    cardEl.textContent = "card: " + firsCard + "," + secondCard + "," + newCard;
    messageEl.textContent = message
}



