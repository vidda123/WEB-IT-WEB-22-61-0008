function validateForm() {
    console.log("validateForm function called");
        var email = document.getElementById("email").value;

        if (email == "") {
            alert("Please fill the E-mail....");
            return false;
        }
        return true;
    }