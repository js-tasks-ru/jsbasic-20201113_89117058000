/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let smallLetter = str.toLocaleLowerCase();
  if (smallLetter.indexOf('1xbet') != -1 || smallLetter.indexOf('xxx') != -1) {
    return true
  } else {
    return false
  }
}
