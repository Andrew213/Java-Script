

// function filterByType (type, ...val){
//   let arr = val.map(function (el){
 
// if(typeof(el) === typeof(type)){
//   return el
// } 
//   })

// let bor = arr.filter(function(el){
//   return el !== undefined; 
// })

// console.log(bor)
// }

// filterByType('fd', 10, 20, "a", "b", 30, true, false);


function filterByType (type, ...val){

// for(let im of val){
//   if (im === false){
//     val[im] = false ;
//   }
// }

let newArr = val.filter(function(el){

  if(el === false){
    el =true
  }

  if(typeof(el) === typeof(type)){
    return el
  } 
})

console.log(newArr)
}

filterByType(1, 10, 20, "a", "b", 30, true, false);

// let arr = [
//   10, 20, "a", "b", 30, true, false
// ]


// for(let im of arr){
//   if (im === false){
//     im === true;
//     console.log(im)
//   }
// }