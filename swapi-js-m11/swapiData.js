export const findBtn = document.querySelector('.button');
export const inputEl = document.querySelector('.input-search-js');
export const selectEl = document.querySelector('.select-category')
export const searchResult = document.querySelector('.search_result');
export const dataBlockEl = document.querySelector('.data-block-js');

export function getPersonInfo (el) {
   let {name,height,mass,birth_year,films} = el;

   dataBlockEl.innerHTML = `<div class="person_data">
   <div>Имя: ${name}</div>
   <div>Рост: ${height}</div>
   <div>Вес: ${mass}</div>
   <div>Год рождения: ${birth_year}</div>
   <div>В скольки фильмах появлялся: ${films.length}</div>
 </div>`
   }
   
export  function getShipInfo (el) {
  let{name,model,starship_class,pilots,films} = el;

     dataBlockEl.innerHTML = ` <div class="ship_data">
   <div>Имя: ${name}</div>
   <div>Модель: ${model}</div>
   <div>Класс звездолета: ${starship_class}</div>
   <div>Пилотов: ${pilots.length}</div>
   <div>В скольки фильмах появлялся: ${films.length}</div>
 </div>`
      }
   
export  function getPlanetInfo (el) {
  let {name,climate,terrain,gravity} = el;

      dataBlockEl.innerHTML = ` <div class="planet_data">
   <div>Имя: ${name}</div>
   <div>Климат: ${climate}</div>
   <div>Местность: ${terrain}</div>
   <div>Гравитация: ${gravity}</div>
 </div>`

}


selectEl.addEventListener('change', () => {
searchResult.textContent ='';
dataBlockEl.textContent = '';
})