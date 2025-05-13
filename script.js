let root = document.querySelector(':root');

if(document.getElementById(`bird`)){document.getElementById(`bird`).addEventListener(`click`, () => playAudio(`/audio/bird.mp3`))}

if(document.getElementById(`myName`)){
  document.getElementById(`homeWeb`).addEventListener(`mouseover`, webOn);
  document.getElementById(`homeRes`).addEventListener(`mouseover`, resOn);
  document.getElementById(`homeAbo`).addEventListener(`mouseover`,aboOn)
}

function webOn() {
  document.getElementById(`homeWeb`).classList.toggle(`moveOne`);
  root.style.setProperty('--homeWeb', '1');
  document.getElementById(`homeWeb`).removeEventListener(`mouseover`, webOn);
}

function resOn() {
  document.getElementById(`homeRes`).classList.toggle(`moveOne`);
  root.style.setProperty('--homeRes', '1');
  document.getElementById(`homeRes`).removeEventListener(`mouseover`, resOn);
}

function aboOn() {
  document.getElementById(`homeAbo`).classList.toggle(`moveOne`);
  root.style.setProperty('--homeAbo', '1');
  document.getElementById(`homeAbo`).removeEventListener(`mouseover`,aboOn)
}


function playAudio(audio) {
  let sound = new Audio(audio);
  sound.play();
  console.log(`Audio Played!`)
}

let slideIndex = 1;
if(document.getElementById("slideshowContainer")){
  showSlides(slideIndex);
}
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("writingSlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}