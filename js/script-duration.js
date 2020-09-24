//script to add time to button

function add1m() {
    //get start value as a number
    var startDuration = parseInt(document.getElementById("fduration").innerHTML);
    //get value to be added to duration
    var toAdd = 1;
    //add value to duration
    var newDuration = startDuration + toAdd
    //get new duration and replace start duration with new value
    document.getElementById("fduration").innerHTML = newDuration;
};

function add5m() {
    //get start value as a number
    var startDuration = parseInt(document.getElementById("fduration").innerHTML);
    //get value to be added to duration
    var toAdd = 5;
    //add value to duration
    var newDuration = startDuration + toAdd
    //get new duration and replace start duration with new value
    document.getElementById("fduration").innerHTML = newDuration;
};

function add15m() {
    //get start value as a number
    var startDuration = parseInt(document.getElementById("fduration").innerHTML);
    //get value to be added to duration
    var toAdd = 15;
    //add value to duration
    var newDuration = startDuration + toAdd
    //get new duration and replace start duration with new value
    document.getElementById("fduration").innerHTML = newDuration;
};

function clearInputs() {
    //replace duration with 0
    document.getElementById("fduration").innerHTML = 0;
    document.getElementById("ftask").value = "";
};