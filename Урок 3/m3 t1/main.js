"use strict";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const minInt = 0;
const maxInt = 100;

let x = getRandomInt(minInt, maxInt);

function getNum(string) {
  const n = prompt(string);
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    return parseFloat(n);
  } else if (n === null) {
    alert("Выход");
  } else {
    alert("Введи число");
    return getNum(string);
  }
}

function guessRandomInt() {
  let a = getNum("Угадай число от 0 до 100");
  if (a < x) {
    alert("Значение мало");
    return guessRandomInt();
  } else if (a > x) {
    alert("Значение велико");
    return guessRandomInt();
  } else if (a === x) {
    alert("Правильно!");
  }
}

guessRandomInt();
