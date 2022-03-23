// let = "Lucas";
// let = "Fulano";
// let = "Ciclano";

// let nome = ["Lucas", "Fulano", "Ciclano"];

// nomes.length

// nomes[0]
// nomes[1]
// nomes[2]

// let meuArray = [1,2,"Texto",true];
// let matriz = [ 
//     [2,3,1],
//     [0,4,6],
//     [0,5,0]
//  ];
//  matriz[0][0];
//  matriz[0][1];
//  matriz[2][2];


 let notas = [];
  notas.push(1,2,3);
 console.log(notas);
 notas.push(6.5);
 console.log(notas);
 // Unshift- Coloca o elemento como a primeira parte do array
 notas.unshift(7.5);
 console.log(notas);


 // .pop- Remove o elemento do array, 
 let elementoRemovido = notas.pop();
 console.log(elementoRemovido);
 console.log(notas);
 elementoRemovido = notas.shift();
 console.log(elementoRemovido);
 console.log(notas);


 const nomeUsuario = "Fulano"
 let nomeEsobrenome = nomeUsuario.split("Fulano");
 console.log(nomeEsobrenome);

 if(nomeEsobrenome.length > 1){
     console.log("Preencheu nome e sobrenome")
 } else {
     console.log("Nome inválido!");
 }

const arr = [0,1,2];
arr[0] = 20;
arr.push(20);
console.log(arr);
arr[4] = 25;
arr[4] = 25;
console.log(arr);

console.log("---------------------------------------------------")
//---------------------ATIVIDADE-------------------------------------------------------------------------
// Fernando Oliveira
// Jailson Junior
// Luanderson Silva

let beleza=["Shampoo", "Sabonete", "Condicionador"];
beleza.push("Perfume");

let alimentos=["Feijão", "Arroz","Coquinha"];
let removerCoquinha = alimentos.pop();
console.log(removerCoquinha);
console.log(alimentos);

let removerFeijao = alimentos.shift();
console.log(removerFeijao);
console.log(alimentos);

alimentos.unshift("Miojo","Guarana Antartica");
console.log(alimentos);

console.log("Seus produtos foram exibidos!");

let cores = ["Azul", "Branco", "Vermelhor", "Verde"];
console.log(cores.join());
console.log(cores.join(" * "));