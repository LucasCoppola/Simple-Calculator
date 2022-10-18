const display = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.id === "clear"){
            display.innerText = "";
        }else if(display.innerText !== "" && item.id == "equal"){
            try{
                display.innerText = eval(display.innerText);
            }catch(e){
                display.innerText = "Error!";
                console.log(e);
                setTimeout(() => (display.innerText = ""),2000)
                }
        }else if(display.innerText == "" && item.id == "equal"){
            display.innerText = "";
        }else{
            display.innerText += item.innerText;
        }
    })
})
