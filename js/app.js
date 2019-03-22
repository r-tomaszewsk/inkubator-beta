const buttonInput = document.querySelector("#buttonInput");
const buttonShow = document.querySelector("#buttonShow");
const buttonBack = document.querySelector("#buttonBack");

let home = document.querySelector('#home');
let second = document.querySelector('#second');

let inputModelCode = document.querySelector('#inputModelCode');

buttonInput.addEventListener("click", function(){
    
    let modelCode = inputModelCode.value;
    console.log(modelCode);
    let result = app.modelCode.parse(modelCode);
    console.log(result);
    home.style.display = "none";
    second.style.display = "block";
});
buttonShow.addEventListener("click", function() {
    console.log("my model");
})
buttonBack.addEventListener("click", function() {
    home.style.display = "block";
    second.style.display = "none";
})