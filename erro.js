function tratarErroELancar(erro) {
    //throw new Error('Erro no comando')
    //throw 10 
    //throw true  
    throw {
         nome: erro.name,
         msg: erro.message,
         data: new Date
    }
}


function imprimirnome(obj) {
    try { // verificar erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = {nome: 'Roberto'}
imprimirnome(obj)