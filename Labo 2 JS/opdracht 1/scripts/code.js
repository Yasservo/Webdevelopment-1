const setup = () => {

        window.alert("dit is een melding");

        let confirm = window.confirm("Weet u het zeker?");
        console.log(confirm);
        let prompt = window.prompt("Wat is uw naam?")
        console.log(prompt)

}
window.addEventListener("load", setup);