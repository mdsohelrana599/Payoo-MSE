// login button functionlity
document.getElementById("logingButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 16118202920;
  const pinNumber = 7005;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
