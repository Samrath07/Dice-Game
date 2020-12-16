var randomDice = Math.floor(Math.random() * 6 + 1);
var diceImage = "dice"+ randomDice +".png";

var randomDiceImage = 'images/'+diceImage;
var image1 = document.querySelectorAll('img')[0];

var randomDice2 = Math.floor(Math.random() * 6 + 1);

var diceImage2 = 'images/dice'+randomDice2+".png";
var image2 = document.querySelectorAll('img')[1];

image1.setAttribute("src",randomDiceImage);
image2.setAttribute("src",diceImage2);

if(randomDice > randomDice2){

    document.querySelector('h1').innerHTML = " 🚩 Player 1 Wins";
}
else if(randomDice < randomDice2){
    document.querySelector('h1').innerHTML = " 🚩 Player 2 Wins";

}
else{

    document.querySelector('h1').innerHTML="🚩Draw🚩";
}