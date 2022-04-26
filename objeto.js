const prod1 = {} // criando objeto
prod1.nome = 'Celular Ultra mega' // atributo com valor
prod1.preco = 4998.90

console.log(prod1)

const prod2 = {  // outro jeito de criar objeto, acrescentando atributos e valor
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { // é possivel criar outro objeto dentro do objeto
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }

}
'{ "nome": "Camisa Polo", "preco": 79.90}' // json formato texto de objeto

console.log(prod2)

