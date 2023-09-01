const btn = document.querySelector("button");

const dayInput = document.querySelector("#d")
const monthInput = document.querySelector("#m")
const yearInput = document.querySelector("#y")

const yearDisplay = document.getElementById("year")
const monthDisplay = document.getElementById("month")
const dayDisplay = document.getElementById("days")
let resYears = 0;
let resMonths = 0;
let resDays = 0;


const calculate  = (d, m, y) => {
    const today = new Date(); // today's date
    const resYears = today.getFullYear() - y
    const resMonths = (resYears * 12) - (12 - m)
    const resDays = (resMonths * 30) - d
    return {
        days: resDays,
        months: resMonths,
        years: resYears,
    }
}

btn.addEventListener("click", () => {
    const result = calculate(dayInput.value, monthInput.value, yearInput.value);
    yearDisplay.innerHTML = result.years
    monthDisplay.innerHTML = result.months
    dayDisplay.innerHTML = result.days
});

