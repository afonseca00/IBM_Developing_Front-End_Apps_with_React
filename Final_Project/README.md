# Paradise Nursery - Plant Shopping Cart Application

Welcome to *Paradise Nursery*, an online plant shop offering a variety of houseplants. This project is a shopping cart application built with React and Redux that allows users to browse plants, add them to their cart, and manage their purchases.

## 🌐 Live Demo

You can view the application live here: [Paradise Nursery](https://afonseca00.github.io/e-plantShopping/)

---

## 🛠 Project Features

### *Landing Page*
- Includes a *background image*.
- A *paragraph about the company* highlighting its values.
- The *company name*, "Paradise Nursery".
- A *Get Started* button that links to the product listing page.

---

### *Product Listing Page*
- Displays at least six unique houseplants, *organized into three categories*:
  - Each plant displays:
    - *Thumbnail Image*
    - *Name*
    - *Price*
  - Each plant includes an *Add to Cart button* with dynamic behavior:
    - After clicking, the cart icon dynamically updates the total quantity of items.
    - The button becomes *disabled* after adding the plant to the cart.
    - The plant is added to the *shopping cart*.
- Header features:
  - A *shopping cart icon* dynamically displaying the total number of items in the cart.
  - *Navigation links* to the landing page and the shopping cart page.

---

### *Shopping Cart Page*
- Displays:
  - *Total number of plants* in the cart.
  - *Total cost* of all items in the cart.
- Includes buttons:
  - *Checkout*: Displays a "Coming Soon" message.
  - *Continue Shopping*: Links back to the product listing page.
- Each plant in the cart shows:
  - *Thumbnail image, **name, and **unit price*.
  - The *total cost* for all items of that type.
  - *Increase and Decrease buttons* to adjust the quantity:
    - Updates the total cost and the cart icon dynamically.
  - A *Delete button* to remove the plant from the cart.

---

## 💻 Learning Objectives

By completing this project, you will gain hands-on experience with:
- *React Components*: Build functional components using composition and nesting.
- *State Management with Hooks*: Use useState and useEffect hooks for managing component-level state.
- *Redux Integration*: Implement Redux with actions, reducers, and a store.
- *Dynamic Rendering*: Use array mapping to dynamically render data in the UI.
- *Event Handling and Conditional Rendering*: Handle user interactions and dynamically update the UI based on events.

---

## 🚀 Prerequisites

To understand and contribute to this project, you should have:
- A basic understanding of GitHub and your own GitHub account.
- Knowledge of React functional components, props, hooks, and Redux Toolkit.
- A web browser with developer tools, such as Chrome DevTools or Firefox Console.

---

## 📂 Project Structure

The application consists of three main pages:

1. *Landing Page*: Introduces the company and links to the product listing page.
2. *Product Listing Page*: Displays plants grouped into categories, with add-to-cart functionality.
3. *Shopping Cart Page*: Shows cart items with options to update quantities or delete items.

### File Organization
- src/: Contains the source code for the project.
  - components/: Reusable UI components.
  - redux/: Redux slice and store configurations.
  - App.js: Main application entry point.
  - ProductList.jsx: Displays products and handles cart interactions.
  - CartItem.jsx: Manages cart item display and actions.

---

## 🛠 Development and Deployment

### *Development Setup*
1. Clone the repository:
   ```bash
   git clone https://github.com/afonseca00/e-plantShopping.git