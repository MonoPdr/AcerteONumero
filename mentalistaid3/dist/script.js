var numeroSecreto = parseInt(Math.random() * 11);
var i = 0;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Você ACERTOU!!! O número secreto é " + numeroSecreto;
    console.log("Você ACERTOU!!!");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "INVALIDO. Você deve digitar um número entre 0 e 10! ";
    console.log("INVALIDO. Você deve digitar um número entre 0 e 10! ");
  } else if (i < 2) {
    i++;
    elementoResultado.innerHTML = "Tente Novamente";
    console.log("Tente Novamente");
  } else {
    elementoResultado.innerHTML =
      "Suas Tentativas Acabaram o número correto é " + numeroSecreto;
  }
}