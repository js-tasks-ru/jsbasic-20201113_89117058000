/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let firstLetter = str.slice(0,1);
  let result = firstLetter.toUpperCase() + str.slice(1);
  return result
}
