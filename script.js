let balance = 0;

const form = document.getElementById("transactionForm");
const balanceDisplay = document.getElementById("balance");
const transactionList = document.getElementById("transactionList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (type === "Income") {
        balance += amount;
    } else {
        balance -= amount;
    }

    balanceDisplay.innerText = "₹" + balance;

    const li = document.createElement("li");
    li.classList.add(type === "Income" ? "income" : "expense");
    li.innerHTML = `${category} <span>₹${amount}</span>`;

    transactionList.appendChild(li);

    form.reset();
});