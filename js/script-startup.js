document.addEventListener("DOMContentLoaded", newDayCheck()); {
    function newDayCheck() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        if (localStorage.getItem("listDate") == null) {
            localStorage.setItem("listDate", today);
        }
        else {
            var logDate = localStorage.getItem("listDate");
            if (logDate === today) { alert("this list is from today!"); }
            else {
                alert("This list is from yesterday, I just cleared it");
            };
        }
    };
}