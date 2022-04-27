`use strict`;
// general use consts
const checkBTN = document.querySelector(`.check`);
const againBTN = document.querySelector(`.again`);
const numberFIELD = document.querySelector(`.number-field`);
const gameState = document.querySelector(`.game-state`);
const gameScore = document.querySelector(`.score`);
const gamehighscore = document.querySelector(`.highscore`);
const randomNumberBox = document.querySelector(`.random-number`);
const body = document.querySelector(`body`);

// random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);
// funtions to clean up code
const gameText = function (gameText) {
  gameState.textContent = gameText;
};
const bodyBG = function (color) {
  body.style.backgroundColor = color;
};
// #####################
let score = 10;
let highscore = 0;
// #####################
checkBTN.addEventListener(`click`, function () {
  const guessNum = Number(numberFIELD.value);
  // if empty
  if (!numberFIELD.value) {
    gameText(`Not a Number!!`);

    // if guess is correct
  } else if (guessNum === randomNumber && score > 1) {
    gameText(`You Win!!`);
    randomNumberBox.textContent = randomNumber;
    numberFIELD.style.pointerEvents = `none`;
    bodyBG(`green`);
    if (score > highscore) {
      highscore = score;
      gamehighscore.textContent = String(score);
    }

    // if guess is incorrect or lost
  } else if (guessNum !== randomNumber) {
    if (score > 1) {
      score--;
      gameScore.textContent = score;
      guessNum > randomNumber ? gameText(`Too High!!`) : gameText(`Too low!!`);
    } else {
      gameText(`YOU LOST!!`);
      randomNumberBox.textContent = randomNumber;
      gameScore.textContent = `0`;
      bodyBG(`red`);
    }
  }
});

againBTN.addEventListener(`click`, function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  gameText(`Start guessing...`);
  numberFIELD.style.pointerEvents = `all`;
  numberFIELD.value = ``;
  gameScore.textContent = 10;
  score = 10;
  randomNumberBox.textContent = `?`;
  bodyBG(`#222`);
});
