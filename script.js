
// ========================================
// SpendWise JavaScript Foundation
// ========================================

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

let expenseName = "";
let expenseAmount = 0;
let expenseCategory = "";

let budgetInput = prompt("Enter your monthly budget in KSh:");

monthlyBudget = Number(budgetInput);


expenseName = prompt("Enter the name of an expense:");


let amountInput = prompt("Enter the expense amount in KSh:");
expenseAmount = Number(amountInput);


expenseCategory = prompt(
    "Enter the expense category (Food, Transport, Rent, Entertainment, or Other):"
);


function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


totalExpenses = expenseAmount;

remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);

console.log("========== SpendWise Budget Report ==========");

console.log("Monthly Budget: KSh " + monthlyBudget);

console.log("Expense Name: " + expenseName);

console.log("Expense Amount: KSh " + expenseAmount);

console.log("Expense Category: " + expenseCategory);

console.log("Total Expenses: KSh " + totalExpenses);

console.log("Remaining Balance: KSh " + remainingBalance);


function checkBudgetStatus(balance) {

    if (balance > 0) {
        console.log(
            "Budget Status: You have KSh " +
            balance +
            " remaining."
        );

    } else if (balance === 0) {
        console.log(
            "Budget Status: You have used your entire budget."
        );

    } else {
        console.log(
            "Budget Status: You are over budget by KSh " +
            Math.abs(balance) +
            "."
        );
    }
}


checkBudgetStatus(remainingBalance);

console.log("============================================");

