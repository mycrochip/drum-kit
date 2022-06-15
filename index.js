const soundLocations = {
"w": "./sounds/crash.mp3", 
"a": "./sounds/snare.mp3", 
"s": "./sounds/tom-1.mp3", 
"d": "./sounds/tom-2.mp3", 
"j": "./sounds/tom-3.mp3", 
"k": "./sounds/tom-4.mp3", 
"l": "./sounds/kick-bass.mp3"
}

const buttons = document.querySelectorAll("button.drum")

buttons.forEach((button) => {
    button.addEventListener("click", handleClick)
    document.addEventListener("keydown", handleKeyDown)
});

function handleClick (event) {
    const text = event.currentTarget.textContent
    playAudioOf(text)
}

function handleKeyDown (event) {
    const key = event.key
    playAudioOf(key)
}

function playAudioOf (char) {
    const soundLocation = soundLocations[`${char}`]
    const audioFile = new Audio(soundLocation)
    audioFile.play()

    animateButtonOf(char)
}

function animateButtonOf (letter) {
    const activeButton = document.querySelector(`.${letter}`)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
}