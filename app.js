// let number = Math.floor(Math.random() * 51);
// let hint = document.getElementById("text");
// let button = document.getElementsByClassName("button1");
// let count = 0;


// function onSubmit(e) {
//     e.preventDefault();

//     let guess = document.getElementById("guess").value;
//     if (guess > number) {
//         count++;
//         guess.value = "";
//         hint.textContent = "OOPS!!! Try a smaller number";
//         button.innerText = "Guess Again";
//         // alert("OOPS WRONG!!! Try a smaller number");
//     }
//     else if (guess < number) {
//         count++;
//         guess.value = "";
//         hint.textContent = "OOPS WRONG!!! Try a greater number";
//         button.innerText = "Guess Again";
//         // alert("OOPS WRONG!!! Try a greater number");
//     }
//     else {
//         count++;
//         hint.textContent = "CONGRATULATION!! You have guessed in " + count + " guess.";
//         button.innerText = "Well Done";
//         button.classList.add(".hidden");
//         // alert("CONGRATULATION!! You have guessed in " + count + " guess.");
//     }
// }

// document.querySelector(".button1").addEventListener("click", onSubmit);


let number = Math.floor(Math.random() * 50) + 1;
let hint = document.getElementById("text");
let button = document.querySelector(".button1");
let count = 0;
let isGameOver = false;

function onSubmit(e) {
    e.preventDefault();

    if (isGameOver) {
        // Game is already over, do nothing
        return;
    }

    let guessInput = document.getElementById("guess");
    let guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        // Check if the input is a valid number
        hint.textContent = "Please enter a number between 1 and 50";
        return;
    }

    count++;

    if (guess > number) {
        hint.textContent = "Oops! Try a smaller number.";
        button.value = "Guess Again";
    } else if (guess < number) {
        hint.textContent = "Oops! Try a greater number.";
        button.value = "Guess Again";
    } else {
        hint.textContent = "Congratulations! You guessed the number in " + count + " guesses.";
        isGameOver = true;
        // guessInput.value = ""; // Clear the input field
        button.value = "Well Done";
        button.disabled = true;
    }

}

button.addEventListener("click", onSubmit);
