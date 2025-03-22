const setup = () => {
    document.getElementById("kies").addEventListener("change", toonLetterInvoer);
    document.getElementById("letterInput").addEventListener("input", telLetter);
};

function toonLetterInvoer() {
    let keuze = document.getElementById("kies").value;
    document.getElementById("letterLezer") =  keuze === "Zonder een ei" ? "block" : "none";
}
function telLetter() {
    let tekst = "Zonder een ei";
    let letter = document.getElementById("letterInput").value;
    let count = (tekst.match(new RegExp(letter, "gi")) || []).length;
    document.getElementById("output").innerText = `De letter '${letter}' komt ${count} keer voor.`;
}

window.addEventListener("load", setup);
