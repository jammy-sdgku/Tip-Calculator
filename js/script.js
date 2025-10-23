// JavaScript for Tip Calculator
document
  .getElementById("tip-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get bill amount and tip percentage
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const tipPercentage = parseFloat(
      document.getElementById("tip-percentage").value
    );

    // Validate inputs
    if (isNaN(billAmount) || billAmount <= 0) {
      alert("Please enter a valid bill amount.");
      return;
    }
    if (isNaN(tipPercentage) || tipPercentage <= 0) {
      alert("Please select a valid tip percentage.");
      return;
    }

    // Calculate tip and total amount
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Display results
    document.getElementById("tip-amount").textContent = tipAmount.toFixed(2);
    document.getElementById("total-amount").textContent =
      totalAmount.toFixed(2);
    document.getElementById("tip-result").style.display = "block";
  });
