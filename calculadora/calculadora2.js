// Calculadora- Nivel 1

function adicionar(num1, num2){
    return num1+num2
}

function subtracao(num1, num2){
    return num1-num2
}

function multiplicacao(num1, num2){
    return num1*num2
}

function divisao(num1, num2){
    return num1/num2
}

function errodivi(num1, num2){
    return num1/num2
}

//Calculadora- Nivel 2

console.log("--------- Testando operações ---------")

let resultadicao = adicionar(8,4)
console.log("O resultado da sua adição é: " + resultadicao)

let resultsubt = subtracao(8,4)
console.log("O resultado da sua subtração é: " + resultsubt)

let resultmulti = multiplicacao(8,4)
console.log("O resultado da sua multiplicação é: " + resultmulti)

let resultdivi = divisao(8,4)
console.log("O resultado da sua divisão é: " + resultdivi)

let resulterrodivi = errodivi(8,0)
console.log("O resultado (errado) da sua divisão é: " + resulterrodivi)

//Calculadora- Parte 3

function quadradoDoNumero(num1){
    return multiplicacao(num1,num1)
}

console.log("O seu numero ao quadrado é: " + quadradoDoNumero(8))
    

function mediaDeTresNumeros(num1,num2,num3){
    let soma1 = adicionar(num1,num2)
    let soma2 = adicionar(soma1,num3)
    return divisao(soma2,3)
}

console.log("O resultado da sua média é: " + mediaDeTresNumeros(8,8,8))

function calculaporcentagem(num1,num2){
    let porcentagem1 = divisao(num1,100)
    return multiplicacao(porcentagem1,15)
}

console.log("A sua porcentagem é: " + calculaporcentagem(150,15)+ "%.")

function geradorDePorcentagem(num1,num2){
    let porcentagem1 = divisao(num1,100)
    return multiplicacao(porcentagem1,10)
}

console.log("A porcentagem gerada foi: " + geradorDePorcentagem(150,10)+ "%")
