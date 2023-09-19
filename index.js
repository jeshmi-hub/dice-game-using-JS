var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomeDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource =  "images/" + randomeDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomeNumber2 = Math.floor(Math.random()*6 +1);
var randomImageSource2 = "images/dice" + randomeNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
if(randomNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomeNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}