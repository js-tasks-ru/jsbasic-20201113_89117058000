/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let strSmall = str.slice(0, maxlength - 1);
    let result = strSmall + '…';
    return result
  } else {
    return str
  }
}
