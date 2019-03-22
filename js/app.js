const buttonInput = document.querySelector("#buttonInput");
const buttonShow = document.querySelector("#buttonShow");
const buttonBack = document.querySelector("#buttonBack");

let home = document.querySelector('#home');
let second = document.querySelector('#second');

let inputModelCode = document.querySelector('#inputModelCode');

let displayResults = {
    screenSize : document.querySelector('#screenSize'),
    year : document.querySelector('#year'),
    region : document.querySelector('#region'),
    series : document.querySelector('#series'),
    matrixType : document.querySelector('#matrixType')
}

buttonInput.addEventListener("click", function(){
    
    let modelCode = inputModelCode.value;
    console.log(modelCode);
    let result = app.modelCode.parse(modelCode);
    console.log(result);

    displayResults.screenSize.innerHTML = result.screenSize.name;
    displayResults.year.innerHTML = result.year.name;
    displayResults.region.innerHTML = result.region.name;
    displayResults.series.innerHTML = result.series.name;
    displayResults.matrixType.innerHTML = result.matrixType.name;


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