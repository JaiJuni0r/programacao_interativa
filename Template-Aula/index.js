
// let nome = 'teste';
// let idade = 60
// console.log(" O seu nome é: " + nome + " e a idade é: " + idade);

// console.log(`O seu nome é ${nome} e a idade é: ${idade}`);

// let nomes = ["Fulano", "Ciclano", "Beltrano", "Lucas", "Teste"];
// let html = `
//     <h1> Minha lista de nomes </h1>
// `;

// for(let i = 0;i < nomes.length;i++){
//     const nome = nomes[i];
//     html = html + '<li>' + nomes + '<li>'
// }
// html = html + '</ol>';

// console.log(html);


//--------------------------------------------------
let filmes= ["star wars", "totoro",  "rocky", 
"pulp fiction",  "a vida é bela"];

function converteMaiusculas(array){
for (let i = 0; i <  array.length; i++){
    array[i] = array[i].toUpperCase();
}
return array
}
console.log (converteMaiusculas(filmes));