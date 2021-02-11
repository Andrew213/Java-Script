import {btnSaveEl, btnEditEl,  paragraphEl, btnCancelEl} from './libs.js';

paragraphEl.innerHTML = localStorage.getItem('text');

document.addEventListener('click', function(event){

   if(event.target === btnEditEl){
    
      paragraphEl.style.borderColor = 'red';

      paragraphEl.contentEditable = true;

      btnSaveEl.disabled = false;

      btnCancelEl.disabled = false;

      btnEditEl.disabled = true;

   }
   
   if(event.target === btnCancelEl){

      paragraphEl.innerHTML = localStorage.getItem('text');
    
      paragraphEl.style.borderColor = 'green';

      paragraphEl.contentEditable =  false ;

      btnSaveEl.disabled = true;

      btnCancelEl.disabled = true;

      btnEditEl.disabled = false;

   }
   
   if(event.target === btnSaveEl){
    
      localStorage.setItem('text', paragraphEl.innerHTML);

      paragraphEl.style.borderColor = 'green';

      paragraphEl.contentEditable =  false ;

      btnSaveEl.disabled = true;

      btnCancelEl.disabled = true;

      btnEditEl.disabled = false;

   }
  
})




