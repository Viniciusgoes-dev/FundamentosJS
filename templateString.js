const nome = 'rebeca'
const concatenacao = 'olá ' + nome + '!'
const template = `
    olá
    ${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) // converte string em operações

const up =texto => texto.toUpperCase() // toUpperCase deixa a string maiúscula
console.log(`Ei... ${up('cuidado')}!`)

