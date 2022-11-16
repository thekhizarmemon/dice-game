document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector(".btn").classList.add("press");
    setTimeout(() => {
        document.querySelector(".btn").classList.remove("press");
    }, 50);
    play();
});

function play() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll(".dice-img")[0].setAttribute("src", randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll(".dice-img")[1].setAttribute("src", randomImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("#title>pre").textContent = "🚩 Player-1  Wins";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("#title>pre").textContent = "Player-2  Wins 🚩";
    }
    else {
        document.querySelector("#title>pre").textContent = "Draw";
    }
}