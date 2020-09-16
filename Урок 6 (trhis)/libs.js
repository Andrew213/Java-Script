// (function () {
//   "use strict";

//   let getNameOfDay = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//   ];

//   let ARR_HOUR = ["Час", "Часа", "Часов"];
//   let ARR_MINUTE = ["Минута", "Минуты", "Минут"];
//   let ARR_SECONDS = ["секунда", "секунды", "секунд"];

//   function time() {
//     let date = new Date();
//     let dayNum = date.getDate(); // числовое значение дня
//     let dayName = date.getDay(); // числовое значения дня недели
//     let nameOfDay = getNameOfDay[dayName];
//     let getHour = date.getHours(); // числовое значение часа
//     let hour = getHour + " " + declOfNum(getHour, ARR_HOUR); // конкатенация числового значения часа + строки
//     let getMinutes = date.getMinutes(); // числовое значение минут
//     let minutes = getMinutes + " " + declOfNum(getMinutes, ARR_MINUTE); // конкатенация числового значения минут + строки
//     let getSeconds = date.getSeconds(); // числовое значение секунд
//     let seconds = getSeconds + " " + declOfNum(getSeconds, ARR_SECONDS); //конкатенация числового значения секунд + строки
//     return dayNum + " " + nameOfDay + " " + hour + " " + minutes + " " + seconds;

//   };



//   function declOfNum(number, titles) {
//     let cases = [2, 0, 1, 1, 1, 2];
//     return titles[
//       number % 100 > 4 && number % 100 < 20 ?
//       2 :
//       cases[number % 10 < 5 ? number % 10 : 5]
//     ];
//   }

//   window.regTime = time

// })();