// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selector = document.getElementById("horn-select");
  selector.addEventListener('input', function() {
    let img = document.getElementsByTagName("img")[0]
    img.setAttribute("src", `assets/images/${selector.value}.svg`);
    let audio = document.getElementsByTagName("audio")[0];
    audio.setAttribute("src", `assets/audio/${selector.value}.mp3`);
  });

  let slider = document.getElementById("volume")
  slider.addEventListener("input", function() {
    console.log(slider.value)
    let icon = document.getElementsByTagName("img")[1]
    if (slider.value == 0){
      icon.setAttribute("src", "assets/icons/volume-level-0.svg")
    } else if (slider.value < 33){
      icon.setAttribute("src", "assets/icons/volume-level-1.svg")
    } else if (slider.value < 67){
      icon.setAttribute("src", "assets/icons/volume-level-2.svg")
    } else {
      icon.setAttribute("src", "assets/icons/volume-level-3.svg")
    }
    let audio = document.getElementsByTagName("audio")[0];
    audio.setAttribute("volume", slider.value/100)
  });

  let playButton = document.getElementsByTagName("button")[0]
  playButton.addEventListener("click", function() {
    let audio = document.getElementsByTagName("audio")[0];
    audio.play()
    console.log(audio.src)
    if (audio.src.includes("party")){
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  })
}