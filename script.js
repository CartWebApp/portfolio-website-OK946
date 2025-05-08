document.getElementById(`bird`).addEventListener(`click`, () => {
    playAudio(`/audio/bird.mp3`)
})


function playAudio(audio) {
    let sound = new Audio(audio);
    sound.play();
    console.log(`Audio Played!`)
}