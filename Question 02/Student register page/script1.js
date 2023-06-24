function validateForm() {
    console.log("validateForm function called");
        var fname = document.getElementById("fname").value;

        if (fname == "") {
            alert("Please fill the E-mail....");
            return false;
        }
        return true;
    }