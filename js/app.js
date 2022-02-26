'use strict';
// + Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

// + Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// + Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// + Ask the user their name through a prompt()

// + Display that name back to the user through a custom greeting welcoming them to your site.

// + Display the user’s name back to them in your final message to the user.

// As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
// Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
// Convert your work experience and education summary into an unordered list using HTML

// + As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// + Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// + Indicates through an alert if the guess is “too high” or “too low”.
// + It should give the user exactly four opportunities to get the correct answer.
// + After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

// console.log('hello world');
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
    ////console.log('correct');
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a1 === 'yes') {
    ////console.log('incorrect');
    alert('Incorrect!');
  } else {
    //console.log('Not an answer.');
    alert('That is not an answer.');
  }
}
q1();
// Question 2 -
function q2() {
  let a2 = prompt('Have I had more than one job?').toLowerCase();
  if (a2 === 'yes') {
    //console.log('correct');
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a2 === 'no') {
    //console.log('incorrect');
    alert('Incorrect!');
  } else {
    //console.log('Not an answer.');
    alert('That is not an answer.');
  }
}
q2();
// Question 3 -
function q3() {
  let a3 = prompt('Do I drink coffee?').toLowerCase();
  if (a3 === 'yes') {
    //console.log('correct');
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a3 === 'no') {
    //console.log('incorrect');
    alert('Incorrect!');
  } else {
    //console.log('Not an answer.');
    alert('That is not an answer.');
  }
}
q3();
// Question 4 -
function q4() {
  let a4 = prompt('Do I have a preferred name?').toLowerCase();
  if (a4 === 'yes') {
    //console.log('correct');
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a4 === 'no') {
    //console.log('incorrect');
    alert('Incorrect!');
  } else {
    //console.log('Not an answer.');
    alert('That is not an answer.');
  }
}
q4();
// Question 5 -
function q5() {
  let a5 = prompt('Do you want a new set of dice?').toLowerCase();
  if (a5 === 'yes') {
    //console.log('correct');
    alert('Correct!');
    score++;
    console.log(score);
  } else if (a5 === 'no') {
    //console.log('incorrect');
    alert('Incorrect!');
  } else {
    //console.log('Not an answer.');
    alert('That is not an answer.');
  }
}
q5();
let a6;
// Question 6 - Random number guessing game 4 chances, log if too high or low. After tell correct answer
function q6() {
  let coinflip = Math.floor(Math.random() * 10) + 1;
  console.log(coinflip);
  for (let i = 0; i < 4; i++) {
    let a6 = prompt('Guess a number between 1 and 10 inclusive.'); // returns string
    //console.log(a6);
    a6 = parseInt(a6); //string to number
    //let typeCheck = typeof (a6);
    //console.log(typeCheck);
    //console.log(a6);
    if (a6 === coinflip) {
      //console.log('correct');
      alert('Correct!');
      score++;
      return(a6);
      //console.log(score);
      break;
    } else if (isNaN(a6)) {
      //console.log('Not an answer');
      alert('That is not an answer.');
    } else {
      if (a6 < coinflip) {
        alert('A little low.');
      } else {
        alert('A little high.');
      }
      //console.log('incorrect');
      //alert('Incorrect!');
    }
  }
  if (a6 !== coinflip) {
    alert(`The answer was ${coinflip}!`);
  }
}
q6();
// Question 7 - Favorite D&D classes - multiple correct - display all correct after - 6 attempts TODO: Add AND/OR somewhere
// first check this is 4. if no, try again with no consequences with a hint. Then once 4, ask 4 times for a different class each time? If all 4, then increment score and continue
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
  //let favorites = classes[0, 6, 9, 11];
  let favorites = [];
  favorites.push(classes[0]);
  favorites.push(classes[6]);
  favorites.push(classes[9]);
  favorites.push(classes[11]);
  //console.log(favorites);
  //console.log(favorites.length);
  let lock = 1;
  let attempts7 = 0;
  let subScore;
  //let x;
  alert('The following question(s) refer to the section on D&D');
  while (lock === 1) {
    attempts7 = prompt('How many classes are my favorites?');
    attempts7 = parseInt(attempts7);
    //console.log(attempts7);
    if (attempts7 === favorites.length) {
      let succeeds = [];
      subScore = 0;
      for (attempts7 > 1; attempts7--;) {
        let a7b = prompt('List one of my favorite classes.').toLowerCase();

        // I avoided using includes as much as possible, as per instructions, but could not find another way to do this without these two.
        //if (blah === favorites[1] || favorites[2])
        if (favorites.includes(a7b) && !succeeds.includes(a7b)) {
          subScore++;
          //x = a7b;
          alert(`${a7b} is correct.`);
          succeeds.push(a7b);
          //console.log(subScore + 'subscore');
          //console.log(succeeds);
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
    //console.log('lock check');
    //console.log(attempts7);
    //console.log(favorites.length);
    console.log(subScore);
    if (!isNaN(subScore)) {
      if (subScore < 4) {
        alert(
          `You did not get all ${favorites.length}. The correct answers were ${favorites}`
        );
        //console.log('Fail');
      }
    }
    if (attempts7 === -1) {
      lock = 0;
      //console.log('Locked');
    }
  }
}
q7();
if (score >= 4) {
  //console.log(playerName + ', you passed.');
  alert(`${playerName}, you passed. Your final score was ${score}`);
} else {
  //console.log(playerName + ', you failed.');
  alert(`${playerName}, you failed. Your final score was ${score}`);
}
