import {PERSENT_HEIGHT_FIELD,PIXEL_WIDTH_FIELD,getRandomInt } from "./data.js";
{
const ballEl = $('.ball')

ballEl.on('click', function () {

if($(this).offset().left < 900){
    
    $(this).addClass('ball--rotateRight');

    kickBall(ballEl,getRandomInt(47, 95), function(){  // ВНУТРИ ФУНКЦИИ getRandomInt, 47 - это центр поля с учетом размера мяча
        ballEl.removeClass('ball--rotateRight');
    });
  
} else{

    $(this).addClass('ball--rotateLeft');

    kickBall(ballEl, getRandomInt(0, 47),function(){
        
        ballEl.removeClass('ball--rotateLeft');
    });

}
});

function kickBall(elem,position,callback){

    elem.animate({

    left:position + '%',

    top: getRandomInt(0, PERSENT_HEIGHT_FIELD) + '%',

        },1000,function(){
            console.log(ballEl.offset())

            // НАХОЖУ ПРОЦЕНТЫ ОТНОСИТЕЛЬНО ШИРИНЫ ПОЛЯ
            if(elem.offset().left < (PIXEL_WIDTH_FIELD * 5 / 100) || elem.offset().left > (PIXEL_WIDTH_FIELD * 90 / 100)){
                alert('ГОООЛ')
            };

            callback();

        })
}

}
