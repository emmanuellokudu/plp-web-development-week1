# My Budget Tracker

## Project Description

My Budget Tracker is a simple web page for recording and viewing personal expenses. This project was built using HTML and CSS as an extension of the Budget Tracker created in Week 1.

The Week 2 version adds an expense table, an improved expense form, multimedia content, an interactive information section, and advanced CSS selectors.

## Technologies Used

* HTML5
* CSS3

## Project Files

### `index.html`

The `index.html` file contains the structure and content of the Budget Tracker.

It includes:

* A main heading and description
* A budget tracker icon using an `<img>` element
* An Add Expense form
* Text, number, and date inputs
* A category `<select>` dropdown
* An Add Expense button
* An expense table
* Five sample expense records
* A `<details>` and `<summary>` section explaining how to use the tracker
* An embedded YouTube budgeting video using an `<iframe>`

### `style.css`

The `style.css` file controls the appearance of the Budget Tracker.

It includes:

* Page and section styling
* Table borders and spacing
* A colored table header
* Alternating table row colors
* Table row hover effects
* Form and input styling
* Input focus effects
* Button styling
* Responsive iframe styling
* Advanced CSS selectors

## Expense Table

The expense table uses the correct HTML table structure:

* `<table>` creates the table.
* `<thead>` contains the table heading.
* `<tbody>` contains the expense records.
* `<tr>` creates table rows.
* `<th>` creates column headings.
* `<td>` contains the expense information.

The table contains four columns:

1. Name
2. Amount
3. Category
4. Date

It also contains five sample expense records.

## Add Expense Form

The Add Expense section uses a proper `<form>` element.

The category field is a `<select>` dropdown with five options:

* Food
* Transport
* Rent
* Entertainment
* Other

The form also contains inputs for:

* Expense name
* Amount
* Date

Each input has a clear and unique `id` attribute.

The form includes an `Add Expense` button with `type="button"`.

The button is currently visual only. JavaScript functionality will be added in a later week.

## Multimedia

The page includes an image using the `<img>` element with:

* `src`
* `alt`
* `width`

A relevant YouTube video is also embedded using an `<iframe>` with:

* `width`
* `height`
* `title`
* `frameborder`

## Interactive Elements

A `<details>` and `<summary>` element was added to create a collapsible "How to use this tracker" section.

The table rows also have a hover effect. When the mouse moves over a table row, its background color changes.

The button uses `cursor: pointer` so the mouse changes to a hand when it is placed over the button.

## Advanced CSS Selectors

The project uses several advanced CSS selectors.

### Descendant Selector

.expenses td

This targets table cells inside the expenses section.

### Direct Child Selector


#add-expense > form


This targets the form that is a direct child of the Add Expense section.

### Position-Based Pseudo-Class


tr:nth-child(even)

This gives alternating background colors to table rows.

### Negation Pseudo-Class

input:not([type="submit"])

This targets input elements that are not submit buttons.

### Focus Pseudo-Class

input:focus

This changes the appearance of an input when the user selects it.

## Current Functionality

The current version is mainly the visual and structural foundation of the Budget Tracker.

The expense button does not add new expenses yet. JavaScript functionality will be introduced in a future stage of the project.

## Future Improvements

Future versions of the Budget Tracker can include:

* Adding expenses dynamically
* Removing expenses
* Calculating total expenses
* Filtering expenses by category
* Saving expenses
* Adding JavaScript interactivity
* Improving mobile responsiveness

## Author

**Emmanuel Lokudu**

## Project Status

Week 2 HTML and CSS development completed.
