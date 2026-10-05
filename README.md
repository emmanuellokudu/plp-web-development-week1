# SpendWise Dashboard

## Project Overview

SpendWise is a modern financial dashboard shell designed to serve as the foundation for a personal finance capstone project.

The Week 4 task focuses on creating the visual structure of the dashboard using HTML and modern CSS techniques. No JavaScript or financial functionality has been added at this stage.

The dashboard contains a sidebar navigation menu, a header, and six financial category cards displaying realistic static information.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* Responsive Design

## Dashboard Features

### Sidebar Navigation

The sidebar contains navigation links for:

* Dashboard
* Expenses
* Budget
* Savings
* Reports
* Settings

The navigation provides the main structure for the dashboard interface.

### Dashboard Header

The header contains the dashboard title, a short welcome message, and user information.

Flexbox is used to arrange the header content horizontally on larger screens.

### Financial Category Cards

The dashboard contains six category cards:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each card displays realistic static financial information.

## CSS Grid

CSS Grid is used to create the main dashboard layout.

The main layout separates:

* The sidebar
* The main dashboard content

CSS Grid is also used to arrange the six financial category cards into multiple columns.

## Flexbox

Flexbox is used inside several parts of the dashboard, including:

* Sidebar navigation
* Dashboard header
* Financial cards
* Responsive navigation

This allows the content to be arranged neatly and adapt to different screen sizes.

## CSS Custom Properties

The application's theme is defined using CSS variables inside the `:root` selector.

The variables include:

* Brand color
* Accent color
* Background color
* Surface color
* Primary text color
* Secondary text color
* Border color

Using CSS variables makes the color theme consistent and easier to maintain.

## Responsive Design

A media query is included for screens below 768px.

On smaller screens:

* The sidebar and main content become a single-column layout.
* Navigation links can wrap onto multiple lines.
* The financial cards are displayed in a single column.
* The dashboard header changes to a vertical layout.

The responsive layout can be tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

The financial cards include subtle hover and keyboard focus effects.

When a user hovers over or focuses on a card:

* The card moves slightly upward.
* A subtle shadow appears.
* A focus outline is displayed for keyboard users.

The transition lasts 200 milliseconds, which meets the requirement of keeping the animation at 250 milliseconds or less.

The cards use `tabindex="0"` so they can also receive keyboard focus.

## Dark Theme

A dark theme has been included as a stretch goal.

The dark theme uses:

```css
@media (prefers-color-scheme: dark)
```

Only the CSS custom properties are overridden to change the application's colors while keeping the same dashboard structure.

## Project Structure

```text
spendwise-dashboard/
│
├── index.html
├── style.css
└── README.md
```

### `index.html`

Contains the structure of the SpendWise dashboard, including the sidebar, header, navigation menu, and financial category cards.

### `style.css`

Contains all visual styling, including the Grid and Flexbox layouts, color variables, responsive design, card animations, and dark theme.

### `README.md`

Documents the project, its features, technologies, and implementation details.

## Conclusion

The SpendWise Dashboard Shell provides a clean and responsive foundation for the future financial management application.

The project demonstrates the use of CSS Grid, Flexbox, CSS custom properties, responsive design, and subtle micro-interactions while keeping the dashboard focused on visual structure rather than functionality.


# SpendWise

## Project Description

SpendWise is a simple personal budgeting application designed to help users keep track of their budget and expenses.

For Week 6, the SpendWise project has been upgraded from a visual dashboard into a JavaScript-powered application. JavaScript is used to collect information from the user, store data, perform budget calculations, and display the results in the browser console.

## Project Files

The project contains the following files:

- `index.html` - Contains the structure and content of the SpendWise dashboard.
- `style.css` - Contains the styling and layout of the SpendWise application.
- `script.js` - Contains the JavaScript logic for collecting input, storing data, performing calculations, and displaying results.
- `README.md` - Explains the project and the JavaScript concepts implemented.

## JavaScript Concepts Implemented

The following JavaScript concepts were implemented in this project:

- Variables
- Data types
- User input
- Number conversion
- Calculations
- Functions
- Conditional statements
- Console output

## 1. Variables and Application Data

Variables are used to store important budgeting and expense information.

For example:


let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

Other variables store information about the expense:


let expenseName = "";
let expenseAmount = 0;
let expenseCategory = "";


These variables allow the application to store and process information while it is running.

## 2. User Input

SpendWise collects budgeting information from the user using JavaScript's `prompt()` function.

The user is asked to provide:

* Monthly budget
* Expense name
* Expense amount
* Expense category

For example:


let budgetInput = prompt("Enter your monthly budget in KSh:");


The expense amount is also collected using a prompt:


let amountInput = prompt("Enter the expense amount in KSh:");


## 3. Data Conversion

Information collected through `prompt()` is initially treated as text.

The `Number()` function is therefore used to convert the budget and expense amount into numbers so that calculations can be performed.

Example:

```javascript
monthlyBudget = Number(budgetInput);
expenseAmount = Number(amountInput);
```

## 4. Budget Calculations

SpendWise calculates the remaining balance by subtracting total expenses from the monthly budget.

The calculation is handled by a reusable function:

```javascript
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}
```

The function is then called using:

```javascript
remainingBalance = calculateRemainingBalance(
    monthlyBudget,
    totalExpenses
);
```

For example, if the monthly budget is KSh 50,000 and the expense is KSh 5,000:

```text
Remaining Balance = KSh 45,000
```

## 5. Reusable Functions

Functions are used to organize the JavaScript code and make the application logic easier to manage.

The project includes a function called:

```javascript
calculateRemainingBalance()
```

This function calculates the remaining amount after expenses.

Another function called:

```javascript
checkBudgetStatus()
```

checks whether the user still has money remaining, has used the entire budget, or has gone over budget.

## 6. Conditional Statements

The `checkBudgetStatus()` function uses `if`, `else if`, and `else` statements to determine the user's budget status.

If the remaining balance is greater than zero, the application reports that the user still has money available.

If the balance is zero, it reports that the entire budget has been used.

If the balance is below zero, it reports that the user is over budget.

## 7. Displaying Results

The calculated information is displayed in the browser's developer console using `console.log()`.

The console displays:

* Monthly budget
* Expense name
* Expense amount
* Expense category
* Total expenses
* Remaining balance
* Budget status

Example output:

```text
========== SpendWise Budget Report ==========
Monthly Budget: KSh 50000
Expense Name: Lunch
Expense Amount: KSh 500
Expense Category: Food
Total Expenses: KSh 500
Remaining Balance: KSh 49500
Budget Status: You have KSh 49500 remaining.
============================================
```

## How to Test the Application

1. Open `index.html` in a web browser.
2. JavaScript will ask for the monthly budget.
3. Enter the budget amount.
4. Enter the expense name.
5. Enter the expense amount.
6. Enter the expense category.
7. Open the browser Developer Tools.
8. Select the **Console** tab.
9. Check the SpendWise Budget Report and calculated remaining balance.

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Future Improvements

The current version provides the JavaScript foundation for SpendWise.

Future versions can use JavaScript to allow users to add multiple expenses directly to the dashboard, update the expense table automatically, calculate total spending across different categories, and provide more detailed budget reports.

## Author

SpendWise Project

```

This README directly covers the **six Week 6 requirements** and gives the grader clear evidence of where variables, input, calculations, functions, and console output are implemented.
```
