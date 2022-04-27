let amigo = { // criando objeto amigo com atributos
    nome: 'josé', 
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
    
}
amigo.engordar(2) // chamando a função e colocando parametro

console.log(`${amigo.nome} pesa ${amigo.peso} kg`)