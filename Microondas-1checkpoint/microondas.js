// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

console.log(`
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 
    ESCOLHA SEU PRATO!!
`)



let prato =  "Bolo"
let tempo = "12s"
console.log(prato,tempo)

switch(tempo){

    //PIPOCA

        case 1, "10s":
            console.log( "Prato pronto, bom apetite!!!");
            break
        case 2, "20s":
            console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
            break
        case 3, "30s":
            console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
            break
    
   //MACARRÃO
        case 4, "8s":
              console.log( "Prato pronto, bom apetite!!!");
                break
        case 5, "16s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                break
        case 6, "24s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                break

    //CARNE
        case 7, "15s":
              console.log( "Prato pronto, bom apetite!!!");
                break
        case 8, "30s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                break
        case 9, "45s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                break


       //FEIJÃO   

        case 10, "12s":
            console.log( "Prato pronto, bom apetite!!!");
                    break
        case 11, "24s":
              console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                    break
        case 12, "36s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                    break

    //BRIGADEIRO
        case 13, "8s":
             console.log( "Prato pronto, bom apetite!!!");
                        break
         case 14, "16s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                        break
         case 15, "24s":
              console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                        break
                        

        default:(
            console.log("Tempo insuficiente!!")
    )    

        
}
