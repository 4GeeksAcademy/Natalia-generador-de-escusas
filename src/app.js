import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {

function getRandomElement(anArray) {
  let index = Math.floor(Math.random() * anArray.length);
  return anArray[index];
}

function generateExcuse() {
  let randomExcuse = `${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)} ${getRandomElement(when)}.`;
  return randomExcuse;
}

  let randomExcuse = document.getElementById ('excuse');
  randomExcuse.innerText = generateExcuse();
}

