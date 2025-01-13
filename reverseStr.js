function reverseStr(str) { //Função para reverter a string

    let arrayChar = str.split('') //Separa os caracteres da string e armazena-os em um array

    let reversedArrayChar = arrayChar.reverse() //Inverte a ordem dos elementos do array

    let reversedString = reversedArrayChar.join('') //Junta os elementos do array em uma nova string

    return reversedString //Retorna da função a string invertida
}

console.log(reverseStr('DRACULA')) //Imprimindo a string invertida