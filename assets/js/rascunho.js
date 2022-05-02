// PRIMEIRA TENTATIVA

/* let vowels = ['a','e','i','o','u'];

let key = 2 // essa variável receberá o input do user para o incremento
let positionParameter = 4 - (key-1) // configura o primeiro parâmetro da .splice() para remover os elementos. A posição do parâmetro nesse caso é 4 porque é o último índice desse array de cinco elementos.
let last = vowels.splice(positionParameter,key).toString() // remove os n últimos elementos. Nesse caso, imprime o,u (string)


vowels.splice(0,0,last) // adiciona os elementos retirados das últimas posições no começo do array. 


console.log(vowels); // array com os elementos reordenados de acordo com a chave
*/
// problema: os elementos reordenados estão agrupados como uma única string
// -----------------------------------------------------------------


// // SEGUNDA TENTATIVA

// // variável que recebe a mensagem digitada (em string)
// let msg = 'abcdefeghijklmnopqrstuvwxyz';
// let key = 2; // variável que recebe o passo

// // converte a mensagem em array
// let msgArr = msg.split('');

// // retorna o unicode de cada item do array
// let arrCharCode = msgArr.map(function(item) {
//     return item.charCodeAt()
// })                          

// let arrCharCodeAddKey = arrCharCode.map(function (item) {
//     // se o unicode do elemento for maior que 122, ou seja, 
//     // se deixar de ser uma letra minúscula...
//     if (item + key > 122) {
//         // se o valor do unicode for 122 (letra z)...
//         if (item == 122) {
//             // declare a variável 'remainder' igual a zero, de
//             // modo que o unicode avance apenas o número de passos (key)
//             let remainder = 0; 
//             return (96 + key) - remainder; //previne o bug do z   
//         } else {
//             // se não for a letra z, considere o 'remainder' como 
//             // a soma do unicode com a chave menos o último valor 
//             // do unicode (ou seja, 122)
//             let remainder = (item + key) - 122;
//             // se for 1 passo, y (121) vira z (122), se for 2,
//             // y (121) vira a (97), e assim por diante...
//             return (96 + key) - remainder;
//         }
//     // caso o unicode do elemento esteja dentro do alfabeto minúsculo
//     // (97 a 122), apenas some com o valor do passo
//     } else {
//         return item + key   // retorna o unicode + o valor da chave
//     }
          
// }) 

// let codedArr = arrCharCodeAddKey.map(function (item) {
//     // retorna o caractere correspondente ao novo unicode
//     return String.fromCharCode(item);
// })                          

// // junta os itens do array e os retorna em uma única string
// let codedMsg = codedArr.join(''); 

// console.log(codedMsg);
//--------------------------------------------------------------

// TERCEIRA TENTATIVA

var vowels = ['a','e','i','o','u'];

var key = 3 // essa variável receberá o input do user para o incremento
var positionParameter = 4 - (key-1) // configura o primeiro parâmetro da .splice() para remover os elementos. A posição do parâmetro nesse caso é 4 porque é o último índice desse array de cinco elementos.
var last = vowels.splice(positionParameter,key).toString() // remove os n últimos elementos. Nesse caso, imprime o,u (string)

var newVowels = [...last,...vowels]; // fusão de arrays com spread syntax

//vowels.splice(0,0,last) // adiciona os elementos retirados das últimas posições no começo do array. 

//var newVowelsWithoutComma = newVowels.filter((item, i) => newVowels.indexOf(item) === i);

function removeComma (arr) {
    for (i = 0; i <= arr.length; i++) {
        let index = arr.indexOf(',');
        if (index > -1) {
            newArr = arr.splice(index,1);
        }
    }
    return arr;
}

console.log(removeComma (newVowels)); // finalmente, resolveu o bug das vírgulas

//console.log(newVowels); // array com os elementos reordenados de acordo com a chave
// estava imprimindo assim:
/* [
  'i', ',', 'o',
  ',', 'u', 'a',
  'e'
]
*/