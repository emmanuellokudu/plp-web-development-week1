
// ========================================
// SpendWise Interactive Budget Application
// ========================================


// ========================================
// 1. Application Data
// ========================================

let monthlyBudget = 0;

let expenses = [];


const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");

const budgetInput = document.getElementById("monthly-budget");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseDateInput = document.getElementById("expense-date");

const expenseList = document.getElementById("expense-list");

const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const budgetStatusDisplay = document.getElementById("budget-status");


function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


function calculateRemainingBalance() {

    const totalExpenses = calculateTotalExpenses();

    return monthlyBudget - totalExpenses;
}

function updateBudgetStatus(balance) {

    if (balance > 0) {

        budgetStatusDisplay.textContent =
            "You have KSh " +
            balance.toLocaleString() +
            " remaining.";

    } else if (balance === 0) {

        budgetStatusDisplay.textContent =
            "You have used your entire budget.";

    } else {

        budgetStatusDisplay.textContent =
            "You are over budget by KSh " +
            Math.abs(balance).toLocaleString() +
            ".";
    }
}

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = calculateRemainingBalance();

    totalExpensesDisplay.textContent =
        "KSh " + totalExpenses.toLocaleString();

    remainingBalanceDisplay.textContent =
        "KSh " + remainingBalance.toLocaleString();

    updateBudgetStatus(remainingBalance);

    expenseList.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>KSh ${expense.amount.toLocaleString()}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
        `;

        expenseList.appendChild(row);
    }
}


if (budgetForm) {

    budgetForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const budgetValue = Number(budgetInput.value);

        if (budgetValue <= 0 || isNaN(budgetValue)) {

            alert("Please enter a valid budget amount.");

            return;
        }

        monthlyBudget = budgetValue;

        updateDashboard();

        console.log(
            "Monthly budget set to KSh " +
            monthlyBudget.toLocaleString()
        );
    });
}

if (expenseForm) {

    expenseForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = expenseNameInput.value.trim();
        const amount = Number(expenseAmountInput.value);
        const category = expenseCategoryInput.value;
        const date = expenseDateInput.value;

        if (name === "") {

            alert("Please enter an expense name.");
            return;
        }

        if (amount <= 0 || isNaN(amount)) {

            alert("Please enter a valid expense amount.");
            return;
        }

        if (category === "") {

            alert("Please select an expense category.");
            return;
        }

        if (date === "") {

            alert("Please select an expense date.");
            return;
        }

        const newExpense = {
            name: name,
            amount: amount,
            category: category,
            date: date
        };

        expenses.push(newExpense);


        updateDashboard();


        console.log("New expense added:", newExpense);

        console.log(
            "Total expenses: KSh " +
            calculateTotalExpenses().toLocaleString()
        );


        expenseForm.reset();
    });
}

// ========================================
// SpendWise Sidebar Navigation
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

const pageSections = document.querySelectorAll(
    ".main-content > section"
);


// Show one section and hide the others
function showSection(sectionId) {

    pageSections.forEach(function(section) {

        section.classList.add("hidden-section");

    });


    const selectedSection =
        document.getElementById(sectionId);


    if (selectedSection) {

        selectedSection.classList.remove("hidden-section");

    }

}


// Handle menu clicks
navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();


        const sectionId =
            link.getAttribute("data-section");


        showSection(sectionId);


        // Remove active class
        navLinks.forEach(function(navLink) {

            navLink.classList.remove("active");

        });


        // Activate clicked menu
        link.classList.add("active");

    });

});


// Show Dashboard when SpendWise first opens
showSection("dashboard");

updateDashboard();

console.log("SpendWise interactive JavaScript loaded successfully.");

