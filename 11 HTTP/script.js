const btn = document.querySelector('.button');


btn.addEventListener('click', function(event){
   event.preventDefault();

   window.fetch('/data.json')
   
   .then(function(response) {
      console.log(response);
      return response.json();
   })
   .then(function(response){
   console.log(response)
})

})