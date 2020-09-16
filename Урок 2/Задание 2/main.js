function getNum(string) {
  const n = prompt(string);
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    return parseFloat(n);
  } else if (n === null) {
    alert("Уже уходишь?");
    return;
  } else {
    alert("Введены некоррректные данные");
    return getNum(string);
  }
}

const firstYear = getNum("Первый год");
const secondYear = getNum("Второй год");

function isLeapYear(b) {
  return (b % 4 === 0 && b % 100 !== 0) || b % 400 === 0;
}
let i = firstYear;
let y = secondYear;

if (firstYear > secondYear) {
  i = secondYear;
  y = firstYear;
  // [i, y] = [y, i]
}

for (; i <= y; i++) {
  if (isLeapYear(i)) {
    console.log(i)
  }
}
// if (secondYear < firstYear) {
//   for (i = secondYear; i <= firstYear; i++) {
//     if (isLeapYear(i)) {
//       console.log(i);
//     }
//   }
// } else if (firstYear < secondYear) {
//   for (i = firstYear; i <= secondYear; i++) {
//     if (isLeapYear(i)) {
//       console.log(i);
//     }
//   }