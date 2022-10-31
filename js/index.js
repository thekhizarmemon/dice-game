var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".dice-img")[0].setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll(".dice-img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("#title pre").innerHTML = "🚩 Player-1  Wins";
    document.querySelector(".flag-img-1").classList.remove("invisible");
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("#title pre").innerHTML = "Player-2  Wins 🚩";
    document.querySelector(".flag-img-2").classList.remove("invisible");
}
else {
    document.querySelector("#title").innerHTML = "<pre>Draw</pre>";
}