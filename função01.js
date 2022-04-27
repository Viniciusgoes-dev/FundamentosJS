function parimpar(n) {
    if(n%2==0) {  // se o resto de n é igual a 0 é par
        return 'par'
    }else {
        return 'ímpar'
    }
}

console.log(parimpar(4)) // chamando a função e colocando parametro do n