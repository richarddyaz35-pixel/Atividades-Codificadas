function gerarTabuada() {

    let numero = document.getElementById("numero").value;

    let resultado = document.getElementById("resultado");

    // Caso o Usuario digite outra coisa
    if (numero === "") {
        resultado.innerHTML = "<p>⚠️ Você sabe que isso não é um Número. Por favor digite um número!</p>";
        return;
    }

    // Criar a tabuada em formato de lista
    let tabuada = "<h2>Tabuada do " + numero + "</h2><ul>";

    // Laço de 1 até 10 para gerar a tabuada
    for (let i = 1; i <= 10; i++) {
        tabuada += "<li>" + numero + " x " + i + " = " + (numero * i) + "</li>";
    }

    tabuada += "</ul>";
    resultado.innerHTML = tabuada;
}
