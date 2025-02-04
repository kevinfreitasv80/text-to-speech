let speech = new SpeechSynthesisUtterance();

let voices = [];

const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  if (voices) {
    voices.forEach((voice, i) => {
      let option = document.createElement("option");
      option.textContent = voice.name;
      option.value = i;
      voiceSelect.appendChild(option);
    });
  } else {
    alert("Not have voices in your browser");
  }
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
