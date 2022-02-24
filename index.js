console.log("hello")
var apiUrl = "https://api.adviceslip.com/advice";
var diceBtn = document.getElementById("dice");
var adviceQuote = document.getElementById("quote");
var adviceNumber = document.getElementById("advice");

diceBtn.addEventListener("click", generateAdvice);

function generateAdvice() {

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {

    adviceQuote.innerText = `"${data.slip.advice}"`;
    adviceNumber.innerText = `ADVICE #${data.slip.id}`
    })
    .catch(err => err)
}