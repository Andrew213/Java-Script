 import {findBtn,inputEl,selectEl,searchResult,getPersonInfo,getPlanetInfo,getShipInfo} from './swapiData.js';

window.onload = function () {

   const api = "https://swapi.dev/api/";


   class FetchData{
      getResponse = async url => {
   
               let response = await fetch(url)
   
           if(response.status === 200){
               return response.json()
           }
           throw new Error('Ошибка ' + response.status)
       };

   
       getPlanet = (val) => {
        return  this.getResponse( api + "planets/?search=" + val)
         };
       getStarShips = (val) => {
        return this.getResponse(api + "starships/?search=" + val)
         };
       getPeople =  (val) => {
         return this.getResponse(api + "people/?search=" + val)
         };
       
   };

   const getData = new FetchData();

function getSWAPIrequest (){
      
      searchResult.textContent = '';
      let searchVal = inputEl.value; 

      if (inputEl.value.length === 0 || !inputEl.value.trim()) {

         searchResult.textContent = 'Вы ничего не ввели'

      } else {
   
      if ( selectEl.selectedIndex === 0){

         let planets = getData.getPlanet(searchVal);
     
         planets.then(response=>{
            response.count === 0 ? searchResult.textContent = 'Данная планета не найдена или не существует' : getSearchResults(response.results)
         });


      }else if(selectEl.selectedIndex === 1){

         let ships = getData.getStarShips(searchVal);

         ships.then(response=>{
            response.count === 0 ? searchResult.textContent = 'Данный корабль не найден или не существует' : getSearchResults(response.results)
         })

      } else {

         let people = getData.getPeople(searchVal);

         people.then(response=>{
            response.count === 0 ? searchResult.textContent = 'Данный персонаж не найден или не существует' : getSearchResults(response.results) 
         })
      }

     }

     function getSearchResults (dataArr){

      
         dataArr.forEach(el => {
            
      
            const searchResult = document.querySelector('.search_result');
            const liEl = document.createElement('li');
            liEl.textContent = el.name;
         
            searchResult.append(liEl);
            
      liEl.addEventListener('click', function(){ 

         if ( selectEl.selectedIndex === 0) {

            getPlanetInfo(el)

         }else if(selectEl.selectedIndex === 1){

            getShipInfo(el)

         } else {

            getPersonInfo(el)

         }
      })
         })
     }
   }
//       fetch(url)
//       .then(response => {

//       return response.json()

//       })
//       .then(response => {

//          if(response.count === 0){

//             searchResult.textContent = 'Ничего не найдено'

//          } else {
// console.log(response.results)
//             // const resultsArr = response.results;
            
//             // resultsArr.forEach( el => {

//             //    getSearchResults(el)

//             //    console.log(el)
//             // })
//          }
     
//       })


// function getSearchResults(el){

//       const searchResult = document.querySelector('.search_result');
      
//       const liEl = document.createElement('li');
      
//       liEl.textContent = el.name;
         
//       searchResult.append(liEl);

//       liEl.addEventListener('click', function(){ 

//          if ( selectEl.selectedIndex === 0) {

//             getPlanetInfo(el)

//          }else if(selectEl.selectedIndex === 1){

//             getShipInfo(el)

//          } else {

//             getPersonInfo(el)

//          }
//       })
// }

findBtn.addEventListener('click', getSWAPIrequest)

  };












