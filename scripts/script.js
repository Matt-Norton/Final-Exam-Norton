
  
  //assign image variables
        var pip1 = new Image()
        pip1.src = "images/dice1.png"
        var pip2 = new Image()
        pip2.src = "images/dice2.png"
        var pip3 = new Image()
        pip3.src = "images/dice3.png"
        var pip4 = new Image()
        pip4.src = "images/dice4.png"
        var pip5 = new Image()
        pip5.src = "images/dice5.png"
        var pip6 = new Image()
        pip6.src = "images/dice6.png"
//function to roll the dice, gets a random number from 1 to 6 and display an image along with it
function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    //random number 1 to 6
    var d1 = Math.round(Math.random() * 6) + 1
    //gets number and adds to the end of pip to find correct image
    document.images["rolldice1"].src=eval("pip"+d1+".src");
    var d2 = Math.round(Math.random() * 6) + 1
    document.images["rolldice2"].src=eval("pip"+d2+".src");
    die1.innerHTML = d1;
    die2.innerHTML = d2;
}