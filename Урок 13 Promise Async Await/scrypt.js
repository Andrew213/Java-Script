class FetchData{
   getResponse = async url => {

            let response = await fetch(url)

        if(response.status === 200){
            return response.json()
        }
        throw new Error('Ошибка ' + response.status)
    };

    // getPlanet = () => this.getResponse("https://swapi.dev/api/planets/");
    // getStarShips = () => this.getResponse('https://swapi.dev/api/starships/9/');
    // getFilms =  () => this.getResponse('https://swapi.dev/api/films/1/')
    
};

class Planet extends FetchData{
    getPlanet = () => this.getResponse("https://swapi.dev/api/planets/");
}



// let aboba = new FetchData;

// let planets = aboba.getPlanet()
// .then(response => {
//     return response
// });
// console.log(planets)

















// let prom = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         console.log('prepearing...');
//        const person = {
//             name: 'Andrew',
//             married: false,
//         };
//         resolve(person)
//     },1000)
// });


// prom
// .then((data)=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         data.age = 22;
//         resolve(data)
//     }, 2000);
// })
// })
// .then((newData)=>{
// console.log(`Data modifide `, newData);
//     return new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             newData.sayHellow = function(){
//                 alert('Привет!')
//             }
//             resolve(newData)
//         }, 2000);
//     })
// })
// .then((person)=>{
//     person.sayHellow()
// })
// .catch(err => console.error('Err:  ', err))



// let delay = ms => {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//             resolve()
//         }, ms);
//     })
// }

// delay(2000)
// .then(()=>{
//     console.log(`Data modifide`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const fred = {
//                 name: 'Fred',
//                 lastName: 'johnson',
//             };
//             resolve(fred)
//         },2000)
//     })
// })
// .then((data)=>{
// console.log('Data gotted', data);
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         data.sayHi = ()=>{
//             alert(`${data.name} hi!`)
//         }
//         resolve(data)
//     }, 2000)
// })
// })
// .then((dataM)=>{
//     dataM.sayHi()
// })
// async function sendRequest(url){
//     await setTimeout(()=>{
//         response()
//     },3000)
// }

// sendRequest()

// function loadJson(url) {
//     return fetch(url)
//       .then(response => response.json());
//   }

//   let data = loadJson('https://swapi.dev/api/');
//   console.log(data)

// fetch('https://swapi.dev/api/')
// .then(response => {
//     return response.json()
// })
// .then(response => {
//     console.log(response)
// });

// function sendRequest(url){
    
//        return fetch(url)
//         .then(response => {
//            return response.json();
//         })
    
// }


// sendRequest('https://swapi.dev/api/')
// .then(response => {
//     console.log(response)
// })

// const gerResource = async url => {
//     const res = await fetch(url);

//     if(!res.ok){
//         throw new Error('Произошла ошибка: ' + res.status)
//     }

//     return await res.json()

// }
// console.log(gerResource('https://swapi.dev/api/'))

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//    wait()
//    .then(response => {
//        alert(response)
//    })
//   }
//   f()
  
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
//   function demoGithubUser() {
//     let name = prompt("Введите логин?", "iliakan");
  
//     return loadJson(`https://api.github.com/users/${name}`)
//       .then(user => {
//         alert(`Полное имя: ${user.name}.`);
//         return user;
//       })
//       .catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//           return demoGithubUser();
//         } else {
//           throw err;
//         }
//       });
//   }
  
