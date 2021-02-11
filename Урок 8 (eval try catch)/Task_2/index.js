function filterByType(type, ...val) {

   let newArr = val.filter(function(el) {

      if (Object.prototype.toString.call(type) === "[object Null]" && Object.prototype.toString.call(el) === "[object Null]") {
         return true;
      }

      if (typeof (type) === 'boolean' && Object.prototype.toString.call(el) === "[object Boolean]") {
         return true;
      }

      if (Object.prototype.toString.call(type) === Object.prototype.toString.call(el) && !isNaN(el) && !isNaN(type)) {
         return el;
      }

      if(isNaN(type) && isNaN(el) && typeof(el) === 'number' && typeof(type) ==='number'){
         return true
      }

   });
   console.log(newArr);
}
   

filterByType(NaN, 10, 20, "a", "b", 30, true, false, NaN, 0, {"d": 20}, null, [1]);


// console.log(typeof(false) == 'boolean')

