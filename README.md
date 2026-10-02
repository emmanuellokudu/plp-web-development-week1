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
