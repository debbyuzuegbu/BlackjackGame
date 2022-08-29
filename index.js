let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sumCard = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sumCard
    if (sumCard <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sumCard === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sumCard += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}




