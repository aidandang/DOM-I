// Variables
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");
const digits = document.querySelector(".digits");

let iTens = 0;
let iHundreds = 0;
let iSecondOnes = 0;

var startCount = null;

// display the clock at 00:000
resetDisplay('00', '0', '0', '0');

// Start counting when clicked
let startButton = document.getElementById("btn-start");
startButton.addEventListener('click', (event) => {
  if (iTens != 11) {
    startCount = setInterval(countToTen, 10);
    startButton.disabled = true;
  }
});

// Reset clock back to 00:000 when clicked
let resetButton = document.getElementById("btn-reset");
resetButton.addEventListener('click', (event) => {
  iTens = 0;
  iHundreds = 0;
  iSecondOnes = 0;
  resetDisplay('00', '0', '0', '0');
  digits.style.color = "black";
  startButton.disabled = false;
});

// Function called to count and display realtime clock
function countToTen() {
  iTens++;
  if (iTens < 10) {
    msTens.textContent = `${iTens}0`
  } 
  else if (iTens == 10) {
    iTens = 0;
    iHundreds++;
    if (iHundreds < 10) {
      msHundreds.textContent = `${iHundreds}`;
    } 
    else {
      iHundreds = 0;
      iSecondOnes++;
      if (iSecondOnes < 10) {
        secondOnes.textContent = `${iSecondOnes}`;
      }
      else {
        digits.style.color = "red";
        resetDisplay('00', '0', '0', '1');
        iTens = 11;
        clearInterval(startCount);
      }
    }
  }
}

// Function to reset the clock to values passed
function resetDisplay(strTens, strHundres, strSecondOnes, strSecondTens) {
  msTens.textContent = strTens;
  msHundreds.textContent = strHundres;
  secondOnes.textContent = strSecondOnes;
  secondTens.textContent = strSecondTens;
}