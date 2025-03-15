const setup = () => {
    let action = document.getElementById("knop");
    action.addEventListener("click", submit);
};

const submit = () => {
    console.log(document.getElementById("isRoker").checked ? "is een roker" : "is geen roker");

    let moedertaal = document.getElementsByClassName("moedertaal");
    let geselecteerdeTaal = "geen moedertaal gekozen";
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            geselecteerdeTaal = moedertaal[i].value;
            break;
        }
    }
    console.log("moedertaal is " + geselecteerdeTaal);

    let buurland = document.getElementById("buurland").value;
    console.log("favoriete buurland is " + buurland);

    let bestellingSelect = document.getElementById("food");
    let bestellingen = Array.from(bestellingSelect.selectedOptions).map(option => option.value);
    console.log("bestelling bestaat uit " + (bestellingen.length > 0 ? bestellingen.join(", ") : "geen bestelling"));
};

window.addEventListener("load", setup);