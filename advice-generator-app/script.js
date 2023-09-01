const adviceDisplay = document.querySelector("p");
const adviceId = document.querySelector("span");
const btn = document.querySelector("button");

const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => {
        adviceDisplay.innerHTML = '"' + json.slip.advice + '"'
        adviceId.innerHTML = "#" + json.slip.id
    }).catch((err) => console.error(err))
}

getAdvice();

btn.addEventListener("click", () => {
    getAdvice();
});