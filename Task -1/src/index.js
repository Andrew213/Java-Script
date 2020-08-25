let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

let a = Math.abs(x1 - x2);
let b = Math.abs(y1 - y2);

console.log(a * b);


// function getRandomInt(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    let z = Math.round(Math.random() * (max - min)) + min
//    if (z % 2 !== 0) {
//       return z
//    } else {
//       z = z + 1;
//       return z
//    }
// }

// const minInt = -3;
// const maxInt = -10;

// console.log(getRandomInt(minInt, maxInt))