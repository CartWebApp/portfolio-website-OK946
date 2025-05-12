if(document.getElementById(`bird`)){document.getElementById(`bird`).addEventListener(`click`, () => playAudio(`/audio/bird.mp3`))}

if(document.getElementById(`myName`)){
  document.getElementById(`homeAbo`).addEventListener(`wheel`,() =>{
    setInterval(()=>document.getElementById(`homeAbo`).style.opacity = 1, 5)
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

function moveWeb(){

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