function intaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao // dowhile inicia a variavel, sem valor inicial.

do { // executa a primeira repetição sem a condição
    opcao = intaleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('até a proxima!')