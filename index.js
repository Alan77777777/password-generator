const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
let pass1 = []
let password1
let pass2 = []
let password2
let pass1Box = document.getElementById('firstPass')
let pass2Box = document.getElementById('secondPass')
let length
let passwordLength
let symbol
let symbolStatus

function generate() {
    symbol = document.getElementById('symbols')
    length = document.getElementById('length').value
    passwordLength = length
    pass1 = []
    pass2 = []
    if (symbol.checked == true) {
        symbolStatus = 'ON'
        characters.splice(62, 29, "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
            "/")
    } else {
        symbolStatus = 'OFF'
        characters.splice(62, 29)
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.round(Math.random() * characters.length)
        let randomNumber2 = Math.round(Math.random() * characters.length)
        pass1.push(characters[randomNumber])
        pass2.push(characters[randomNumber2])
    }
    password1 = pass1.join("")
    password2 = pass2.join("")
    console.log(`PASSWORDS GENERATED\nPASSWORDS LENGTH: ${length}\nSYMBOLS: ${symbolStatus}\nPassword 1: ${password1}\nPassword 2: ${password2}`)
    pass1Box.innerText = password1
    pass2Box.innerText = password2

}

let pas1 = document.getElementById('pass1')
let pas2 = document.getElementById('pass2')


function copy1() {
    navigator.clipboard.writeText(password1)
    window.alert(`Password ${password1} copied correctly`)
}

function copy2() {
    navigator.clipboard.writeText(password2)
    window.alert(`Password ${password2} copied correctly`)
};