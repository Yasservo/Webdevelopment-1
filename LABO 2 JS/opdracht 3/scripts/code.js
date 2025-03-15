const setup = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";

        let btnWijzig = document.getElementById("txtOutput");
        btnWijzig.addEventListener("click", wijzigTekst);
    }

    const wijzigTekst = () => {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "De tekst is gewijzigd!";
    }
}
window.addEventListener("load", setup);