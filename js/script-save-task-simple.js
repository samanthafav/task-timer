function saveTaskSimple() {
    //get all data from each element in the form
    var dtask = document.getElementById("ftask").value;
    var dduration = parseInt(document.getElementById("fduration").innerHTML);
    //store all data in a new variable
    var data = dtask + " (" + dduration + "m)";
    //validate that they filled everything in
    if (dtask.length < 1 || dduration < 1) {
        alert("uh oh! you haven't entered all of the required fields ");
    }
    else {
        //(document.getElementById("fduration").innerHTML = data);
        //var nowCount = localStorage.length;
        //var nextCount = nowCount + 1;
        //var nextKey = "task";
        //localStorage.setItem(nextKey, data);
        clearInputs();
        //add task to visual list
        //var para = document.createElement("p");
        //para.id = ("pt-" + nowCount);
        //para.innerHTML = data;
        document.getElementById("task").innerHTML = dtask;

        //document.body.appendChild(para);
        document.getElementById("task").style.visibility = "visible";
        document.getElementById("ftask").style.visibility = "hidden";
        document.getElementById("timer").style.visibility = "visible";
        document.getElementById("1m").style.visibility = "hidden";
        document.getElementById("5m").style.visibility = "hidden";
        document.getElementById("15m").style.visibility = "hidden";
        document.getElementById("fbtn").style.visibility = "hidden";
        document.getElementById("form").style.visibility = "hidden";
        document.getElementById("refresh").style.visibility = "visible";
        var duration = dduration;
        var now = new Date();
        var deadline = new Date(now.getTime() + duration * 60000);
        var x = setInterval(function () {
            var flashColor = "Red"
            var now = new Date().getTime();
            var t = deadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
            if (t < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }, 1000);



    };

}
