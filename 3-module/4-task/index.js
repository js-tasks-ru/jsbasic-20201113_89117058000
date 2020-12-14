/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let newArrUsers = []
  users.forEach((elem) => {
    if(elem.age <= age) {
    let res = elem.name + ', ' + elem.balance;
    newArrUsers.push(res);    
    }
  })
  let str = newArrUsers.join('\n')
  return str
}
