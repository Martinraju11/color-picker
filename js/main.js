var btn = document.getElementById("click");
var colorChange = document.getElementById("bg");


btn.addEventListener("click", function () {
    var arr = ["red", "blue", "green", "yellow", "black", "skyblue", "violet", "pink"];

    var num = Math.round(Math.random() * arr.length);

    colorChange.style.backgroundColor = arr[num];
})