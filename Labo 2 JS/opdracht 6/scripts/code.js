const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;

        document.getElementById("txtOutput").textContent = tekst; // Gebruik textContent in plaats van value
    };

    btnKopieer.addEventListener("click", kopieer);
};

window.addEventListener("load", setup);