
function loadAnswer(){
    fetch("https://yesno.wtf/api")
    .then(response => response.json())
    .then(json => {console.log(json)
        const img = document.querySelector("#image");
        const display = document.querySelector("h1");
         display.textContent = json.answer.toUpperCase();
        img.src = json["image"];
    });
}
loadAnswer();
document.getElementById("btnReload").addEventListener("click", loadAnswer);

