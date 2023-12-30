const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15;
let password1El = document.querySelector("#password1-el")
let password2El = document.querySelector("#password2-el")

function generatePasswords() {

    password1El.textContent = generator()
    password2El.textContent = generator()
}

function generator() {
    let password = ""
    for (let i = 0; i < passwordLength; i++){
        password += characters[getRandomChar()]
    }
    return password
}

function getRandomChar() {
    return Math.floor(Math.random() * characters.length)
}

// document.getElementById("myText").value = "Johnny Bravo";

