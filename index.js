// var table = +prompt("Enter the table number", 2)
var secdiv = document.getElementById("secdiv");




function generatetable() {
    var table = document.getElementById("table");
    secdiv.innerHTML = "";
    secdiv.innerHTML += "<h1>Table of " + table.value + "</h1>";
    for (var count = 1; count < 11; count++){
        secdiv.innerHTML += "<h2 class='tablerow'>" + table.value + " x " + count + " = " + table.value * count + "</h2>";
}
table.value = "";
}