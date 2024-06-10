const pattern = document.querySelector(".pattern");
const windoeOP = window;
const p = document.getElementById("pp");
const image = document.getElementById("image");
const number = document.querySelector(".number");


checkWidth()
windoeOP.addEventListener("resize", checkWidth)

function checkWidth() {
    const windowValue = windoeOP.innerWidth
    console.log(windowValue);
    if (windowValue > 550) {
        pattern.src = "./images/pattern-divider-desktop.svg";
        console.log("yes");
    }
    else {
        pattern.src = "./images/pattern-divider-mobile.svg";
        console.log("no");
    }
}

function obtenerFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return [indiceAleatorio, frases[indiceAleatorio]];
  }
  




image.addEventListener("click", ()=>{
    let fraseAleatoria =obtenerFraseAleatoria()
    p.innerHTML = fraseAleatoria[1];
    number.innerHTML = fraseAleatoria[0];
})





let frases = ["No te rindas ante un error, es una oportunidad para aprender.",
"La práctica hace al maestro, pero la perseverancia hace al experto.",
"No hay código perfecto, solo código que funciona.",
"Aprende de tus errores, no te dejes vencer por ellos.",
"La programación es un viaje, no un destino.",
"No te preocupes por no saber algo, preocupate por no querer aprender.",
"El código es como un jardín, necesita ser cuidado y actualizado constantemente.",
"La simplicidad es la clave para un código eficiente.",
"No te dejes intimidar por la complejidad, descompónla en pequeños problemas.",
"La programación es una habilidad que se desarrolla con la práctica y la paciencia.",
// Motivación
"Es fácil sentarse y darse cuenta, lo difícil es levantarse y actuar.",
"No te desanimes por los obstáculos, son oportunidades para crecer.",
"La motivación es como un fuego, necesita ser alimentado constantemente.",
"No te compares con otros, compite con tu versión anterior.",
"El éxito no es un destino, es un proceso.",
"No te rindas, cada paso adelante es un paso hacia el éxito.",
"La confianza en ti mismo es la clave para superar cualquier obstáculo.",
"No te dejes vencer por la frustración, aprende de ella.",
"La perseverancia es la clave para alcanzar tus objetivos.",
"No te desanimes por los fracasos, son oportunidades para aprender y crecer.",
// Combinación de programación y motivación

"La programación es un desafío, pero la motivación es la clave para superarlo.",,
"No te rindas ante un problema de código, es una oportunidad para aprender y crecer.",
"La práctica hace al maestro, pero la motivación hace al experto.",
"Aprende de tus errores y no te dejes vencer por ellos.",
"La programación es un viaje, no un destino, y la motivación es el combustible que te lleva hacia adelante.",
"No te preocupes por no saber algo, preocupate por no querer aprender y crecer.",
"El código es como un jardín, necesita ser cuidado y actualizado constantemente, y la motivación es la herramienta que te permite hacerlo.",
"La simplicidad es la clave para un código eficiente, y la motivación es la clave para un código innovador.",
"No te dejes intimidar por la complejidad, descompónla en pequeños problemas y no te rindas.",,
"La programación es una habilidad que se desarrolla con la práctica y la paciencia, y la motivación es la clave para mantener la práctica y la paciencia."]