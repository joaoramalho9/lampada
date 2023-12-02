// JavaScript Document


var lightState = false;

function toggleLight() {
    lightState = !lightState;

    var lampImage = document.getElementById("lampImage");
    var toggleButton = document.getElementById("toggleButton");
    var container = document.querySelector(".container");

    if (lightState) {
        lampImage.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        toggleButton.innerHTML = "Apagar";
        container.style.backgroundColor = "#FFFF00";
        lampImage.classList.add("lampOn"); // Adicionando a classe para a transição suave
    } else {
        lampImage.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        toggleButton.innerHTML = "Acender";
        container.style.backgroundColor = "#808080";
        lampImage.classList.remove("lampOn"); // Removendo a classe para a transição suave
    }
}