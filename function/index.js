let numeros = [[0,1,2], [4,5,6],[6,7,8]];

for(let i = 0;i<numeros.length;i++){
    let numeros=numeros[i];
}

for(let i in numeros){
    let numero = numeros[i];
}

for(let linha of numeros){
    console.log(`Elementos da linha ${linha}`)

    for(let elemento of linha){
        console.log(`Elemento: ${elemento}`)
    }
}
