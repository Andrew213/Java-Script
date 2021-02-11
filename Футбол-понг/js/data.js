export const PERSENT_HEIGHT_FIELD = 90;
export const PIXEL_WIDTH_FIELD = 1887;


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  