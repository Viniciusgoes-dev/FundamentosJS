console.log('01)', '1' == 1 ) // considera string igual com numero - true
console.log('02)', '1' === 1 ) // compara o tipo Estritamente igual entre as variaveis - false
console.log('03)', '3' != 3 )// != diferente - false
console.log('04)', '4' !== 4 )// Estritamente diferente - true

console.log('05)', 3 < 2 ) // menor - false
console.log('06)', 3 > 2 ) // maior - true
console.log('07)', 3 <= 2 ) // menor ou igual - false
console.log('08)', 3 >= 2 ) // maior ou igual - true

const date1 = new Date(0)
const date2 = new Date(0)
console.log('09)', date1 === date2 ) // false
console.log('10)', date1 == date2 ) // false
console.log('11)', date1.getTime() === date2.getTime()) // true
console.log('12)', undefined == null) // true
console.log('12)', undefined === null) // false
