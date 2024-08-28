
function executar(){

    //pegando os caras
    let numeroUm = document.getElementById("numeroUm");
    let numeroDois = document.getElementById("numeroDois");
    let numeroTres = document.getElementById("numeroTres");

    let valorNumeroUm = Number(numeroUm.value);
    let valorNumeroDois = Number(numeroDois.value);
    let valorNumeroTres = Number(numeroTres.value);

    let resultadoSoma = valorNumeroUm + valorNumeroDois + valorNumeroTres
    //alert(resultadoSoma)

    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = resultadoSoma
}

console.log("Entrou na página")