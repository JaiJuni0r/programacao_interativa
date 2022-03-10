// ----------------- COM FOR -----------//

var somarArray = [1,2,3];
var soma= 0;

for(var i = 0; i < somarArray.length; i++){
    soma += somarArray[i];
}

console.log(soma)

// ----------------- SEM FOR -----------//

var somarArray = [-5,100];

var soma = somarArray.reduce(function(soma, i){
    return soma + i;
});


console.log(soma)


// ------------------------------------------//

