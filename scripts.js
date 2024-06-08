const pattern = document.querySelector(".pattern");

function changeImg() {
    const windowValue = window.innerWidth;
    if (windowValue > 400) {
        pattern.src = "./images/pattern-divider-desktop.svg";
        console.log("desktop");
    }
    else{
        pattern.src = "./images/pattern-divider-mobile.svg";
        console.log(windowValue);
    }
}

changeImg(); // Ejecutar la función una vez cuando se carga la página
window.addEventListener("resize", changeImg);