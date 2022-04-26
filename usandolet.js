var numero = 1 // let continua a mesma variavel dentro do escopo ja o var não
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)