function calculaCondicoes() {
var veiculo = document.getElementById("veiculo").value;
var valor = parseInt(document.getElementById("valor").value);
var entrada = parseInt(document.getElementById("entrada").value);
var parcelas = parseInt(document.getElementById("parcelas").value);
var elementoResultadoPorcentagem = document.getElementById("resultadoPorcentagem");
var elementoResultadoParcelas = document.getElementById("resultadoParcelas");

var diferenca = (entrada - 100) * -1;
var percentual = diferenca + entrada;
var percBase = valor/percentual;
var resultadoEntrada = percBase * entrada;

var valorParcela = (valor - resultadoEntrada) / parcelas;

if (entrada >= 30 && entrada <= 90){
    elementoResultadoPorcentagem.innerHTML = "<div><h4>O valor da entrada de " + veiculo + " será de R$" + resultadoEntrada + ". </h4></div>";
} else {
    elementoResultadoPorcentagem.innerHTML = "<div><h4>O valor não está de acordo com as regras. Financiamento negado.</h4></div>";
}

if (parcelas >= 3 && parcelas <= 24){
    elementoResultadoParcelas.innerHTML = "<div><h4>O valor das " + parcelas + " parcelas de " + veiculo + " serão de R$" + valorParcela + ". </h4></div>";
} else {
    elementoResultadoParcelas.innerHTML = "<div><h4>O valor não está de acordo com as regras. Financiamento negado.</h4></div>";
}

var botaoReset = (document.getElementById("btnReset").disabled = false);
}

function resetCondicoes() {
var elementoResultadoPorcentagem = document.getElementById("resultadoPorcentagem");
var elementoResultadoParcelas = document.getElementById("resultadoParcelas");

elementoResultadoPorcentagem.innerHTML = "";
elementoResultadoParcelas.innerHTML = "";
document.getElementById("veiculo").value = "";
document.getElementById("valor").value = "";
document.getElementById("entrada").value = "";
document.getElementById("parcelas").value = "";

var botaoReset = (document.getElementById("btnReset").disabled = true);
}