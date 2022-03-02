//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão);


//Por favor, coloque a primeira letra como maiuscula!

let prato = "Macarrão"

//Por favor, defina o tempo de forno em:
var tempo = 22


switch (prato) {

    //Pipoca
    case "Pipoca":
        console.log("Sua escolha foi: Pipoca")
        if(tempo <=9){
            console.log("Porém, o tempo insuficiente!")
        } 
        else if(tempo >= 10 && tempo <= 19){
            console.log("Seu prato está pronto!")
        } 
        else if(tempo >=20 && tempo <= 29){
            console.log("Seu prato queimou!")
        } 
        else (tempo >= 30)
            console.log("KABUUUM!!!")

        break;

    //Macarrão
    case "Macarrão":
        console.log("Sua escolha foi: Macarrão")
        if(tempo <=7){
            console.log("Porém, o tempo insuficiente!")
        } 
        else if(tempo >= 8 && tempo <= 15){
            console.log("Seu prato está pronto!")
        } 
        else if(tempo >=16 && tempo <= 23){
            console.log("Porém, seu prato queimou!")
        } 
        else (tempo >=24)
            console.log("KABUUUM!!!")
        break;
    //Carne
    case "Carne":
            console.log("Sua escolha foi: Carne")
            if(tempo <=14){
                console.log("Porém, o tempo insuficiente!")
            } 
            else if(tempo >= 15 && tempo <= 29){
                console.log("Seu prato está pronto!")
            } 
            else if(tempo >=30 && tempo <= 44){
                console.log("Porém, seu prato queimou!")
            } 
            else (tempo >=45)
                console.log("KABUUUM!!!")
            break;
    //Feijão
    case "Feijão":
        console.log("Sua escolha foi: Feijão")
        if(tempo <=11){
            console.log("Porém, o tempo insuficiente!")
        } 
        else if(tempo >= 12 && tempo <= 23){
            console.log("Seu prato está pronto!")
        } 
        else if(tempo >=24 && tempo <= 35){
            console.log("Porém, seu prato queimou!")
        } 
        else (tempo >=36)
            console.log("KABUUUM!!!")
        break;
    
    //Brigadeiro
    case "Brigadeiro":
        console.log("Sua escolha foi: Brigadeiro")
        if(tempo <=7){
            console.log("Tempo insuficiente")
        } 
        else if(tempo >= 8 && tempo <= 15){
            console.log("Seu prato está pronto!")
        } 
        else if(tempo >=16 && tempo <= 23){
            console.log("Porém, seu prato queimou!")
        } 
        else (tempo >=24)
            console.log("KABUUUM!!!")
        break;

    //Prato inexistente
    default:
        console.log("Prato inexistente.")    
}


console.log("Prato pronto, tenha um bom apetite!")