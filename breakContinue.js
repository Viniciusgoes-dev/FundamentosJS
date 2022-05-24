const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in number) {
    if(x == 5) {
        break // sai da repetição do bloco mais proximo
    }
    console.log(`${x} = ${number[x]}`)
}

for(y in number) {
    if(y == 5){
        continue // pula indice 5 e recomeça repetição
    }
    console.log(`${y} = ${number[y]}`) 
}

