function getInteger(x, y) {
   let z = ((x - Math.floor(x)) * Math.pow(10, y));
   return Math.trunc(z)
}

let a = 13.890123;
let b = 2.891564;
let n = 3;


let z = getInteger(a, n);
let y = getInteger(b, n);

if (z >= y) {
   console.log('Первое число больше или равно второго')
} else if (z <= y) {
   console.log('Первое число меньше или равно второго')
} else {
   console.log('Они равны')
}