const validpin = 7005;
const transactionData = [];

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set innerText
function setInnertext(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggling
function handletoggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle button
function handletoggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");

    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("Invalid Amount")
      return;
    }

    const pinNumber = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Inaild account Number");
      return;
    }
    if (pinNumber !== validpin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewavailableBalance = amount + availableBalance;

    setInnertext(totalNewavailableBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = getInputValue("Agent-Number");

  const amount = getInputValueNumber("withdraw-amount");

  const pinNumber = getInputValueNumber("cash-out-pin");

  const availableBalance = getInnerText("available-balance");

  if(amount<=0 || amount>availableBalance){
    alert("Invalid Amount")
    return;
  }

  if (accountNumber.length < 11) {
    alert("Inaild Agent Number");
    return;
  }
  if (pinNumber !== validpin) {
    alert("Invalid pin Number");
    return;
  }

  const totalNewavailableBalanc = availableBalance - amount;

  setInnertext(totalNewavailableBalanc);

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// Transaction History
document
  .getElementById("Transaction-btn")
  .addEventListener("click", function () {
    const TransactionContaner = document.getElementById("transaction-contaner");

    TransactionContaner.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
       <div class="flex justify-between items-center bg-white p-2 rounded-xl mt-3">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="./assets/transaction1.png" class="mx-auto" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p class="text-[#08080880]">${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical text-[#08080880]"></i>
            </div>
    `;

      TransactionContaner.appendChild(div);
    }
  });

//   toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
  handletoggle("add-money-parent");
  handletoggleButton("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function (e) {
    handletoggle("cash-out-parent");
    handletoggleButton("cash-out-button");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    handletoggle("transfer-money-parent");
    handletoggleButton("transfer-button");
  });

document.getElementById("bouns-btn").addEventListener("click", function (e) {
  handletoggle("get-bonus-parent");
  handletoggleButton("bouns-btn");
});

document.getElementById("paybill-btn").addEventListener("click", function (e) {
  handletoggle("pay-bill-parent");
  handletoggleButton("paybill-btn");
});

document
  .getElementById("Transaction-btn")
  .addEventListener("click", function (e) {
    handletoggle("Transaction-History-parent");
    handletoggleButton("Transaction-btn");
  });
