const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");

    const genereerSubstring = () => {
        let txtInput = document.getElementById("txtInput");
        let startIndex = document.getElementById("startIndex");
        let endIndex = document.getElementById("endIndex");
        let output = document.getElementById("txtOutput");

        output.textContent = txtInput.value.substring(startIndex.value, endIndex.value);
    };

    btnSubstring.addEventListener("click", genereerSubstring);
};

window.addEventListener("load", setup);
