let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons)

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case `C`:
                display.innerText = "";
                break;
            case `←`:
                display.innerText = display.innerText.slice(0, -1);
                break;
            case `=`:
                try{
                    display.innerText = Function("return " + display.innerText)();
                    break;
                } catch{
                    display.innerText = "Error!"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});