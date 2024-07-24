let userInput = document.querySelector('#user-input');
let subBtn = document.querySelector('#norm-inp');
let parentBox = document.querySelector('.box2');
let pGuess = document.querySelector('#sp1');
let rGuess = document.querySelector('#sp2');
let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

let playGame = true;

let num = 1;

let p = document.createElement('p');
let p2 = document.createElement('p');

if (playGame) {
  subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let guess = parseInt(userInput.value);
    valiDate(guess);
  });
}

function valiDate(guess) {
  if (isNaN(guess)) {
    // console.log('Enter a valid guess');
    // p.innerHTML = `<h2> Enter a valid guess </h2>`;
    // parentBox.appendChild(p);
    alert('Enter a valid guess');
  } else if (guess < 1) {
    // console.log('Enter guess between 1 and 100');
    alert('Enter guess between 1 and 100');
  } else if (guess > 100) {
    // console.log('Enter guess between 1 and 100');
    alert('Enter guess between 1 and 100');
  }
  if (num == 11) {
    endGame();
  } else {
    userInput.value = '';
    pGuess.innerHTML += `${guess},`;
    rGuess.innerHTML = `${10 - num}`;
    num++;
  }
  checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === randomNum) {
    console.log('you guessed it right');
    p.innerHTML = `<h2> Yaaay!!! you Guessed it right </h2>`;
    parentBox.appendChild(p);
    endGame();
  }
  if (guess > randomNum) {
    console.log('Number is too high');
    p.innerHTML = `<h2> Number is Too High </h2>`;
    parentBox.appendChild(p);
  }
  if (guess < randomNum) {
    console.log('Number is too low');
    p.innerHTML = `<h2> Number is Too Low </h2>`;
    parentBox.appendChild(p);
  }
}

function endGame() {
  userInput.setAttribute('disabled', '');
  console.log('game has ended');
  p2.innerHTML = `<button> Start Again </button>`;
  parentBox.appendChild(p2);
  playGame = false
  newGame()
}

function newGame(){
  
}


