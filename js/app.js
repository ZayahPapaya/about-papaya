'use strict';
// + Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have. 

// + Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

// + Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.

// + Ask the user their name through a prompt()

// + Display that name back to the user through a custom greeting welcoming them to your site.

// + Display the user’s name back to them in your final message to the user.

// console.log('hello world');
let score = 0
let playerName = prompt('What is your name?');
console.log(playerName);
alert('Hello, ' + playerName  + '. Please answering the following questions simply with a 1 or a 2.');

// Question 1 -
let a1 = prompt('What are my pronouns? ( 1 ) she/her or ( 2 ) he/him');
if(a1 === '1'){
  ////console.log('correct');
  alert('Correct!');
  score = score + 1
  console.log(score);
} else if(a1 === '2') {
  ////console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 2 -
let a2 = prompt('How many jobs have I had? ( 1 ) 1 or ( 2 ) 2');
if(a2 === '2'){
  //console.log('correct');
  alert('Correct!');
  score = score + 1
  console.log(score);
} else if(a2 === '1') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 3 -
let a3 = prompt('Do I drink coffee? ( 1 ) no or ( 2 ) yes');
if(a3 === '2'){
  //console.log('correct');
  alert('Correct!');
  score = score + 1
  console.log(score);
} else if(a3 === '1') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 4 -
let a4 = prompt('Which name should you use for me? ( 1 ) Zayah or ( 2 ) Aiden');
if(a4 === '1'){
  //console.log('correct');
  alert('Correct!');
  score = score + 1
  console.log(score);
} else if(a4 === '2') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Question 5 -
let a5 = prompt('Do you want a new set of dice? ( 1 ) yes or ( 2 )');
if(a5 === '1'){
  //console.log('correct');
  alert('Correct!');
  score = score + 1
  console.log(score);
} else if(a5 === '2') {
  //console.log('incorrect');
  alert('Incorrect!');
} else {
  //console.log('Not an answer.');
  alert('That is not an answer.');
}

// Score check
if(score >= 4){
  //console.log(playerName + ', you passed.');
  alert(playerName + ', you passed.');
} else {
  //console.log(playerName + ', you failed.');
  alert(playerName + ', you failed.');
}