# 🍔 Food Master India

A responsive online food-ordering web app for the Indian market, built with **plain HTML, CSS and JavaScript** — no frameworks, no build step, no backend. It is styled after the ordering experience of popular Indian quick-service restaurant apps and includes a full menu, filters, a coupon engine, a meal customizer, and INR billing with GST.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

> **Disclaimer:** This is a learning / portfolio demo project. Brand and product names (McDonald's, Domino's, McAloo Tikki, etc.) are used only as inspiration for a realistic menu and belong to their respective owners. This project is not affiliated with or endorsed by any of them. No real orders or payments are processed.

---

## 📸 Preview

<!-- Add a screenshot or GIF here, e.g.: -->
<!-- ![Food Master India screenshot](screenshots/home.png) -->

---

## ✨ Features

**Menu & discovery**
- 30 menu items across 6 categories: Burgers & Wraps, Pizza & Desi Sides, Chicken & Snacks, Combos & Super Savers, Desserts & Sweets, and McCafé & Drinks
- Live search across item name, description, tags and badges
- Sort by popularity, price (low/high), calories, or name
- Dietary filter chips: All, Pure Veg, Non-Veg, Desi Spicy, Offers Only
- Header **Pure Veg** toggle switch
- FSSAI-style green (veg) / red (non-veg) indicators on every item
- Friendly empty state with one-click "Reset All Filters"

**Offers & coupons**
- Auto-scrolling promo carousel with clickable indicator dots
- Flash-deal announcement bar with a live countdown timer
- Coupon engine supporting flat, percentage (with max cap) and buy-one-get-one-50%-off discounts
- Minimum-order validation with clear error toasts
- Timed slide-in promo pop-up with quick add

**Cart & billing**
- Add to cart directly or through the customizer
- Quantity controls, item removal, and merging of identical customizations
- Free-delivery progress bar
- Itemized bill: item total, coupon savings, delivery & packaging fee, GST, and grand total
- Cart and applied coupon persist across page reloads via `localStorage`

**Customizer & checkout**
- "Make it a Meal" options (A La Carte / Medium / Large)
- Desi add-ons (Peri Peri shaker mix, extra cheese, dips) and free-text cooking instructions with live price updates
- Checkout flow with Dine-In, Takeaway and Home Delivery options, and an order-confirmation screen with a generated order token

**UX**
- Fully responsive layout — the cart becomes a slide-over drawer on smaller screens
- Keyboard support: `Esc` closes modals, the cart drawer and the filter menu

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, Flexbox, Grid) |
| Logic | Vanilla JavaScript (ES6+) |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts |
| Images | Unsplash (hotlinked) |
| Storage | Browser `localStorage` |

---

## 🚀 Getting Started

No installation or build tools needed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/food-master-india.git

# 2. Open the project folder
cd food-master-india

# 3. Open index.html in your browser
```

You can simply double-click `index.html`, or serve the folder locally, for example with the VS Code **Live Server** extension or:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

> An internet connection is required for the Google Fonts and the Unsplash food images.

---

## 🎟️ Available Coupon Codes

| Code | Offer | Minimum order |
|------|-------|---------------|
| `FESTIVE150` | Flat ₹150 off | ₹599 |
| `SPICY50` | 50% off the second McSpicy-style burger | ₹250 |
| `PERIPERI` | ₹129 off (Peri Peri Fries value) | ₹399 |
| `CRUST399` | Flat ₹80 off | ₹350 |
| `DESI20` | 20% off, up to ₹100 | ₹299 |

---

## 🧾 Billing Rules

- **GST:** 5% (shown as 2.5% CGST + 2.5% SGST) on the discounted subtotal
- **Delivery & packaging:** ₹35, or **free** when the discounted subtotal is ₹499 or more
- **Grand total:** discounted subtotal + GST + delivery fee

---

## 📁 Project Structure

```
food-master-india/
├── index.html   # Page structure: header, carousel, menu grid, cart, modals
├── style.css    # All styling, theming (CSS variables) and responsive rules
└── script.js    # Product catalog, state, filtering, cart, coupons, checkout
```

### Where to customize

- **Menu items** — edit the `PRODUCTS` array at the top of `script.js` (each item has `id`, `name`, `category`, `price`, `originalPrice`, `isVeg`, `calories`, `description`, `tags`, `badge`, `image`)
- **Categories** — edit the `CATEGORIES` array
- **Coupons** — edit the `COUPONS` object (supports `flat`, `percent` and `bogo` types)
- **Colors & spacing** — edit the CSS variables in the `:root` block of `style.css`
- **GST / delivery rules** — see `calculateCartTotals()` in `script.js`

---

## ⚠️ Known Limitations

- Front-end only: orders are simulated, there is no server, database or real payment gateway
- The cart is pre-filled with a few sample items on first load
- Cart data is stored per browser in `localStorage`; clearing site data resets it
- The `PERIPERI` coupon applies as a flat ₹129 discount rather than adding a free item to the cart
- The `SPICY50` discount is applied to the first eligible burger in the cart
- Product images depend on Unsplash URLs remaining available

---

## 🗺️ Roadmap

- [ ] Backend and database for real menu and order management
- [ ] User accounts and order history
- [ ] UPI / payment gateway integration
- [ ] Live order tracking
- [ ] Self-hosted product images
- [ ] Accessibility improvements (focus trapping in modals, ARIA labels)

---

## 🤝 Contributing

Suggestions and pull requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Add a `LICENSE` file to your repository if you choose this option.

---

## 👤 Author

**Shourya**
GitHub: [@your-username](https://github.com/your-username)
