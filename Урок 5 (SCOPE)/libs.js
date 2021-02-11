(function () {
  "use strict";

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const minInt = 0;
  const maxInt = 100;


  function getNum(string) {
    const n = prompt(string);
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
      return parseFloat(n);
    } else if (n === null) {
      alert("Выход");
    } else {
      alert("Введите число");
      return getNum(string);
    }
  }

  function newGame() {
    const NEW_GAME = confirm("Сыграем еще?");
    if (NEW_GAME) {
      gameProcess()
    } else {
      alert("Пока!");

    };
  }


  function gameProcess() {
    let attempts = 10;
    let randomNumber = getRandomInt(minInt, maxInt);

    return (function game() {

      let userNumber = getNum("Угадай число от 0 до 100");

      if (userNumber < randomNumber) {
        alert("Значение мало");
        --attempts;
        alert("Попыток осталось: " + attempts);
        attempts === 0 ? newGame() : game();
      } else if (userNumber > randomNumber) {
        alert("Значение велико");
        --attempts;
        alert("Попыток осталось: " + attempts);
        attempts === 0 ? newGame() : game();
      } else if (userNumber == randomNumber) {
        alert("Правильно!");
        newGame();
      }
    }());
  }
  window.startGame = gameProcess;
})();

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }

// const minInt = 0;
// const maxInt = 100;

// let x = getRandomInt(minInt, maxInt);

// function getNum(string) {
//   const n = prompt(string);
//   if (!isNaN(parseFloat(n)) && isFinite(n)) {
//     return parseFloat(n);
//   } else if (n === null) {
//     alert("Выход");
//   } else {
//     alert("Введите число");
//     return getNum(string);
//   }
// }

// let attempts = 9;

// function attemptCount() {
//   if (attempts === 0) {
//     alert("Попытки кончились");
//     newGame();
//   } else {
//     --attempts;
//     guessRandomInt();
//   }
// }

// function newGame() {
//   const NEW_GAME = confirm("Сыграем еще?");
//   if (NEW_GAME) {
//     attempts = 9;
//     x = getRandomInt(minInt, maxInt);
//     guessRandomInt();
//   } else alert("Пока!");
// }

// function guessRandomInt() {
//   let a = getNum("Угадай число от 0 до 100");
//   if (a < x) {
//     alert("Значение мало");
//     alert("Попыток осталось: " + attempts);
//     attemptCount();
//   } else if (a > x) {
//     alert("Значение велико");
//     alert("Попыток осталось: " + attempts);
//     attemptCount();
//   } else if (a === x) {
//     alert("Правильно!");
//     newGame();
//   }
// }

// window.start = () => guessRandomInt();