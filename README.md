# Beshara E-Commerce Web Application

## Description
This project is a fully responsive e-commerce web application that allows users to sign up, log in, browse product categories, and manage a shopping cart. The application implements authentication, state management, error handling, and performance optimizations. It is deployed and accessible at **[beshara.vercel.app](https://beshara.vercel.app/login)**.

## Features
### 🔐 User Authentication:
- Sign-up functionality stores a list of accounts in `localStorage`.
- Login validates credentials and displays error messages if incorrect.
- Protected routes restrict access to authenticated users only.

### 🏠 Home Page:
- Displays product categories fetched from an API.
- Uses collapsible sections to show products within each category.
- Clicking a product opens its detailed view.

### 🛒 Shopping Cart:
- Users can add products to the cart.
- Implemented state management using **Redux**.
- Users can check if an item is already in the cart.
- Drag-and-drop sorting for products in the cart.

### ⚠️ Error Handling:
- API errors are caught and displayed to users for better UX.

### ⚡ Performance Optimizations:
- Lazy loading for product components.
- Efficient state updates using Redux.

### 📱 Responsive Design:
- Fully responsive layout that adapts to all screen sizes.
- Uses modern CSS techniques for an optimal mobile and desktop experience.

## 🚀 Deployment
This project is live and accessible at:
👉 **[beshara.vercel.app](https://beshara.vercel.app/login)**

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/seifehab1m/beshara.git
   ```
2. Navigate to the project directory:
   ```bash
   cd beshara
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
5. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## 📌 Additional Notes
- Ensure your browser allows local storage access for proper authentication.
- To reset user accounts, clear the `localStorage` from developer tools.
- API errors are handled gracefully, providing feedback to the user.
- The project follows best practices for code structure, readability, and maintainability.

