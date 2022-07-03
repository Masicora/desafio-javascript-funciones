let keyColor = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyColor = "red";
    }
    else if (event.key === 's') {
        keyColor = "blue";
    }
    else if (event.key === 'd') {
        keyColor = "yellow";
    }
});

function addColor() {
    this.style.backgroundColor = keyColor;
}

document.getElementById("div1").addEventListener("click", addColor);
document.getElementById("div2").addEventListener("click", addColor);
document.getElementById("div3").addEventListener("click", addColor);
document.getElementById("div4").addEventListener("click", addColor);
