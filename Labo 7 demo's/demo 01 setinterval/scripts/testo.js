let timerId = 0;  // Definieer timerId buiten setup zodat deze overal beschikbaar is

// Functie die elke seconde wordt aangeroepen door setInterval
const timerTick = () => {
    let output = document.getElementById("output");
    output.innerHTML += " DingDongHang ";  // Voegt tekst toe aan de pagina
}

// Functie om de timer te stoppen
const stopTimer = () => {
    clearInterval(timerId);  // Stop de interval met de timerId
}

// Setup functie die wordt uitgevoerd bij het laden van de pagina
const setup = () => {
    let btnStop = document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);  // Koppel stopTimer aan de knop

    timerId = setInterval(timerTick, 1000);  // Start de interval die elke seconde timerTick aanroept
}

// Zorg ervoor dat de setup functie wordt uitgevoerd zodra de pagina is geladen
window.addEventListener("load", setup);