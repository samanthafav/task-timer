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
        para.id = ("pt-" + nowCount);
        para.innerHTML = data;
        var Boo = function () {
            alert("boo");
        };
        newBtn = document.createElement("button");
        newBtn.innerHTML = "Startttttt";
        newBtn.addEventListener("click", Boo)
        newBtn.id = ("btn-" + nowCount);
        para.appendChild(newBtn);

        document.body.appendChild(para);

        document.getElementById("btn-" + nowCount).onclick = function () {
            Boo;
        };


        //para.setAttribute("id", ("pt-" + nowCount));
        //var newTaskId = ("pt-" + nowCount);
        //var paraText = (data);
        //para.appendChild(document.createTextNode(paraText));
        //var paraElement = document.getElementById("mainList");
        //paraElement.appendChild(para);

        //add button to each item in visual list
        //var taskBtn = document.createElement("button");
        //taskBtn.innerHTML = "Start Task!";
        //document.body.appendChild(taskBtn)
        //document.getElementById(newTaskId).onclick = "alert("againn")";


        //add button to each item in visual list - original idea
        //var taskBtn = document.createElement("input");
        //taskBtn.setAttribute("type", "button");
        //taskBtn.setAttribute("id", ("tbtn-" + nowCount));
        //taskBtn.setAttribute("value", "start");
        ///taskBtn.setAttribute("onclick", alert("this works?"));
        //taskBtn.innerHTML = "Start";

        //var taskBtnElement = document.getElementById(("pt-" + nowCount));
        //taskBtnElement.appendChild(taskBtn);
        //var clickAction = alert("maybe this?");
        //taskBtn.setAttribute("onclick", clickAction);

        //// I'm unable to get the setAttribute to apply the onclick action to the new button i'm making, instead it's just triggered when I run this script.???????
    }

}
