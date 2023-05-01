function validateName(name) {
  return name.length > 0;
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
}

function validateAge(age) {
  return age > 0 && age < 120;
}

function validatePhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const phone = document.getElementById("phone").value;
  let errorMessage = "";
  if (!validateName(name)) {
    errorMessage += "Please enter a valid name.\n";
  }
  if (!validateEmail(email)) {
    errorMessage += "Please enter a valid email.\n";
  }
  if (!validatePassword(password)) {
    errorMessage += "Please enter a valid password.\n";
  }
  if (!validateAge(age)) {
    errorMessage += "Please enter a valid age.\n";
  }
  if (!validatePhone(phone)) {
    errorMessage += "Please enter a valid phone number.\n";
  }
  if (errorMessage.length > 0) {
    alert(errorMessage);
    return false;
  }
  return true;
}
