

const storeSliderValues = () => {
let red = document.getElementById("sldRed").value;
let green = document.getElementById("sldGreen").value;
let blue = document.getElementById("sldGreen").value

    let sliderValues = {
    red: red, green: green, blue: blue
    }

    localStorage.setItem("slidervalues",JSON.stringify(sliderValues));
};

const restoreSliderValues = () => {

    let  savedvalues = localStorage.getItem("sliderValues");

    if(savedvalues) {
        let sliderValues = JSON.parse(savedvalues);
        document.getElementById("sldRed").value = sliderValues.red;
        document.getElementById("sldGreen").value = sliderValues.green;
        document.getElementById("sldBlue").value = sliderValues.blue;

        update();
    }
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
let swatchElemanten = document.getElementsByClassName("swatches")
    let swatches = [];

for(let i = 0; i < swatchElemanten; i++) {
    let swatch = swatchElemanten[i];
    let red = swatch.getAttribute("data-red");
    let green = swatch.getAttribute("data-green");
    let blue = swatch.getAttribute("data-blue");

    localStorage.setItem(swatchData, JSON.stringify(swatch))
}
};

const restoreSwatches = () => {

};
