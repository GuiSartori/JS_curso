Math.max(75,1000,15) //Função nativa da biblioteca Math que retorna o maior valor

function maiorNum(num1, num2, num3) { //Define função que recebe 3 parâmetros
    if (num1 > num2 && num1 > num3) { //Estrutura condicional que verifica se num1 > num2 e num1 > num3
        return num1;  //Retorna o valor de num1 para a função
    } 
    else if (num2 > num1 && num2 > num3) { //Estrutura condiciona que verifica se num2 é o maior entre os três números
        return num2; 
    }
    else {
        return num3; //retorna num3 caso as condicionais anteriores sejam FALSE
    }
}

console.log(maiorNum(75, 1000, 15))