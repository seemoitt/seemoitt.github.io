// choosing where to append
let pageGreet = document.querySelector(".greeting");
// create h1 node
let greetHeading = document.createElement("H1");
//create text for h1 node using array
let greetings = ["hello","salut","greetings","ciao","hallo", "greetings, friend"];
//rng for greeting select from array
let chooseGreeting = document.createTextNode(greetings[Math.floor(Math.random()* greetings.length)]);
//append text to h1, h1 to body
greetHeading.appendChild(chooseGreeting);
pageGreet.appendChild(greetHeading);