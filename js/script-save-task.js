function saveTask() {
    //get all data from each element in the form
    var dtask = document.getElementById("ftask").value;
    var dduration = parseInt(document.getElementById("fduration").innerHTML);
    //store all data in a new variable
    var data = dtask + " (" + dduration + "m)";
    //validate that they filled everything in
    if (dtask.length < 1 || dduration < 1) { alert("uh oh! you haven't entered all of the required fields "); } else {
        (document.getElementById("fduration").innerHTML = data);
        var nowCount = localStorage.length;
        var nextCount = nowCount + 1;
        var nextKey = "task" + nowCount;
        localStorage.setItem(nextKey, data);
    }
}
