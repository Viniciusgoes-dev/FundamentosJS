let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 representa verdadeiro
console.log(!!isAtivo)

console.log('os verdadeiros') // uma negação ! não verdadeiro
console.log(!!3) // dois simbolos !! de negação mostra o original 
console.log(!!-1)
console.log(!!' ') // espaço em branco conta como verdadeiro
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (isAtivo = true))

console.log('os falso...')// ! = não
console.log(!!0)
console.log(!!'')//string vazia é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || ' ')) // ou localiza e mostra o verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // printa a variavel, se tiver vazia o outro indicado
