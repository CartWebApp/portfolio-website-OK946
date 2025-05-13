let root = document.querySelector(':root');

if(document.getElementById(`bird`)){document.getElementById(`bird`).addEventListener(`click`, () => playAudio(`/audio/bird.mp3`))}

if(document.getElementById(`myName`)){
  webOn();
  resOn();
  aboOn();
}

function webOn() {
  document.getElementById(`test`).addEventListener(`click`,() =>{
    document.getElementById(`homeWeb`).classList.toggle(`moveOne`);
    root.style.setProperty('--homeWeb', '1');
  });
}

function resOn() {
  document.getElementById(`test`).addEventListener(`click`,() =>{
    document.getElementById(`homeRes`).classList.toggle(`moveOne`);
    root.style.setProperty('--homeRes', '1');
  })
}

function aboOn() {
  document.getElementById(`test`).addEventListener(`click`,() =>{
    document.getElementById(`homeAbo`).classList.toggle(`moveOne`);
    root.style.setProperty('--homeAbo', '1');
  })
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