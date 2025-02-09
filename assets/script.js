let speech = new SpeechSynthesisUtterance();
let voices = [];

const voiceSelect = document.querySelector("select");

function loadVoices() {
  voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) {
    setTimeout(loadVoices, 100);
    return;
  }

  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    let option = document.createElement("option");
    option.textContent = voice.name;
    option.value = i;
    voiceSelect.appendChild(option);
  });
}

loadVoices();

window.speechSynthesis.onvoiceschanged = loadVoices;

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
