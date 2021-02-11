"use strict"

class Vehicle {
  constructor(options){
    this.type = options.type
    this.mark = options.mark
    this.speedMin = 1
    this.arrivalPoint = 1000
    this.capacity = options.capacity
    this.speedMax = options.speedMax
   this.fuel = options.fuel
  }

startMoove(){
  if(this.mark) {
    console.log(`${this.mark} завелся и тронулся`)
  };
}

  refueling(){
    if(this.fuel === 0){
      console.log(`${this.mark} заправляется...`)
      fuel = 1000
      console.log(`Бак полон`)
    }
  }

moove(){
  let speedMin = this.speedMin;
  let speedMax = this.speedMax;
  let fuel = this.fuel;
  for (let i = 1; i <= this.arrivalPoint; i++) {
    if(speedMin < speedMax){
      speedMin++
      fuel --
      console.log(`${this.mark} moove at ${i} with speed ${speedMin} and ${fuel} of fuel`)
      if(fuel === 0)
      {
        console.log('Нет топлива')
        break
      }
    } else if (speedMin === speedMax){
      fuel --
     console.log(`${this.mark} moove at ${i} with speed ${speedMin} and ${fuel} of fuel`)
     if(fuel === 0)
     {
       console.log('Нет топлива')
       break
     }
    }
  }
}

finish(){
  if(this.arrivalPoint === 1000){
    console.log(`${this.mark} прибыл на место`)
  }
}

}



class Car extends Vehicle{
  constructor(options){
    super(options)
    this.hasWheels = true
  }

moove(){
  super.startMoove()
  super.moove()
  this.refueling()
  super.finish()
console.log('Машина припарковалась')
   }

}


class Plain extends Vehicle{
  constructor(options){
    super(options)
    this.altitude = options.altitude
  }

moove(){
  super.startMoove()
  super.moove()
console.log('Самолет приземлился')
super.finish()
   }

}



let bmw = new Car({capacity:5,fuel:250,speedMax:100,type:'car',mark:'BMW'});
let boeing = new Plain({capacity:50,fuel:2500,speedMax:950,type:'plain',mark:'Boeing',});

console.log(boeing)
bmw.moove()


// -----------------------------------

// Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto (может быть null), и необязательными дескрипторами свойств.


// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj (то же самое, что и геттер __proto__).


// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).


// Object.keys(obj) / Object.values(obj) / Object.entries(obj) – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.


// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.


// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.


// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.


// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

// ------------------------------------

// let obj = Object.create(null);

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// alert(obj[key]); // "some value"

// Таким образом не будет унаследованного геттера/сеттера для __proto__. Теперь это свойство обрабатывается как обычное свойство, и приведённый выше пример работает правильно.

// Мы можем назвать такой объект «простейшим» или «чистым словарным объектом», потому что он ещё проще, чем обычные объекты {...}.

// Недостаток в том, что у таких объектов не будет встроенных методов объекта, таких как toString:


// ------------------------------------

// let animal = {
//    eat: true,
//    fly: false,
//    say: function () {
//       alert('Здаров епта!')
//    }
// }

// let rabbit = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
 
// console.log(rabbit)
// // клон obj c тем же прототипом (с поверхностным копированием свойств)
// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// Такой вызов создаёт точную копию объекта obj, включая все свойства: перечисляемые и неперечисляемые, геттеры/сеттеры для свойств – и всё это с правильным свойством [[Prototype]].





// -------------------------------------------------------

// function Rabbit() {}

// // Не перезаписываем Rabbit.prototype полностью,
// // а добавляем к нему свойство
// Rabbit.prototype.jumps = true
// // Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor

// -------------------------------------------------------

// let hamster = {
//    stomach: [],
 
//    eat(food) {
//      this.stomach = [food];
//    }
//  };
 
 
//  let speedy = {
//    __proto__: hamster
//  };
 
//  let lazy = {
  
//    __proto__: hamster
//  };

 
//  // Этот хомяк нашёл еду
//  speedy.eat("apple");
//  alert( speedy.stomach ); // apple
 
//  // У этого хомяка тоже есть еда. Почему? Исправьте
//  alert( lazy.stomach ); // apple

// -------------------------------------------------------
 
// let animal = {
//    eats: true
//  };
 
//  let rabbit = {
//    jumps: true,
//    __proto__: animal
//  };
 
//  for(let prop in rabbit) {
//    let isOwn = rabbit.hasOwnProperty(prop);
 
//    if (isOwn) {
//      alert(`Our: ${prop}`); // Our: jumps
//    } else {
//      alert(`Inherited: ${prop}`); // Inherited: eats
//    }
//  }

// -------------------------------------------------------

// let animal = {
//    eats: true
//  };
 
//  let rabbit = {
//    jumps: true,
//    __proto__: animal
//  };
 
//  for(let prop in rabbit) {
//    let isOwn = rabbit.hasOwnProperty(prop);
 
//    if (isOwn) {
//      alert(`Our: ${prop}`); // Our: jumps
//    } else {
//      alert(`Inherited: ${prop}`); // Inherited: eats
//    }
//  }

// -------------------------------------------------------

// let animal = {
//    eats: true
//  };
//  let rabbit = {
//    jumps: true,
//    __proto__: animal
//  };
 
//  alert( rabbit.eats ); // true (**)
//  alert( rabbit.jumps ); // true

 
 
 // теперь мы можем найти оба свойства в rabbit:

 // -------------------------------------------------------

// var Person = function (firstName) {
//    this.firstName = firstName;
//  };
 
//  Person.prototype.sayHello = function() {
//    console.log("Hello, I'm " + this.firstName);
//  };
 
//  var person1 = new Person("Alice");
//  var person2 = new Person("Bob");
//  var helloFunction = person1.sayHello;
 
//  // выведет "Hello, I'm Alice"
//  person1.sayHello();
 
//  // выведет "Hello, I'm Bob"
//  person2.sayHello();
 
//  // выведет "Hello, I'm undefined" (or fails
//  // with a TypeError in strict mode)
//  helloFunction('dd');                                    
 
//  // выведет true
//  console.log(helloFunction === person1.sayHello);
 
//  // выведет true
//  console.log(helloFunction === Person.prototype.sayHello);
 
//  // выведет "Hello, I'm Alice"
//  helloFunction.call(person1);

// var Person = function (firstName) {
//    this.firstName = firstName;
//  };
 
//  Person.prototype.sayHello = function() {
//    console.log("Hello, I'm " + this.firstName);
//  };
 
//  var person1 = new Person("Alice");
//  var person2 = new Person("Bob");
 
//  // вызываем метод sayHello() класса Person
//  person1.sayHello(); // выведет "Hello, I'm Alice"
//  person2.sayHello(); // выведет "Hello, I'm Bob"


// Function.prototype.defer = function(ms) {
//    let f = this;
//    return function(...args) {
//      setTimeout(() => f.apply(this, args), ms);
//    }
//  };
 
//  // check it
//  function f(a, b) {
//    alert( a + b );
//  }
 
//  f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
