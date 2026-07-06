# Imara-Mart

A modern e-commerce web application that allows users to browse products, view product details, search items, add products to a shopping cart, and complete a protected checkout process. It demonstrates real-world e-commerce functionality with state management, routing, and a smooth user experience.

---

## Features

- Display a list of products from an API
- View detailed product information
- Search and filter products in real time
- Add products to shopping cart
- Remove products from cart
- Update product quantity in cart
- Calculate total cart price
- Protected checkout page (authentication required)
- Login and logout functionality
- Responsive user interface
- Built with reusable React components

---

## Technologies Used

- React (Vite)
- React Router DOM
- Context API
- Tailwind CSS
- JavaScript (ES6+)
- Sonner (toast notifications)
- Git & GitHub

---

## Project Structure
```
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── ProductCard.jsx
│ │ ├── ProtectedRoute.jsx
│ │
│ ├── context/
│ │ ├── CartContext.jsx
│ │ ├── AuthContext.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Products.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── Cart.jsx
│ │ ├── Checkout.jsx
│ │ ├── Login.jsx
│ │
│ ├── services/
│ │ ├── api.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Mwas1515/Imara-mart-.git
```

Navigate into the project folder:
```
cd imara-mart
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

## Build for Production
```
npm run build
```

## Live Demo

https://imara-mart.vercel.app/


## Author
Denis Mwangi

GitHub: https://github.com/Mwas1515

## License

This project is licensed under the MIT License