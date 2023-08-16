const btnElement = document.getElementById("submitButton")

const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0
const inputElement = document.getElementById("guessField")


btnElement.addEventListener("click", ()=>{
    
    const inputValue = inputElement.value
    guesses += 1

    if (inputValue == answer) {
        alert(`${answer} is the number. it took you ${guesses} guesses`)
    } else if (inputValue < answer) {
        alert("Too small")
    } else {
        alert("Too big")
    }
    
})