'use strict';

function topTen() {
  let message;
  let coinflip = Math.floor(Math.random() * 10) + 1;
  switch (coinflip) {
    case 1:
      message = ' Bunnies';
      break;
    case 2:
      message = ' Hyenas';
      break;
    case 3:
      message = ' Mice';
      break;
    case 4:
      message = ' Snow Leopards';
      break;
    case 5:
      message = ' Red Pandas';
      break;
    case 6:
      message = ' Koi';
      break;
    case 7:
      message = ' Sphinxes';
      break;
    case 8:
      message = ' Armadillos';
      break;
    case 9:
      message = ' Slugs';
      break;
    case 10:
      message = ' Dragons';
      break;
    default:
      console.log('What?');
  }
  return (message);
}

let score = 0;
let playerName = prompt('What is your name?');
console.log(playerName);
alert(
  'Hello, ' +
  playerName +
  '. Please answer the following questions simply with a yes or a no.'
);
// Question 1 -
function q1() {
  let a1 = prompt('Are my pronouns he/him?').toLowerCase();
  if (a1 === 'no') {
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a1 === 'yes') {
    alert('Incorrect!');
  } else {
    alert('That is not an answer.');
  }
}
q1();
// Question 2 -
function q2() {
  let a2 = prompt('Have I had more than one job?').toLowerCase();
  if (a2 === 'yes') {
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a2 === 'no') {
    alert('Incorrect!');
  } else {
    alert('That is not an answer.');
  }
}
q2();
// Question 3 -
function q3() {
  let a3 = prompt('Do I drink coffee?').toLowerCase();
  if (a3 === 'yes') {
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a3 === 'no') {
    alert('Incorrect!');
  } else {
    alert('That is not an answer.');
  }
}
q3();
// Question 4 -
function q4() {
  let a4 = prompt('Do I have a preferred name?').toLowerCase();
  if (a4 === 'yes') {
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a4 === 'no') {
    alert('Incorrect!');
  } else {
    alert('That is not an answer.');
  }
}
q4();
// Question 5 -
function q5() {
  let a5 = prompt('Do you want a new set of dice?').toLowerCase();
  if (a5 === 'yes') {
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a5 === 'no') {
    alert('Incorrect!');
  } else {
    alert('That is not an answer.');
  }
}
q5();
let a6;
// Question 6 - 
function q6() {
  let coinflip = Math.floor(Math.random() * 10) + 1;
  console.log(coinflip);
  for (let i = 0; i < 4; i++) {
    let a6 = prompt('Guess a number between 1 and 10 inclusive.'); // returns string
    a6 = parseInt(a6);
    if (a6 === coinflip) {
      alert('Correct!');
      score++;
      return (a6);
      break;
    } else if (isNaN(a6)) {
      alert('That is not an answer.');
    } else {
      if (a6 < coinflip) {
        alert('A little low.');
      } else {
        alert('A little high.');
      }
    }
  }
  if (a6 !== coinflip) {
    alert(`The answer was ${coinflip}!`);
  }
}
q6();
// Question 7 - 
function q7() {
  let classes = [
    'artificer',
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sorcerer',
    'warlock',
    'wizard',
  ];
  let favorites = [];
  favorites.push(classes[0]);
  favorites.push(classes[6]);
  favorites.push(classes[9]);
  favorites.push(classes[11]);
  let lock = 1;
  let attempts7 = 0;
  let subScore;
  alert('The following question(s) refer to the section on D&D');
  while (lock === 1) {
    attempts7 = prompt('How many classes are my favorites?');
    attempts7 = parseInt(attempts7);
    if (attempts7 === favorites.length) {
      let succeeds = [];
      subScore = 0;
      for (attempts7 > 1; attempts7--;) {
        let a7b = prompt('List one of my favorite classes.').toLowerCase();
        if (favorites.includes(a7b) && !succeeds.includes(a7b)) {
          subScore++;
          alert(`${a7b} is correct.`);
          succeeds.push(a7b);
        } else if (favorites.includes(a7b) && succeeds.includes(a7b)) {
          alert('You need to list unique answers!');
        } else {
          alert('Incorrect.');
        }
        if (subScore === favorites.length) {
          score++;
          alert(`You got all ${subScore} correct!`);
        }
      }
    } else if (isNaN(attempts7)) {
      alert('That is not an answer.');
    } else {
      alert('Incorrect.');
    }
    console.log(subScore);
    if (!isNaN(subScore)) {
      if (subScore < 4) {
        alert(
          `You did not get all ${favorites.length}. The correct answers were ${favorites}`
        );
      }
    }
    if (attempts7 === -1) {
      lock = 0;
    }
  }
}
q7();
if (score >= 4) {
  alert(`${playerName}, you passed. Your final score was ${score}`);
} else {
  alert(`${playerName}, you failed. Your final score was ${score}`);
}
