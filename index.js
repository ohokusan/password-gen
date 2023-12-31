let charactersAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let charactersNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let charactersSpecial = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
console.log(charactersAlphabet.length)
console.log(charactersNumbers.length)
console.log(charactersSpecial.length)
let passwordLength = 15;
let password1El = document.querySelector("#password1-el")
let password2El = document.querySelector("#password2-el")
let btnNumbersEl = document.querySelector("#btn-numbers-el")
let btnCharsEl = document.querySelector("#btn-chars-el")

function generatePasswords() {
    let lengthEl = document.querySelector("#password-length-el")
    if (lengthEl.value === "") {
        lengthEl.value = 15
    }
    console.log(lengthEl.value)
    passwordLength = lengthEl.value
    password1El.textContent = generator()
    password2El.textContent = generator()
}

function generator() {
    let password = ""
    if (btnNumbersEl.classList.contains("active") && btnCharsEl.classList.contains("active")) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersAlphabet.concat(charactersNumbers, charactersSpecial)[getRandomChar(91)]
        }
        return password
    }
    if (btnNumbersEl.classList.contains("active") && !btnCharsEl.classList.contains("active")) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersAlphabet.concat(charactersNumbers)[getRandomChar(62)]
        }
        return password
    }
    if (!btnNumbersEl.classList.contains("active") && btnCharsEl.classList.contains("active")) {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersAlphabet.concat(charactersSpecial)[getRandomChar(81)]
        }
        return password
    } else {
        for (let i = 0; i < passwordLength; i++) {
            password += charactersAlphabet[getRandomChar(52)]
        }
        return password
    }
}

function getRandomChar(amount) {
    return Math.floor(Math.random() * amount)
}

function copyToClipboard(element) {
    if (element === "first" && password1El.value !== "") {
        password1El.style.color = "rgba(213, 212, 216, 0.71)"
        password1El.style.border = "1px solid #D5D4D8"
        password1El.value = password1El.textContent
        password1El.textContent = "Copied!"
        navigator.clipboard.writeText(password1El.value);
        setTimeout(function(){
            password1El.style.color = "#55F991"
            password1El.style.border = "1px solid #273549"
            password1El.textContent = password1El.value
       }, 1000);
    } else if (element === "second" && password2El.value !== "") {
        password2El.style.color = "rgba(213, 212, 216, 0.71)"
        password2El.style.border = "1px solid #D5D4D8"
        password2El.value = password2El.textContent
        password2El.textContent = "Copied!"
        navigator.clipboard.writeText(password2El.value);
        setTimeout(function(){
            password2El.style.color = "#55F991"
            password2El.style.border = "1px solid #273549"
            password2El.textContent = password2El.value
       }, 1000);
}
}

function toggleSettings(setting) {
    if (setting === "numbers") {
        btnNumbersEl.classList.toggle("active")
    } else if (setting === "chars") {
        btnCharsEl.classList.toggle("active")
    }
}
// document.getElementById("myText").value = "Johnny Bravo";

