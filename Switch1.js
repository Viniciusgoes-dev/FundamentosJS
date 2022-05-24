const resultado = function (nota) { //switch recebendo nota como parametro
    switch(Math.floor(nota)) { // floor arredonda para baixo, ceil para cima
      case 10: case 9:
        console.log('Quadro de Honra')
        break;

      case 6: case 7: case 8:
        console.log('Aprovado')
        break;
      
      case 1: case 2: case 3: case 4: case 5: case 0:
        console.log('Reprovado')
        break;
        default:
          console.log('nota inválida')

    } 
}

resultado(10)
resultado(6)
resultado(5)
resultado(-1)


