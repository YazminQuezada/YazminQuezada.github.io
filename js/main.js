$(document).ready(function() {
    if (!localStorage.getItem("carsArray")) {
        localStorage.setItem("carsArray", JSON.stringify([{
            company: "mazda",
            model: "mazda 6",
            color: "red",
            horsePower: "250hp",
            cilinders: "6"
        }]));
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);
        
    } else {
        mazdaCars = localStorage.getItem("carsArray");
        mazdaCars = JSON.parse(mazdaCars);
        printCars();
    }

});

var mazdaCars;


var x = 5;
var y = 10;
var someName = "Israel Salinas"
var weAreLearning = true;
var someFloat = 3.23423523


var someArray = [
    "mazda",
    "honda",
    "toyota",
    "renault"
]

var someObject = {
    company: "mazda",
    model: "mazda 6",
    color: "red",
    horsePower: "250hp",
    cilinders: "6"
}

var mazdaCars = localStorage.getItem("carsArray");
console.log(mazdaCars);
mazdaCars = JSON.parse(mazdaCars);
console.log(mazdaCars);

[{
    company: "mazda",
    model: "mazda 6",
    color: "red",
    horsePower: "250hp",
    cilinders: "6"
}]

function printCars() {
    $("#cars-list tbody").empty();
    console.log("printCars");
    for (i = 0; i < mazdaCars.length; i++) {
        //debugger;
        var objeto1 = mazdaCars[i];
        console.log(objeto1);
        var carCompany = objeto1.company;
        var carModel = objeto1.model;
        var carColor = objeto1.color;
        var carHP = objeto1.horsePower;
        var carCilinders = objeto1.cilinders;
        console.log(carCompany, carModel, carColor, carHP, carCilinders);
        var rowHtml = "<tr>" +
            "<td>" + carCompany + "</td>" +
            "<td>" + carModel + "</td>" +
            "<td>" + carColor + "</td>" +
            "<td>" + carHP + "</td>" +
            "<td>" + carCilinders + "</td>" +
            "</tr>"
        $("#cars-list tbody").append(rowHtml);
    }
}

function getCarData() {
    var carCompany = $("#car-company").val();
    var carModel = $("#car-model").val();
    var carColor = $("#car-color").val();
    var carHp = $("#car-horse-power").val();
    var carCilinders = $("#car-cilinders").val();
    console.log(carCompany, carModel, carColor, carHp, carCilinders);
    var carObject = {
        company: carCompany,
        model: carModel,
        color: carColor,
        horsePower: carHp,
        cilinders: carCilinders
    }
    mazdaCars.push(carObject);
    printCars();
    console.log(mazdaCars)
    $("#add-car-form input").val("");

    var carsString = JSON.stringify(mazdaCars)

    localStorage.setItem("carsArray", carsString);
}

$("#submit-button").on("click", function() {
    getCarData();
});