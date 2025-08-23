const validpin = 7005;

// add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("Inaild account Number");
      return;
    }
    if (pinNumber !== validpin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewavailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewavailableBalance;
  });


//   toggling feature 