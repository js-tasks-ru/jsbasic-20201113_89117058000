/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let arr = [];
  friends.forEach((elem) => {
    arr.push(elem.firstName + ' ' + elem.lastName)
  })

  let ul = document.createElement('UL');
  
  arr.forEach((elem) => {
  let li = document.createElement('LI');
  li.textContent = elem;
  ul.appendChild(li)

  })
  
  return ul
}
