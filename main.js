let form = document.getElementById("form")
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");
let number = document.getElementById("number")
let pass = document.getElementById("pass")
let btn = document.getElementById("btn")
let h1 = document.getElementById("h1")
let h1Two = document.getElementById("h1Two")
let h1Third = document.getElementById("h1Third")
let h1Four = document.getElementById("h1Four")
let h1Five = document.getElementById("h1Five")
form.addEventListener("submit", () => {
    if (name.value[0] != name.value[0].toUpperCase()) {
        localStorage.setItem("error", "emptyError");
    }
    else {
        localStorage.removeItem("error")
    }
    if (email.value.includes("@") == false && email.value != "") {
        localStorage.setItem("invalidError", "invalid");
    } else {
        localStorage.removeItem("invalidError");
    } if (number.value.length != 10) {
        localStorage.setItem("numberError", "Number");
    } else if (number.value.length == 10) {
        localStorage.removeItem("numberError");
    } if (pass.value.length < 8) {
        localStorage.setItem("passError", "password");
    } else {
        localStorage.removeItem("passError")
    }
})
let get = localStorage.getItem("error");
let getme = localStorage.getItem("invalidError")
let qacaqaca = localStorage.getItem("numberError")
let qacaqacaqaca = localStorage.getItem("passError")
h1.innerHTML = get;
h1Two.innerHTML = getme;
h1Four.innerHTML = qacaqaca
h1Five.innerHTML = qacaqacaqaca