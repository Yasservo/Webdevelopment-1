const timerTick = () => {
    let output = document.getElementById("output")
    output.innerHTML += " DingDONGhANG"
}
const opnieuw = () => {
    setTimeout(timerTick,1000)
}

const setup = () => {
    let opnieuwBtn = document.getElementById("opBtn");
    opnieuwBtn.addEventListener("click", timerTick);
    setTimeout(timerTick,1000)

}
window.addEventListener("load", setup);