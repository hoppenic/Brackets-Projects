//variables for game

var randomNumber = Math.floor(Math.random() * 100 + 1);

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");

var guessCount = 1;
guessField.focus();
var resetButton;


function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses";
    }
    guesses.textContent+=userGuess+ " ";
    
    if(userGuess===randomNumber){
        lastResult.textContent="You got it right";
        lastResult.style.backgroundColor="green";
        lowOrHi.textContent=" " ;
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent="game over";
        setGameOver();
    }
    else{
        lastResult.textContent="wrong";
        lastResult.style.backgroundColor="red";
        if(userGuess<randomNumber){
            lowOrHi.textContent="last guess too low"
        }
        else if(userGuess>randomNumber){
            lowOrHi.textContent="last guess was too high"
        }
        
    }
    
    guessCount++;
    guessField.value=" ";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);


function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

