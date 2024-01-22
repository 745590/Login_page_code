let next = document.getElementById("next")
let signin = document.getElementById("signin")
let sign = document.getElementById("sign")
let forget= document.getElementById("forget")
let nextsign = document.getElementById("nextsign")
let pera = document.getElementById("pera")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let container = document.querySelector(".container")
var inputElement = document.createElement("input");

next.addEventListener("click", function nextpage(){
        var box = document.getElementById("box");
        var inputElement = document.createElement("input");
        inputElement.placeholder = "Name";
       box.appendChild(inputElement);
    next.style.animation ="slideRight 0.7s ease-in-out forwards";
    signin.style.animation ="slideLeft 0.7s ease-in-out forwards";
    next.style.background ="linear-gradient(rgb(82, 44, 0), transparent), linear-gradient(to top left, rgb(155, 163, 40), transparent), linear-gradient(to top right,rgb(95, 1, 1) , transparent)";
        h1.textContent = "Welcome Back !";
        h2.textContent = "Create Account";
        pera.textContent  = "use your email for registration"
        pera.style.marginTop = "0";
        nextsign.textContent = "SIGN IN"
        sign.textContent = "SIGN UP"
        forget.textContent = ""
        next.style.borderTopLeftRadius ="20px";
        next.style.borderBottomLeftRadius ="20px";
        next.style.borderBottomRightRadius ="100px";
        next.style.borderTopRightRadius ="70px";
})
