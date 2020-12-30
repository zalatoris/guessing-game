'use strict';

let number = Math.trunc(Math.random() * 1000) + 1;
let lives = 20;
let highscore = 0;

const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    messageDisplay('No number! 🚫');
  } else if (guess === number) {
    messageDisplay('Money! 🏆');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'YellowGreen';
    document.querySelector('.number').style.width = '30rem';
    if (lives > highscore) {
      highscore = lives;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (lives > 1) {
      messageDisplay(guess > number ? 'Too high 📈' : 'Too low 📉');
      lives--;
      document.querySelector('.score').textContent = lives;
    } else {
      document.querySelector('h1').textContent = 'You have lost the game 💥!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'indianRed';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Number(Math.trunc(Math.random() * 1000) + 1);
  lives = 20;
  messageDisplay('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '10';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
