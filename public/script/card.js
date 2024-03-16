import { reproduzirSom } from "./mandarim.js";

let cards = [];
export function adicionandoCards(palavra) {
  cards.push({ ideograma: palavra });
  atualizarCards();
}
function atualizarCards() {
  let listaCards = document.querySelector(".lista");
  listaCards.innerHTML = "";
  cards.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("listaCards");
    //Palavra digitada
    let ideograma = document.createElement("h1");
    ideograma.classList.add("ideograma");
    ideograma.innerText = item.ideograma;
    card.appendChild(ideograma);
    //velocidade
    let velocidadeFalaCard = document.createElement("input");
    velocidadeFalaCard.setAttribute("type", "range");
    velocidadeFalaCard.setAttribute("class", "velocidadeFalaCard");
    velocidadeFalaCard.setAttribute("min", "0.5");
    velocidadeFalaCard.setAttribute("max", "2");
    velocidadeFalaCard.setAttribute("step", "0.1");
    velocidadeFalaCard.setAttribute("value", "1.0");
    velocidadeFalaCard.setAttribute("title", "Selecione a velocidade de fala");
    velocidadeFalaCard.setAttribute(
      "placeholder",
      "Selecione a velocidade de fala"
    );
    card.appendChild(velocidadeFalaCard);
    //Botão
    let botao = document.createElement("button");
    botao.classList.add("botao");
    botao.innerText = "Ouvir Som";
    card.appendChild(botao);
    console.log(card);
    listaCards.appendChild(card);
    botao.addEventListener("click", () => {
      reproduzirSom(item.ideograma, velocidadeFalaCard.value);
    });
  });
}
