# 🛒 Dino Shop

**Dino Shop** – A complete, fully responsive Persian online store for digital goods, built with **HTML, CSS and Vanilla JavaScript**.
Designed with **real RTL layout, clean spacing, smooth micro-interactions and reusable components**, perfect for portfolio showcase.

> ⚡ **Portfolio-Level Project** – Showcasing Senior Front-End expertise in **RTL e-commerce UI, product browsing flows and reusable component design**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-8d43f5?style=for-the-badge&logo=googlechrome&logoColor=white)](https://shop.condev.ir/)

---

## 🛠 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JS-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-%230769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-%237952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-%23528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![RTL](https://img.shields.io/badge/RTL-%2300AEEF?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-%2300AEEF?style=for-the-badge)

---

## ✨ Key Features

- 🏠 **Home Page** – Hero slider, promo offer boxes, category rows, product carousels and a blog preview
- 🗂 **Mega Menu** – Tabbed category menu with brands and sub-categories, plus an off-canvas menu on mobile
- 🔍 **Search Bar** – Search products, brands and categories straight from the header
- 🛍 **Shop & Category Pages** – Product grid with banners, category blocks and pagination
- 📦 **Product Page** – Image gallery with click-to-zoom, price, specs and add-to-cart / add-to-favorites
- 🛒 **Cart & Discount** – Quantity control, a discount code field and a live order summary up to checkout
- 🧾 **Orders & Invoice** – Order tracking with invoice details and delivery status
- ❤️ **Favorites** – Saved products list with quick add-to-cart
- 📰 **Blog** – Article list plus a single article page with tags and related posts
- ❓ **FAQ** – Accordion of the most common buying, shipping, return and payment questions
- 👤 **Login & Password Reset** – Sign-in / sign-up screens and a password recovery flow
- 🚫 **404 Page** – Friendly not-found screen with a search field and a way back home
- 🇮🇷 **Persian First** – Full RTL layout with Persian content and typography
- 📱 **Fully Responsive** – Tuned for desktop, tablet and mobile viewports
- ⚡ **No Build Step** – Plain HTML, CSS and JavaScript with self-hosted fonts, Bootstrap, jQuery and Font Awesome

---

## 📸 Visual Preview

<div align="center">

### 🏠 Home

*Hero slider, offer boxes, category rows and product carousels.*

![Home](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Home-Demo.png)

---

### 🗂 Shop / Category

*Category listing with banners, product grid and pagination.*

![Category](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Category-Demo.png)

---

### 📦 Product

*Gallery with click-to-zoom, price, specs and add-to-cart.*

![Product](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Product-Demo.png)

---

### 🛒 Cart

*Quantity control, discount code and a live order summary.*

![Cart](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Cart-Demo.png)

---

### 📰 Blog

*Article list and single article page with tags.*

![Blog](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Blog-Demo.png)

---

### ❓ FAQ

*Accordion of the most common buying and payment questions.*

![FAQ](https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Question-Demo.png)

---

### 📱 Mobile

*Off-canvas menu and stacked cards, down to a 390px viewport.*

<img src="https://raw.githubusercontent.com/condev-dev/dinoshop/main/assets/Images/Mobile-Demo.png" width="320" alt="Mobile">

---

### 🔗 Live Demo

**[shop.condev.ir](https://shop.condev.ir/)**

</div>

---

## 🗂 Pages

| Page | What it does |
| --- | --- |
| `index.html` | Home page with hero slider, offers, category rows and product carousels |
| `Category.html` | Shop / category listing with product grid and pagination |
| `Product.html` | Product detail with image gallery, zoom, specs and add-to-cart |
| `Cart.html` | Cart with quantity control, discount code and order summary |
| `Invoice.html` | Order tracking and invoice details |
| `Favorites.html` | Saved products list |
| `Blog.html` | Blog article list |
| `BlogNews.html` | Single blog article |
| `Question.html` | FAQ accordion |
| `aboutUs.html` | About the store |
| `ContactUs.html` | Contact details and message form |
| `Login.html` | Sign in / sign up |
| `ResetPass.html` | Password recovery |
| `Error404.html` | Not-found page |

## 🧩 Project Structure

| Path | Description |
| --- | --- |
| `assets/css/Main.min.css` | Design tokens, layout, header, footer and shared components |
| `assets/css/*.min.css` | Per-page styles (category, product, cart, invoice, blog, login, ...) |
| `assets/Scss` | SCSS sources for the stylesheets |
| `assets/Js/Main.js` | Slider, menu, search, cart and UI interactions |
| `assets/Js/jquery-3.5.1.min.js` | Vendored jQuery |
| `assets/Js/bootstrap` | Vendored Bootstrap components, grid and bundle |
| `assets/Js/popper.js` | Vendored Popper for Bootstrap tooltips and dropdowns |
| `assets/Js/blowup.js` | Click-to-zoom for the product gallery |
| `assets/fontawesome-free-5.15.4-web` | Self-hosted Font Awesome 5 icons |
| `assets/fonts` | Self-hosted webfonts |
| `assets/Images` | Product, blog, banner artwork and readme screenshots |

---

## ⚙️ How It Works

1. Land on the home page and browse the hero slider, offer boxes and product carousels
2. Open a category from the mega menu or search for a product in the header
3. Open a product, zoom into the gallery images and add it to the cart or favorites
4. Review the cart, apply a discount code and continue to checkout
5. Follow the order afterwards from the invoice and tracking page
6. Read the blog for buying guides and check the FAQ for common questions

---

## 🚀 Setup

```bash
git clone https://github.com/condev-dev/dinoshop.git
cd dinoshop
open index.html
```

No install, no build, no dependencies. Just open it in a browser.

---

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**© ConDev** – All rights reserved.
