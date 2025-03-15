const setup = () => {

    function wijzig() {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    }

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig); // Voeg de event listener toe aan de knop
}
window.addEventListener("load", setup);