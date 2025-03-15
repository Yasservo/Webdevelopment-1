const setup = () => {
    document.getElementById("validator").addEventListener("click", valideerForm);
};

const valideerForm = () => {
    let fouten = 0;

    fouten += valideerInput("txtVoornaam", "errVoornaam", 30);
    fouten += valideerInput("txtFamilienaam", "errFamilienaam", 50, true);
    fouten += valideerGeboortedatum();
    fouten += valideerEmail();
    fouten += valideerAantalKinderen();

    if (fouten === 0) {
        alert("Het is gelukt");
    }
};

const valideerInput = (inputId, errorId, maxLength, isRequired = false) => {
    let input = document.getElementById(inputId);
    let error = document.getElementById(errorId);
    let value = input.value.trim();

    if (isRequired && value.length === 0) {
        error.textContent = "Verplicht veld";
        input.style.border = "2px solid red";
        return 1;
    } else if (value.length > maxLength) {
        error.textContent = `Maximaal ${maxLength} karakters toegestaan`;
        input.style.border = "2px solid red";
        return 1;
    } else {
        error.textContent = "";
        input.style.border = "";
        return 0;
    }
};

const valideerGeboortedatum = () => {
    let geboortedatum = document.getElementById("txtGeboortedatum");
    let errGeboortedatum = document.getElementById("errGeboortedatum");
    let regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(geboortedatum.value.trim())) {
        errGeboortedatum.textContent = "Formaat is niet jjjj-mm-dd";
        geboortedatum.style.border = "2px solid red";
        return 1;
    } else {
        errGeboortedatum.textContent = "";
        geboortedatum.style.border = "";
        return 0;
    }
};

const valideerEmail = () => {
    let email = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value.trim())) {
        errEmail.textContent = "Geen geldig e-mailadres";
        email.style.border = "2px solid red";
        return 1;
    } else {
        errEmail.textContent = "";
        email.style.border = "";
        return 0;
    }
};

const valideerAantalKinderen = () => {
    let aantalKinderen = document.getElementById("aantalkinderenText");
    let errAantalKinderen = document.getElementById("errAantalkinderen");
    let waarde = aantalKinderen.value.trim();

    if (isNaN(waarde) || waarde < 0 || waarde >= 99) {
        errAantalKinderen.textContent = "Is geen positief getal of te vruchtbaar";
        aantalKinderen.style.border = "2px solid red";
        return 1;
    } else {
        errAantalKinderen.textContent = "";
        aantalKinderen.style.border = "";
        return 0;
    }
};

window.addEventListener("load", setup);