// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = synth.getVoices()

  let select = document.getElementById("voice-select");
  voices.forEach(voice => {
    const newOption = document.createElement("option"); 
    newOption.textContent = voice.name
    select.appendChild(newOption)
  })

  

  let talkButton = document.getElementsByTagName("button")[0]
  let text = document.getElementById("text-to-speak").value
  const utter = new SpeechSynthesisUtterance(text)
  talkButton.addEventListener("click", function() {
    
    let selectedVoice = voices.find(voice => 
      voice.name == select.selectedOptions[0].textContent
    )
    utter.voice = selectedVoice
    synth.speak(utter)
  })

  let face = document.getElementsByTagName("img")[0]
  utter.addEventListener("start", function() {
    face.src = "assets/images/smiling-open.png"
  })

  utter.addEventListener("end", function() {
    face.src = "assets/images/smiling.png"
  })
  
}
