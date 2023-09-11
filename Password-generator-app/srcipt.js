const passwordDisplay = document.querySelector("input")
const progressBar = document.querySelector("input[type='range']")
const CharacterLen = document.querySelector("#len")
const btn = document.querySelector("input[type='button']");
const copyBtn = document.querySelector("img");
const checkBoxes = document.querySelectorAll("input[type='checkbox']");


const uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
const lowercaseChars = ["a","b", "c", "d","e","f","g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v" ,"w" ,"x" ,"y" ,"z"];
const numbersChars = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolChars = ["!","@","#","$","%","^","&","*","(",")","_"," +","-","=", "[", "]","{","}","|", ";",":","/",",",".","<",">","?"]

progressBar.value = 10 // initial value
CharacterLen.innerHTML = 10

progressBar.addEventListener("input", (e) => {
    CharacterLen.innerHTML = e.target.value
});

btn.addEventListener("click", () => {
    if(getOption().length === 0) alert("Please Include one option at least !");
    else passwordDisplay.value = generatePassword(parseInt(CharacterLen.innerHTML))
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.value);
    alert("Copied");
})




const generatePassword = (charLen) => {
    let res = "";
    const pool = getOption();
    for(var i = 0; i < charLen; i++) {
        res +=  pool[Math.floor(Math.random() * pool.length)]
        }
    return res
}


const getOption = () => {
    const pool = []
    if(checkBoxes[0].checked) pool.push(...uppercaseChars)
    if(checkBoxes[1].checked) pool.push(...lowercaseChars)
    if(checkBoxes[2].checked) pool.push(...numbersChars)
    if(checkBoxes[3].checked) pool.push(...symbolChars)
    return pool
}