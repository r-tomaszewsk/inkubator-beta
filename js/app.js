const button = document.querySelector("#buttonInput");
const buttonModel = document.querySelector("#buttonShow");

button.addEventListener("click", function(){
    home.style.display = "none"
    second.style.display = "block"
    console.log("Wpisz");
});
buttonModel.addEventListener("click", function() {
    console.log("Show TV Model")
})