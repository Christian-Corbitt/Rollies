var randomNumber1 = Math.floor(Math.random() * 6) ;

var randomNumber2 = Math.floor(Math.random() * 6) ;

var diceList = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var player1Die = diceList[randomNumber1]

var player2Die = diceList[randomNumber2]

document.querySelector(".img1").src = player1Die;

document.querySelector(".img2").src = player2Die;

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "It's a draw"
}