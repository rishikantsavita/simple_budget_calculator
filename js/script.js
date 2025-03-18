// // budget calculate js 
function calculateBudget() {
    // Getting input values from the user
    let income = Number(document.getElementById("income").value);
    let expense = Number(document.getElementById("expense").value);
    
    // Check if user entered valid numbers
    if (income < 0 || expense < 0) {
        document.getElementById("result").innerText = "Please enter positive values.";
        return;
    }

    // Calculating remaining balance
    let balance = income - expense;

    // Logical conditions to determine financial status
    if (balance > 0) {
        document.getElementById("result").innerText = `You have a surplus of $${balance}. Well managed!`;
    } else if (balance === 0) {
        document.getElementById("result").innerText = "Your income and expenses are balanced!";
    } else {
        document.getElementById("result").innerText = `You are overspending by $${Math.abs(balance)}!`;
    }
}