const buttonInput = document.querySelector("#buttonInput");
const buttonModel = document.querySelector("#buttonShow");
const buttonBack = document.querySelector("#buttonBack");

buttonInput.addEventListener("click", function(){
    home.style.display = "none";
    second.style.display = "block";
});
buttonModel.addEventListener("click", function() {
    console.log("my model");
})
buttonBack.addEventListener("click", function() {
    home.style.display = "block";
    second.style.display = "none";
})