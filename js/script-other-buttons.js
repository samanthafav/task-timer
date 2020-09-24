
function addStorage() {
    localStorage.setItem("One", (document.getElementById("ftask").value));
    checkStorage();
};

function checkStorage() {
    alert(localStorage.getItem("task2"));
};

function countStorage() {
    alert(localStorage.length);
};

function clearStorage() {
    localStorage.clear();
};