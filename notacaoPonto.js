const obj1 = {}
obj1.nome = 'bola' // criando atributo para projeto
obj1['nome'] = 'bola2' // outro modo para criar atributo para projeto
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //cria um atributo publico 
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj ('cadeira')
const obj3 = new Obj ('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()