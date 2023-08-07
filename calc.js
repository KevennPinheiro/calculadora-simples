var txt1;
var txt2;
var n1;
var n2;
var resp;

function somar() {
    ler();
    var r = n1 + n2;
    resp.innerHTML = `A soma de ${n1} + ${n2} é igual a ${r} <br>`; //innerHTML:  define ou retorna o conteúdo HTML de um elemento
}

function subtrair() {
    ler();
    var r = n1 - n2;
    resp.innerHTML = `A subtração de ${n1} - ${n2} é igual a ${r} <br>`;
}

function multiplicar() {
    ler();
    var r = n1 * n2;
    resp.innerHTML = `A multiplicação de ${n1} * ${n2} é igual a ${r} <br>`;
}

function dividir() {
    ler();
    if (n2 != 0) {
        var r = n1/n2;
        resp.innerHTML = `A divisão de ${n1} / ${n2} é igual a ${r}`;
    }
    else {
        resp.innerHTML = `Não existe divisão por zero`;
    }
}

function ler() {
    // Faço a leitura dos elementos que eu preciso da tela
    txt1 = window.document.getElementById('txtn1').value;
    txt2 = window.document.getElementById('txtn2').value;
    resp = window.document.getElementById('resposta');

    n1 = Number(txt1);
    n2 = Number(txt2);
    resp.style.textAlign = "center"
}

function limpar() {
    txtn1.value = " ";
    txtn2.value = " ";
    txtn1.focus() //Muda o foco para esse objeto. Nesse caso, o cursor vai para ele

}