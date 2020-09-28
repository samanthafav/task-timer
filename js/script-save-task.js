function saveTask() {
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
        (document.getElementById("fduration").innerHTML = data);
        var nowCount = localStorage.length;
        var nextCount = nowCount + 1;
        var nextKey = "task" + nowCount;
        localStorage.setItem(nextKey, data);
        clearInputs();
        //add task to visual list
        var para = document.createElement("p");
        para.setAttribute("id", ("pt-" + nowCount), "onclick", alert("adding onclick to taskname?"))
        var paraText = (data);
        para.appendChild(document.createTextNode(paraText));
        var paraElement = document.getElementById("mainList");
        paraElement.appendChild(para);
        //add button to each item in visual list
        var taskBtn = document.createElement("input");
        taskBtn.setAttribute("type", "button");
        taskBtn.setAttribute("id", ("tbtn-" + nowCount));
        taskBtn.setAttribute("value", "start");
        ///taskBtn.setAttribute("onclick", alert("this works?"));
        //taskBtn.innerHTML = "Start";


        var taskBtnElement = document.getElementById(("pt-" + nowCount));
        taskBtnElement.appendChild(taskBtn);
        var clickAction = alert("maybe this?");
        taskBtn.setAttribute("onclick", clickAction);

        //// I'm unable to get the setAttribute to apply the onclick action to the new button i'm making, instead it's just triggered when I run this script.???????
    }

}
