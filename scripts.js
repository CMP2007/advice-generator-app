const pattern = document.querySelector(".pattern");
const windoeOP = window;
const p = document.getElementById("pp");
const image = document.querySelector(".image");
const number = document.querySelector(".number");
let plus = 110

/************************************** check screen size ***************************************/
checkWidth()
windoeOP.addEventListener("resize", checkWidth)

function checkWidth() {
    const windowValue = windoeOP.innerWidth
    if (windowValue > 550) {
        pattern.src = "./images/pattern-divider-desktop.svg";
        plus = 112;
        desplazarBoton(plus);
    }
    else {
        pattern.src = "./images/pattern-divider-mobile.svg";
        plus = 105;
        desplazarBoton(plus);
    }
}


/************************************** show random phrase ***************************************/

  
function desplazarBoton(plus) {//move the button
    const buttonPosition = p.offsetHeight
    image.style.transform = `translate( 0rem,  ${buttonPosition + plus}px)`;
}

function getAdvice() {
    fetch("	https://api.adviceslip.com/advice")
    .then((res)=>{ return res.json()})
    .then((resData)=>{
        let data = resData.slip;
        number.innerHTML = data.id;
        p.innerHTML = data.advice;
        desplazarBoton(plus);
    })
    .catch(error => {
        console.log(error);
    })
}


image.addEventListener("click", ()=>{
    getAdvice();
})