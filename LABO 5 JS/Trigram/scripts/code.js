const setup = () => {
    let text = "onoorbaar";
    let x = 0;
    let y = 3;
    let output = "";

    while (y <= text.length) {
        output += (text.slice(x,y)) + "<br>";
        y++;
        x++;
    }
    document.body.innerHTML = output;
}
window.addEventListener("load", setup);