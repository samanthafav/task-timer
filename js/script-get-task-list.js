function getStorage() {
    var w = "task";
    var c = countStorage();
    var i = 0;
    for ((let i = 0; i < c; i++);) {
        var key = w + i;
        var para = document.createElement("p");
        var node = document.createTextNode(localStorage.getItem(key));
        para.appendChild(node);
        var element = document.getElementById("mainList");
        element.appendChild(para);
    }
}