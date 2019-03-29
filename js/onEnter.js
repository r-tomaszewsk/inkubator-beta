window.app = window.app || {};
window.app.onEnter = function(){
    'use strict'

    const buttonInput = document.querySelector("#buttonInput");
    const buttonShow = document.querySelector("#buttonShow");
    const buttonBack = document.querySelector("#buttonBack");

    let home = document.querySelector('#home');
    let second = document.querySelector('#second');

    let inputModelCode = document.querySelector('#inputModelCode');

    let displayResults = {
        screenSize: document.querySelector('#screenSize'),
        year: document.querySelector('#year'),
        region: document.querySelector('#region'),
        series: document.querySelector('#series'),
        matrixType: document.querySelector('#matrixType')
    }
    
   function onButtonInput() {

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
    }
    function onButtonShow() {
        console.log("my model");
    }
    function onButtonBack() {
        home.style.display = "block";
        second.style.display = "none";
    }

       
    
    
    return {
        execute: function(element) {
            switch (element.id){
                case "inputModelCode":
                    element.value = "UE55NU8000x";
                    element.focus();
                    break;
                case "buttonInput":
                    onButtonInput();
                    break;
                case "buttonShow": 
                    onButtonShow()
                    break;               
                case "buttonBack":
                    onButtonBack()
                    break;
                default :
                    break;



            }
            console.log(element.id);
        }
    };

}();
