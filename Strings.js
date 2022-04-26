const escola = "cod3r"

console.log(escola.charAt(4))// mostra numero do caracter indicado de 0 para cima
console.log(escola.charCodeAt(3)) // mostra unicode do caracter indicado
console.log(escola.substring(1)) // indica de onde printar a string
console.log(escola.substring(0,3)) // indica onde começa saida da string e onde termina
console.log ('Escola '.concat(escola).concat("!"))// comando para concatena 2 string ou mais
console.log(escola.replace(3, 'e'))// função replace serve para substituir o caracter indicado
console.log(escola.replace(/\w/g, 'e'))// esse função substitui toda string pelo caracter indicado
console.log('Escola '+ escola + "!") // concatenar

console.log('ana,maria,pedro'.split(',')) // esse função cria um array de caracteres

