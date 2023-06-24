function validateForm() {
    
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var address = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;

    
    if (firstName === '' || lastName === '' || address === '' || city === '') {
      alert('Please fill the all field!!');
      return false; 
    }
  }