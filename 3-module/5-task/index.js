/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(' ').join(',').split(',');
  let newArr = []
  arr.forEach((elem) => {
      newArr.push(parseFloat(elem))
  })

  let max = 0;
  newArr.forEach((elem) => {
    if(elem > max) {
      max = elem
    }
  })

  let min = 0;
  newArr.forEach((elem) => {
    if(elem < min) {
      min = elem
    }
  })

  let result = {
    min,
    max,
  }

  return result
}
