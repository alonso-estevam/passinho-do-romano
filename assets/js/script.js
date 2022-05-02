
var select = document.querySelector('#selection');
var cifraDeCesar = document.querySelector('#cifraDeCesar');

select.addEventListener('change', function () {
    if (select.value == 1) {
        key.style.display = 'flex';
    } else if (select.value == 2) {
        key.style.display = 'none';
    }
});

// Código para codificar mensagem na Cifra de César
var submit = document.querySelector('#btn');

submit.addEventListener('click', function (event) {
    // previne o comportamento de recarregar a página
    event.preventDefault();
    // se for cifra de césar...
    if (select.value == 1) {
        // pega a mensagem digitada
        var input = document.querySelector('#msg-input').value;
        console.log(input);
        // pega o número de passos e converte para number
        var key = Number(document.querySelector('#keyBox').value);
        console.log(key);
        // converte a string em array
        var arr = input.split('');
        var arrCharCode = arr.map(function (item) {
        // retorna o unicode dos itens do array
        return item.charCodeAt()
        })
        var newArrCharCode = arrCharCode.map(function (item) {
            if (item == 32) {
                // trata a questão do unicode do espaço
                return item = 32;
            } else {
                //retorna o novo unicode após a soma dos passos
                return (((item - 97) + key) % 26) + 97
            }
        })
        var codedArr = newArrCharCode.map(function (item) {
            // retorna o caractere correspondente ao novo unicode
            return String.fromCharCode(item);
        })
        // converte os itens do array codificados em uma única string
        var codedMsg = document.querySelector('#msg-output');
        // mostra a mensagem codificada
        codedMsg.value = codedArr.join('');
    } else {
        // pega a mensagem digitada
        var input = document.querySelector('#msg-input').value;
        
        // converte para base64
        var codedMsg = document.querySelector('#msg-output');
        
        // mostra a mensagem codificada
        codedMsg.value = btoa(input);
    }
})
