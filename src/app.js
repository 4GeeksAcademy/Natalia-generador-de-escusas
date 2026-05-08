import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomExcuse(anArray) {
  const index = Math.floor(Math.random() * anArray.length);
  return anArray[index];
}

function generateExcuse() {
  const excuse = `${randomExcuse(who)} ${randomExcuse(action)} ${randomExcuse(what)} ${randomExcuse(when)}.`;
  return excuse;
}

window.onload = function() {
  const excuse = document.getElementById ('excuse');
  excuse.innerText = generateExcuse();
}

