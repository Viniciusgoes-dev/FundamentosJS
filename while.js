function intaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// while usada mais para quantidade indeterminada
let opcao = 0

while (opcao != -1) { // equanto for verdadeiro continua, sai no falso
    opcao = intaleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('até a proxima!')