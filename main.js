import { adicionandoCards } from "./public/script/card.js";

const botao = document.getElementById("botaoReproduzir");
botao.onclick = () => {
  let ideogramaEntrada = document.getElementById("entradaIdeograma").value;
  if (ideogramaEntrada.trim() != "") {
    adicionandoCards(ideogramaEntrada);
  } else {
    alert("Escreva algo!!");
  }
};
