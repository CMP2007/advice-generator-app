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

function obtenerFraseAleatoria() {// random phrase
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return [indiceAleatorio, frases[indiceAleatorio]];
  }
  
function desplazarBoton(plus) {//move the button
    const buttonPosition = p.offsetHeight
    image.style.transform = `translate( 0rem,  ${buttonPosition + plus}px)`;
}


image.addEventListener("click", ()=>{
    let fraseAleatoria =obtenerFraseAleatoria()
    p.innerHTML = fraseAleatoria[1];
    number.innerHTML = fraseAleatoria[0] + 1;
    desplazarBoton(plus);
})


let frases = ["Don't give up when you make a mistake, it's an opportunity to learn.",
"Practice makes perfect, but perseverance makes the expert.",
"There is no perfect code, only code that works.",
"Learn from your mistakes, don't let yourself be defeated by them.",
"Programming is a journey, not a destination.",
"Don't worry about not knowing something, worry about not wanting to learn.",
"Code is like a garden, it needs to be cared for and constantly updated.",
"Simplicity is the key to efficient code.",
"Don't be intimidated by complexity, break it down into small problems.",
"Programming is a skill that is developed with practice and patience.",
"It's easy to sit down and realize, what's difficult is to get up and act.",
"Do not be discouraged by obstacles, they are opportunities to grow.",
"Motivation is like a fire, it needs to be constantly fed.",
"Don't compare yourself with others, compete with your previous version.",
"Success is not a destination, it is a process.",
"Don't give up, every step forward is a step towards success.",
"Self-confidence is the key to overcoming any obstacle.",
"Don't let yourself be overcome by frustration, learn from it.",
"Perseverance is the key to achieving your goals.",
"Do not be discouraged by failures, they are opportunities to learn and grow.",
"Programming is a challenge, but motivation is the key to overcoming it.",
"Don't give up on a code problem, it's an opportunity to learn and grow.",
"Practice makes perfect, but motivation makes the expert.",
"Learn from your mistakes and don't let yourself be defeated by them.",
"Programming is a journey, not a destination, and motivation is the fuel that drives you forward.",
"Don't worry about not knowing something, worry about not wanting to learn and grow.",
"Code is like a garden, it needs to be cared for and constantly updated, and motivation is the tool that allows you to do it.",
"Simplicity is the key to efficient code, and motivation is the key to innovative code.",
"Don't be intimidated by the complexity, break it down into small problems and don't give up.",
"Programming is a skill that is developed with practice and patience, and motivation is the key to maintaining practice and patience.",
"Code is like a puzzle, each piece is important to complete the picture.",
"Programming is an art, and each line of code is a brushstroke on the canvas.",
"A good programmer is like a detective, looking for clues and solving mysteries.",
"Logic is the basis of programming, but creativity is what makes it shine.",
"The code is like a book, each line is a page that tells a story.",
"Programming is a science, but it is also an art that requires passion and dedication.",
"A good programmer is like an architect, he designs and builds structures that last.",
"Programming is a challenge, but it is also an opportunity to create something new and exciting.",
"The code is like a map, it guides the user to their destination.",
"Programming is a skill that is developed with practice, patience and perseverance.",
"Motivation is like a fire that burns inside you, don't let it go out.",
"Do not be discouraged by obstacles, they are opportunities to grow and learn.",
"Self-confidence is the key to overcoming any obstacle.",
"Don't compare yourself with others, compete with your previous version.",
"Success is not a destination, it is a process that requires effort and dedication.",
"Motivation is like an engine that drives you forward, don't stop.",
"Don't give up, every step forward is a step towards success.",
"Perseverance is the key to achieving your goals.",
"Do not be discouraged by failures, they are opportunities to learn and grow.",
"Motivation is like a wind that carries you forward, don't get carried away by the current.",
"Programming is a challenge, but motivation is the key to overcoming it.",
"Don't give up on a code problem, it's an opportunity to learn and grow.",
"Practice makes perfect, but motivation makes the expert.",
"Learn from your mistakes and don't let yourself be defeated by them.",
"Programming is a journey, not a destination, and motivation is the fuel that drives you forward.",
"Don't worry about not knowing something, worry about not wanting to learn and grow.",
"Code is like a garden, it needs to be cared for and constantly updated, and motivation is the tool that allows you to do it.",
"Simplicity is the key to efficient code, and motivation is the key to innovative code.",
"Don't be intimidated by the complexity, break it down into small problems and don't give up.",
"Programming is a skill that is developed with practice and patience, and motivation is the key to maintaining practice and patience.",
"Believe you can and you will be halfway there.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Success is not definitive, failure is not fatal: what counts is the courage to continue.",
"You don't have to be great to start, but you have to start being great.",
"Don't look at the clock; do what it does. Keep going.",
"The best way to start is to stop talking and start doing.",
"You are never too old to set another goal or dream a new dream.",
"The biggest risk is not taking any risks...",
"Do something today that your future self will thank you for.",
"You don't learn to walk by following rules. You learn by doing and falling.",
"The code is like humor. When you have to explain it, it's no longer funny.",
"The best code is to have no code.",
"Programming is like writing a novel. You start with a concept, then you fill in the details, and finally you perfect it.",
"The only thing more expensive than hiring a professional is hiring an amateur.",
"Code reviews are like getting a second opinion from a doctor. They can save your life.",
"The best programmers are not those who know more languages, but those who know how to learn.",
"Debugging is like being a detective. You have to find the clues and solve the mystery.",
"Code is like a puzzle. You have to find the right pieces and put them together.",
"A good programmer is someone who always looks both ways before crossing a one-way street.",
"The only thing harder than debugging is explaining it to someone else.",
"Motivation is what gets you started. Habit is what keeps you going. And programming is what makes it all possible.",
"The only way to do great work is to love what you do. And if you love programming, you will be motivated to do great work.",
"Programming is not just about writing code, it is about solving problems and making a difference.",
"The best programmers are not those who are motivated by money, but those who are motivated by the desire to create something amazing.",
"Motivation is like a muscle that needs to be exercised. And programming is the exercise that keeps it strong.",
"The only limit to what you can achieve is the limit you put on yourself. And programming is the key to unlocking your potential.",
"Programming is not just about writing code, it is about creating something that can change the world.",
"The best programmers are not those who are afraid to take risks, but those who are motivated to try new things.",
"Motivation is what drives you to keep going, even when the code doesn't work. And programming is what makes it all worth it.",
"The only way to get better at programming is to keep practicing. And motivation is what keeps you practicing.",
"Success is not the absence of failures, but perseverance in moving forward.",
"Motivation is the spark that lights the fire of passion.",
"Don't give up, every obstacle is an opportunity to grow.",
"Self-confidence is the key to overcoming any obstacle.",
"Failure is not the end, it is just a step towards success.",
"Code is like a puzzle, each piece is important to complete the picture.",
"Programming is an art, and each line of code is a brushstroke on the canvas.",
"A good programmer is like a detective, he looks for clues and solves mysteries.",
"Logic is the basis of programming, but creativity is what makes it shine.",
"The code is like a book, each line is a page that tells a story.",
"Programming is a challenge, but motivation is the key to overcoming it.",
"Don't give up on a code problem, it's an opportunity to learn and grow.",
"Practice makes perfect, but motivation makes the expert.",
"Learn from your mistakes and don't let yourself be defeated by them.",
"Programming is a journey, not a destination, and motivation is the fuel that drives you forward.",
"Belief in yourself is the greatest source of power you have.",
"Don't worry about what others think, focus on what you can do.",
"Success is not a destination, it is a journey of learning and growth.",
"Perseverance is the key to overcoming any obstacle.",
"Take advantage of every opportunity to learn and grow.",
"A good code is like a poem, each line is a word that tells a story.",
"Programming is a problem-solving process, not a code-writing process.",
"Simplicity is the key to good software design.",
"A good programmer is like an architect, he designs and builds something that will last over time.",
"Programming is an art, and every project is an opportunity to create something new and exciting.",
"Programming is a challenge, but motivation is the key to overcoming it and creating something amazing.",
"it is easy to sit up and take notice what's difficult is getting up and taking action",
"The practiceEthics makes the teacher, but motivation makes the innovator.",
"Learn from your mistakes and don't let yourself be defeated by them, they are part of the learning process.",
"Programming is a journey of self-discovery, and motivation is the compass that guides you forward.",
]