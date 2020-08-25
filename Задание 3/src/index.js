function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   let z = Math.round(Math.random() * (max - min)) + min
   if (z % 2 !== 0) {
      return z
   } else {
      z = z + 1;
      return z
   }
}

const minInt = 100;
const maxInt = -5;

console.log(getRandomInt(minInt, maxInt))