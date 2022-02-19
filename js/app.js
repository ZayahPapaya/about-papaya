'use strict';
// + Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have. 

// + Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// + Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// + Ask the user their name through a prompt()

// + Display that name back to the user through a custom greeting welcoming them to your site.

// + Display the user’s name back to them in your final message to the user.

// console.log('hello world');
let score = 0;
let i = 0;
let playerName = prompt('What is your name?');
console.log(playerName);
alert('Hello, ' + playerName + '. Please answer the following questions simply with a yes or a no.');

// Question 1 -
let a1 = prompt('Are my pronouns he/him?').toLowerCase();
if (a1 === 'no') {
  ////console.log('correct');
  alert('Correct!');
  score = i++;
  console.log(score);
} else if (a1 === 'yes') {
  ////console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 2 -
let a2 = prompt('Have I had more than one job?').toLowerCase();
if (a2 === 'yes') {
  //console.log('correct');
  alert('Correct!');
  score = i++;
  console.log(score);
} else if (a2 === 'no') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 3 -
let a3 = prompt('Do I drink coffee?').toLowerCase();
if (a3 === 'yes') {
  //console.log('correct');
  alert('Correct!');
  score = i++;
  console.log(score);
} else if (a3 === 'no') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 4 -
let a4 = prompt('Do I have a preferred name?').toLowerCase();
if (a4 === 'yes') {
  //console.log('correct');
  alert('Correct!');
  score = i++;
  console.log(score);
} else if (a4 === 'no') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 5 -
let a5 = prompt('Do you want a new set of dice?').toLowerCase();
if (a5 === 'yes') {
  //console.log('correct');
  alert('Correct!');
  score = i++;
  console.log(score);
} else if (a5 === 'no') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Score check
if (score >= 4) {
  //console.log(playerName + ', you passed.');
  alert(playerName + ', you passed.');
} else {
  //console.log(playerName + ', you failed.');
  alert(playerName + ', you failed.');
}