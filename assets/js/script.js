var body = document.querySelector('body')
// variável para criar imagem ao lado do botão
var img = document.createElement('img');
// quando carregar a página...
body.onload = function () {
    img.src = 'assets/img/wait.png';
    // cria a imagem como filha da div do botão principal
    divBtn.append(img);
    submit.innerText = "esperando..."
    if (img == true) {
        divBtn.replace(img,img);
    }
}

// pega o id do input:radio "codificar"
var code = document.querySelector('#code');
// pega o id do input:radio "decodificar"
var decode = document.querySelector('#decode');
// pega o id do botão type:submit
var submit = document.querySelector('#btn');
// pega o id da div que contém o botão principal (submit)
var divBtn = document.querySelector('#btn-submit');


// Funções para mudar o texto do botão conforme o radio button
// radio button codificar
code.addEventListener('click', function () {
    submit.innerText = "codificar mensagem!";
    img.src = 'assets/img/closed.png';
    // cria a imagem como filha da div do botão principal
    divBtn.append(img);
    // previne que a imagem seja duplicada
    if (img == true) {
        divBtn.replace(img,img);
    }
})
// radio button decodificar
decode.addEventListener('click', function () {
    submit.innerText = "decodificar mensagem!";
    // variável para substituir a imagem ao lado do botão
    img.src = 'assets/img/open.png';
    // cria a imagem como filha da div do botão principal
    divBtn.append(img);
    // previne que a imagem seja duplicada
    if (img == true) {
        divBtn.replace(img,img);
    }
})

// botão resetar
var reset = document.querySelector('#btn-reset');
reset.addEventListener ('click', function () {
    img.src = 'assets/img/wait.png';
    // cria a imagem como filha da div do botão principal
    divBtn.append(img);
    submit.innerText = "esperando..."
    if (img == true) {
        divBtn.replace(img,img);
    }
})

// pega o id do elemento select
var select = document.querySelector('#selection');
// pega o id da option 'Cifra de César
var cifraDeCesar = document.querySelector('#cifraDeCesar');

// Função para inserir os passos somente se escolher 'cifra de césar'
select.addEventListener('change', function () {
    if (select.value == 1) {
        key.style.display = 'flex';
    } else if (select.value == 2) {
        key.style.display = 'none';
    }
});

// CÓDIGO PRINCIPAL    
// Codificar / Decodificar
submit.addEventListener('click', function (event) {
    // previne o comportamento de recarregar a página
    event.preventDefault();
    // 1) se for para CODIFICAR...
    if (code.checked == true) {
        // 1.1) se for cifra de césar...
        if (select.value == 1) {
            // pega a mensagem digitada
            var input = document.querySelector('#msg-input').value;
            // pega o número de passos e converte para number
            var key = Number(document.querySelector('#keyBox').value);
            // previne o erro de não colocar número ou colocar acima de 25
            if (key < 1 || key > 25) {
                alert("Informe um número de passinhos entre 1 e 25")
            } else {
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
                        // para letras maiúsculas
                    } else if (item >= 65 && item <= 90) {
                        //retorna o novo unicode após a soma dos passos
                        return (((item - 65) + key) % 26) + 65;
                        // para letras minúsculas
                    } else if (item >= 97 && item <= 122) {
                        //retorna o novo unicode após a soma dos passos
                        return (((item - 97) + key) % 26) + 97;
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
            } 
         // 1.2) se for base64...
        } else if (select.value == 2) {
            // pega a mensagem digitada
            var input = document.querySelector('#msg-input').value;

            // define uma variável para mostrar o resultado
            var codedMsg = document.querySelector('#msg-output');

            // codifica em base64 e armazena na variável que será exibida
            codedMsg.value = btoa(input);
        }

    // 2) se for para DECODIFICAR...
    } else if (decode.checked == true) {
        // 2.1) se for cifra de césar...
        if (select.value == 1) {
            // pega a mensagem digitada
            var input = document.querySelector('#msg-input').value;

            // pega o número de passos e converte para number
            var key = Number(document.querySelector('#keyBox').value);

            if (key < 1 || key > 25) {
                alert("Informe um número de passinhos entre 1 e 25")
            } else {
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
                        // para letras maiúsculas
                    } else if (item >= 65 && item <= 90) {
                        //retorna o unicode decodificado
                        return (((item - 65) - (key - 26)) % 26) + 65;
                        // para letras minúsculas
                    } else if (item >= 97 && item <= 122) {
                        // retorna o unicode decodificado
                        return (((item - 97) - (key - 26)) % 26) + 97;
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
            }

        // 2.2) se for base64
        } else {
            // pega a mensagem codificada
            var input = document.querySelector('#msg-input').value;

            // cria uma variável para armazenar o resultado
            var codedMsg = document.querySelector('#msg-output');

            // decodifica e mostra o resultado
            codedMsg.value = atob(input);
        }
    // 3) se não selecionar nada...
    } else {
        alert ("Selecione codificar ou decodificar!")
    }
})
