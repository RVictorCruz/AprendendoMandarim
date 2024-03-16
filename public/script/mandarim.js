export function reproduzirSom(ideograma, velocidade) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = ideograma;
  speech.rate = velocidade;
  speech.lang = "zh-Hans";
  speech.voice = speechSynthesis
    .getVoices()
    .find((voice) => voice.lang === "zh-CN");
  speechSynthesis.speak(speech);
}
