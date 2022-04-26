let num = [5, 8, 4]
 num [3] = 6 // acrescentando variavel ao indice 3
num.push(7) // comando push acrescenta variavel ao ultimo indice
// variavel.length mostra comprimento do vetor
// variavel.sort() deixa as variaveis do vetor de forma crescente
// console.log(variavel[0]) mostra a variavel do indice informado
let p = num.indexOf(4) // mostra qual posição o numero está na variavel
console.log(`O valor 4 está na posição ${p}`)
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)
/*
for(let i = 0; i <num.length; i ++){ 
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
primeira forma de output varias vezes */ 

for (let ind in num) { // 2 forma mais simples de output
    console.log(`A posição ${ind} tem o valor ${num[ind]}`)
}