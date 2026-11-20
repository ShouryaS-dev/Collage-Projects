/**
 * Food Master India - Enterprise QSR & E-Commerce Web Application
 * Fully Optimized for Indian Fast Food Market (McDonald's India & Domino's India)
 * Features: INR (₹) Currency, FSSAI 🟢 Veg / 🔴 Non-Veg Standards,
 * Pure Veg Filter Switch, Indian Festive Deals, Meal Customizer & Indian GST Billing.
 */

// ==========================================================================
// 1. COMPREHENSIVE INDIAN PRODUCT CATALOG (38+ AUTHENTIC DESI ITEMS)
// ==========================================================================
const PRODUCTS = [
  // --- INDIAN BURGERS & WRAPS ---
  {
    id: "mcd-in-101",
    name: "McAloo Tikki Burger®",
    category: "Burgers & Wraps",
    price: 59,
    originalPrice: null,
    isVeg: true,
    calories: "340 Cal",
    description: "The timeless Indian icon: spiced potato & green peas patty infused with traditional Indian spices, topped with sweet tomato mayo & fresh red onions.",
    tags: ["Pure Veg", "Desi Masala"],
    badge: "All-Time Fav",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-102",
    name: "McSpicy Paneer Burger®",
    category: "Burgers & Wraps",
    price: 189,
    originalPrice: 219,
    isVeg: true,
    calories: "520 Cal",
    description: "Rich, soft paneer patty coated in spicy, crispy batter, topped with creamy tandoori mayo and shredded lettuce on toasted sesame buns.",
    tags: ["Pure Veg", "Spicy", "Dairy"],
    badge: "Spicy 🌶️",
    badgeType: "spicy",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-103",
    name: "McSpicy Chicken Burger®",
    category: "Burgers & Wraps",
    price: 199,
    originalPrice: 229,
    isVeg: false,
    calories: "490 Cal",
    description: "Tender, juicy chicken patty marinated in flaming Indian spices, deep fried golden with spicy habanero sauce & iceberg lettuce.",
    tags: ["Chicken", "Spicy"],
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-104",
    name: "Veg Maharaja Mac®",
    category: "Burgers & Wraps",
    price: 229,
    originalPrice: null,
    isVeg: true,
    calories: "680 Cal",
    description: "The Grand Emperor of Veg Burgers! Double layered crispy corn and cheese patties, fiery cocktail sauce, jalapeños, cheese & crisp lettuce.",
    tags: ["Pure Veg", "Grand Feast", "Dairy"],
    badge: "Royal Mac 👑",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-105",
    name: "Chicken Maharaja Mac®",
    category: "Burgers & Wraps",
    price: 249,
    originalPrice: null,
    isVeg: false,
    calories: "710 Cal",
    description: "Double flame-grilled spiced chicken patties stacked with crunchy lettuce, onions, jalapeños, cheese slice and royal cocktail sauce.",
    tags: ["Chicken", "Grand Feast"],
    badge: "Royal Mac 👑",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-106",
    name: "McVeggie® Burger",
    category: "Burgers & Wraps",
    price: 139,
    originalPrice: null,
    isVeg: true,
    calories: "410 Cal",
    description: "Battered and breaded patty made of green peas, carrots, green beans, red bell pepper & potatoes with herb mayonnaise.",
    tags: ["Pure Veg"],
    badge: "Classic",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-107",
    name: "Big Spicy Paneer Wrap",
    category: "Burgers & Wraps",
    price: 219,
    originalPrice: null,
    isVeg: true,
    calories: "580 Cal",
    description: "Crispy fried paneer finger rolls wrapped in a warm whole-wheat paratha with mint mayonnaise, onions & green chilies.",
    tags: ["Pure Veg", "Spicy"],
    badge: "Desi Wrap",
    badgeType: "spicy",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
  },

  // --- PIZZA, GARLIC BREAD & SIDES (DOMINO'S INDIA INSPIRED) ---
  {
    id: "dom-in-201",
    name: "Stuffed Garlic Breadsticks",
    category: "Pizza & Desi Sides",
    price: 149,
    originalPrice: 179,
    isVeg: true,
    calories: "420 Cal",
    description: "Domino's India legend: freshly baked artisan dough stuffed with liquid cheddar cheese, mozzarella and sweet corn kernels.",
    tags: ["Pure Veg", "Dairy"],
    badge: "Domino's Fav",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-202",
    name: "Peppy Paneer Pizza (Medium)",
    category: "Pizza & Desi Sides",
    price: 259,
    originalPrice: 319,
    isVeg: true,
    calories: "780 Cal",
    description: "Flavorful chunks of spicy cottage cheese (paneer), crisp capsicum, and fiery red paprika over 100% mozzarella cheese.",
    tags: ["Pure Veg", "Spicy", "Dairy"],
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-203",
    name: "Farmhouse Veggie Pizza",
    category: "Pizza & Desi Sides",
    price: 279,
    originalPrice: null,
    isVeg: true,
    calories: "720 Cal",
    description: "Loaded with fresh crunchy onions, crisp capsicum, juicy ripe tomatoes and tender grilled mushrooms on herb crust.",
    tags: ["Pure Veg"],
    badge: "Popular",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-204",
    name: "Chicken Golden Delight Pizza",
    category: "Pizza & Desi Sides",
    price: 349,
    originalPrice: 429,
    isVeg: false,
    calories: "840 Cal",
    description: "Double barbecued chicken strips, golden sweet corn, and a double layer of mozzarella baked to bubbling perfection.",
    tags: ["Chicken", "Dairy"],
    badge: "Dhamaka Deal",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-205",
    name: "Pizza McPuff®",
    category: "Pizza & Desi Sides",
    price: 49,
    originalPrice: null,
    isVeg: true,
    calories: "220 Cal",
    description: "Crispy brown pastry pocket stuffed with delicious tomato pizza sauce, melted mozzarella, capsicum, onion and green peas.",
    tags: ["Pure Veg", "Snack King"],
    badge: "Iconic ₹49",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-206",
    name: "Peri Peri Fries (with Shaker Bag)",
    category: "Pizza & Desi Sides",
    price: 129,
    originalPrice: null,
    isVeg: true,
    calories: "380 Cal",
    description: "World Famous French Fries served with our signature Peri Peri spice shaker pouch. Pour, shake and enjoy sizzling spice!",
    tags: ["Pure Veg", "Spicy 🌶️"],
    badge: "Must Try",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-207",
    name: "World Famous Fries® (Medium)",
    category: "Pizza & Desi Sides",
    price: 109,
    originalPrice: null,
    isVeg: true,
    calories: "320 Cal",
    description: "Golden on the outside and fluffy on the inside, salted just right. Made with premium farm potatoes.",
    tags: ["Pure Veg", "Gluten-Free"],
    badge: null,
    badgeType: null,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-208",
    name: "Paneer Zingy Parcel",
    category: "Pizza & Desi Sides",
    price: 59,
    originalPrice: null,
    isVeg: true,
    calories: "280 Cal",
    description: "Fluffy folded crust parcel filled with marinated harissa paneer, creamy mayo and baked golden.",
    tags: ["Pure Veg", "Snack"],
    badge: "Budget Pick",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
  },

  // --- CHICKEN & SNACKS ---
  {
    id: "mcd-in-301",
    name: "6 Pc Chicken McNuggets®",
    category: "Chicken & Snacks",
    price: 169,
    originalPrice: null,
    isVeg: false,
    calories: "260 Cal",
    description: "Tender, bite-sized chicken nuggets fried golden brown in tempura batter. Served with Tangy Mustard dip.",
    tags: ["Chicken"],
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-302",
    name: "20 Pc Chicken McNuggets® SharePack",
    category: "Chicken & Snacks",
    price: 399,
    originalPrice: 479,
    isVeg: false,
    calories: "840 Cal",
    description: "Party size box of 20 crispy chicken McNuggets with 3 complimentary dips (BBQ, Tandoori & Sweet Mustard).",
    tags: ["Chicken", "Party Pack"],
    badge: "Save ₹80",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-303",
    name: "Crispy Fried Chicken Strips (4 Pc)",
    category: "Chicken & Snacks",
    price: 189,
    originalPrice: null,
    isVeg: false,
    calories: "390 Cal",
    description: "Juicy boneless chicken breast tenderloins fried crisp with secret 11-spice herb breading.",
    tags: ["Chicken"],
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1627662236973-4fd8258fa97a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-304",
    name: "Chicken Zingy Parcel",
    category: "Chicken & Snacks",
    price: 79,
    originalPrice: null,
    isVeg: false,
    calories: "310 Cal",
    description: "Warm pastry envelope stuffed with roasted spiced chicken and creamy peri-peri sauce.",
    tags: ["Chicken"],
    badge: "Snack Fav",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
  },

  // --- COMBOS & SUPER SAVERS ---
  {
    id: "mcd-in-401",
    name: "McAloo Tikki Value Meal",
    category: "Combos & Super Savers",
    price: 169,
    originalPrice: 199,
    isVeg: true,
    calories: "640 Cal",
    description: "1 McAloo Tikki Burger® + 1 Medium French Fries + 1 Chilled Coca-Cola® (Medium). Unbeatable Indian value!",
    tags: ["Pure Veg", "Value Meal"],
    badge: "Save ₹30",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-402",
    name: "McSpicy Paneer Meal",
    category: "Combos & Super Savers",
    price: 299,
    originalPrice: 349,
    isVeg: true,
    calories: "850 Cal",
    description: "1 McSpicy Paneer Burger® + 1 Medium French Fries + 1 Chilled Thums Up® (Medium).",
    tags: ["Pure Veg", "Spicy 🌶️"],
    badge: "Save ₹50",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-403",
    name: "Domino's Desi Duo Feast",
    category: "Combos & Super Savers",
    price: 399,
    originalPrice: 499,
    isVeg: true,
    calories: "1280 Cal",
    description: "1 Peppy Paneer Pizza + 1 Stuffed Cheesy Garlic Bread + 1 Cheesy Dip + 2 Cokes.",
    tags: ["Pure Veg", "Feast"],
    badge: "Save ₹100",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-404",
    name: "Family Sharing Mega Meal",
    category: "Combos & Super Savers",
    price: 699,
    originalPrice: 849,
    isVeg: true,
    calories: "2100 Cal",
    description: "2 McAloo Tikki, 2 McVeggie Burgers, 2 Large Fries, 2 Pizza McPuffs and 4 Fountain Drinks.",
    tags: ["Pure Veg", "Mega Saver"],
    badge: "Save ₹150",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },

  // --- DESSERTS & SWEETS ---
  {
    id: "dom-in-501",
    name: "Domino's Choco Lava Cake",
    category: "Desserts & Sweets",
    price: 109,
    originalPrice: 129,
    isVeg: true,
    calories: "340 Cal",
    description: "India's favorite dessert: chocolate cake with molten chocolate core flowing out when cut warm.",
    tags: ["Pure Veg", "Warm Sweet"],
    badge: "Top Rated ⭐",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-502",
    name: "McFlurry® with OREO®",
    category: "Desserts & Sweets",
    price: 119,
    originalPrice: null,
    isVeg: true,
    calories: "380 Cal",
    description: "Velvety vanilla soft serve ice cream blended with crushed crunchy Oreo® cookie bits.",
    tags: ["Pure Veg", "Dairy"],
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-503",
    name: "Soft Serve with Hot Fudge",
    category: "Desserts & Sweets",
    price: 69,
    originalPrice: null,
    isVeg: true,
    calories: "260 Cal",
    description: "Rich vanilla soft serve ice cream generously topped with piping hot gooey chocolate fudge sauce.",
    tags: ["Pure Veg", "Budget Sweet"],
    badge: "Classic ₹69",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80"
  },

  // --- MCCAFÉ® & INDIAN BEVERAGES ---
  {
    id: "mcd-in-601",
    name: "Indian Masala Chai Latte",
    category: "McCafé® & Drinks",
    price: 89,
    originalPrice: null,
    isVeg: true,
    calories: "160 Cal",
    description: "Steaming aromatic Assam black tea brewed with cardamom, ginger, cinnamon, and whole milk.",
    tags: ["Pure Veg", "Desi Chai"],
    badge: "Warm Desi",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-602",
    name: "McCafé® Iced Coffee",
    category: "McCafé® & Drinks",
    price: 119,
    originalPrice: null,
    isVeg: true,
    calories: "210 Cal",
    description: "Freshly brewed espresso poured over chilled whole milk, ice and rich sweet syrup.",
    tags: ["Pure Veg"],
    badge: "Refreshing",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-603",
    name: "Thums Up® Charged (Large)",
    category: "McCafé® & Drinks",
    price: 65,
    originalPrice: null,
    isVeg: true,
    calories: "220 Cal",
    description: "Taste the Thunder! India's favorite strong carbonated cola served ice chilled with crushed ice.",
    tags: ["Pure Veg"],
    badge: "Toofani ⚡",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-604",
    name: "Mango Smoothie with Chia Seeds",
    category: "McCafé® & Drinks",
    price: 139,
    originalPrice: null,
    isVeg: true,
    calories: "240 Cal",
    description: "Sweet Alphonso mango pulp blended with creamy yogurt and organic chia seeds.",
    tags: ["Pure Veg"],
    badge: "Summer Special",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80"
  }
];

// Available Indian Categories
const CATEGORIES = [
  "Burgers & Wraps",
  "Pizza & Desi Sides",
  "Chicken & Snacks",
  "Combos & Super Savers",
  "Desserts & Sweets",
  "McCafé® & Drinks",
  "All"
];

// Indian Fast-Food Festive Promo Coupons
const COUPONS = {
  "FESTIVE150": {
    code: "FESTIVE150",
    type: "flat",
    value: 150,
    minOrder: 599,
    description: "Flat ₹150 OFF on orders above ₹599"
  },
  "SPICY50": {
    code: "SPICY50",
    type: "bogo",
    value: 50,
    minOrder: 250,
    description: "50% OFF on second McSpicy burger"
  },
  "PERIPERI": {
    code: "PERIPERI",
    type: "flat",
    value: 129,
    minOrder: 399,
    description: "Free Peri Peri Fries (₹129 value) on orders above ₹399"
  },
  "CRUST399": {
    code: "CRUST399",
    type: "flat",
    value: 80,
    minOrder: 350,
    description: "Flat ₹80 OFF on Pizza + Garlic Bread Combo"
  },
  "DESI20": {
    code: "DESI20",
    type: "percent",
    value: 20,
    maxDiscount: 100,
    minOrder: 299,
    description: "20% OFF (up to ₹100) on orders above ₹299"
  }
};

// Initial cart items in INR matching realistic Indian order
const DEFAULT_INITIAL_CART = [
  {
    id: "mcd-in-101",
    name: "McAloo Tikki Burger®",
    price: 59,
    quantity: 2,
    isVeg: true,
    customizationNote: "A La Carte",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mcd-in-206",
    name: "Peri Peri Fries (with Shaker Bag)",
    price: 129,
    quantity: 1,
    isVeg: true,
    customizationNote: "Extra spicy shaker",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dom-in-201",
    name: "Stuffed Garlic Breadsticks",
    price: 149,
    quantity: 1,
    isVeg: true,
    customizationNote: "With liquid cheese dip",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=600&q=80"
  }
];

// ==========================================================================
// 2. APPLICATION STATE
// ==========================================================================
const state = {
  currentCategory: "Burgers & Wraps",
  searchQuery: "",
  selectedDiet: "all",
  isPureVegOnly: false, // FSSAI Veg filter switch
  sortBy: "default",
  appliedCoupon: null,
  cart: [],
  selectedCustomItem: null,
  carouselIndex: 0,
  countdownSeconds: 14 * 60 + 59
};

// ==========================================================================
// 3. DOM ELEMENTS
// ==========================================================================
const elements = {
  categoryPills: document.getElementById("category-pills"),
  activeCategoryName: document.getElementById("active-category-name"),
  productCountBadge: document.getElementById("product-count-badge"),
  totalMenuCounter: document.getElementById("total-menu-counter"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  filterToggleBtn: document.getElementById("filter-toggle-btn"),
  filterDropdown: document.getElementById("filter-dropdown"),
  sortSelect: document.getElementById("sort-select"),
  dietaryChips: document.querySelectorAll(".dietary-chip"),
  pureVegToggle: document.getElementById("pure-veg-toggle"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  countdownTimer: document.getElementById("countdown-timer"),
  brandLogo: document.getElementById("brand-logo"),

  // Carousel & Popups
  promoCarousel: document.getElementById("promo-carousel"),
  carouselDots: document.querySelectorAll("#carousel-dots .dot"),
  viewDealsBtn: document.getElementById("view-deals-btn"),
  promoSlidePopup: document.getElementById("promo-slide-popup"),
  closePromoPopup: document.getElementById("close-promo-popup"),
  quickAddPromoDealBtn: document.getElementById("quick-add-promo-deal-btn"),

  // Products Grid
  productsGrid: document.getElementById("products-grid"),
  noResultsState: document.getElementById("no-results"),

  // Cart Sidebar
  cartSidebar: document.getElementById("cart-sidebar"),
  cartBackdrop: document.getElementById("cart-backdrop"),
  mobileCartBtn: document.getElementById("mobile-cart-btn"),
  closeCartBtn: document.getElementById("close-cart-btn"),
  cartItemCounter: document.getElementById("cart-item-counter"),
  mobileCartCount: document.getElementById("mobile-cart-count"),
  cartItemsContainer: document.getElementById("cart-items-container"),
  cartEmptyState: document.getElementById("cart-empty-state"),
  cartFooter: document.getElementById("cart-footer"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartDiscountRow: document.getElementById("cart-discount-row"),
  cartDiscountValue: document.getElementById("cart-discount-value"),
  cartDeliveryFee: document.getElementById("cart-delivery-fee"),
  cartServiceCharge: document.getElementById("cart-service-charge"),
  cartTotalBadge: document.getElementById("cart-total-badge"),
  cartGrandTotal: document.getElementById("cart-grand-total"),
  checkoutBtn: document.getElementById("checkout-btn"),

  // Delivery Threshold Tracker
  thresholdStatusText: document.getElementById("threshold-status-text"),
  thresholdProgressFill: document.getElementById("threshold-progress-fill"),

  // Coupon Engine
  couponInput: document.getElementById("coupon-input"),
  applyCouponBtn: document.getElementById("apply-coupon-btn"),
  appliedCouponRow: document.getElementById("applied-coupon-row"),
  appliedCouponCode: document.getElementById("applied-coupon-code"),
  appliedDiscountDesc: document.getElementById("applied-discount-desc"),
  removeCouponBtn: document.getElementById("remove-coupon-btn"),
  toggleAvailableOffersBtn: document.getElementById("toggle-available-offers-btn"),
  availableCouponsList: document.getElementById("available-coupons-list"),

  // Customization Modal
  customizeModal: document.getElementById("customize-modal"),
  customizeCloseBtn: document.getElementById("customize-close-btn"),
  customFssaiSymbol: document.getElementById("custom-fssai-symbol"),
  customItemCategory: document.getElementById("custom-item-category"),
  customItemName: document.getElementById("custom-item-name"),
  customItemImg: document.getElementById("custom-item-img"),
  customItemDesc: document.getElementById("custom-item-desc"),
  customItemCals: document.getElementById("custom-item-cals"),
  customizerFinalPrice: document.getElementById("customizer-final-price"),
  customItemInstructions: document.getElementById("custom-item-instructions"),
  addCustomizedToCartBtn: document.getElementById("add-customized-to-cart-btn"),

  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalBodyContent: document.getElementById("modal-body-content"),
  modalSuccessScreen: document.getElementById("modal-success-screen"),
  modalSummaryList: document.getElementById("modal-summary-list"),
  modalPayableTotal: document.getElementById("modal-payable-total"),
  confirmOrderBtn: document.getElementById("confirm-order-btn"),
  newOrderBtn: document.getElementById("new-order-btn"),
  orderIdNumber: document.getElementById("order-id-number"),

  // Toast
  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toast-message")
};

// ==========================================================================
// 4. INITIALIZATION & STORAGE
// ==========================================================================
function initApp() {
  loadCartFromStorage();
  renderCategoryPills();
  renderProducts();
  renderCart();
  startCountdownTicker();
  setupEventListeners();
  initCarouselAutoScroll();
  scheduleOccasionalPromoPopup();

  if (elements.totalMenuCounter) {
    elements.totalMenuCounter.textContent = `${PRODUCTS.length} Desi Items`;
  }
}

function loadCartFromStorage() {
  const saved = localStorage.getItem("food_master_cart_inr");
  if (saved) {
    try {
      state.cart = JSON.parse(saved);
    } catch (e) {
      state.cart = [...DEFAULT_INITIAL_CART];
    }
  } else {
    state.cart = [...DEFAULT_INITIAL_CART];
    saveCartToStorage();
  }

  const savedCoupon = localStorage.getItem("food_master_coupon_inr");
  if (savedCoupon && COUPONS[savedCoupon]) {
    state.appliedCoupon = COUPONS[savedCoupon];
  }
}

function saveCartToStorage() {
  localStorage.setItem("food_master_cart_inr", JSON.stringify(state.cart));
  if (state.appliedCoupon) {
    localStorage.setItem("food_master_coupon_inr", state.appliedCoupon.code);
  } else {
    localStorage.removeItem("food_master_coupon_inr");
  }
}

// ==========================================================================
// 5. LIVE COUNTDOWN TICKER & OCCASIONAL PROMOTIONS
// ==========================================================================
function startCountdownTicker() {
  setInterval(() => {
    if (state.countdownSeconds <= 0) {
      state.countdownSeconds = 15 * 60;
    } else {
      state.countdownSeconds--;
    }

    const minutes = Math.floor(state.countdownSeconds / 60);
    const seconds = state.countdownSeconds % 60;
    elements.countdownTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

function scheduleOccasionalPromoPopup() {
  setTimeout(() => {
    if (elements.promoSlidePopup) {
      elements.promoSlidePopup.classList.remove("hidden");
    }
  }, 6500);
}

// ==========================================================================
// 6. PROMO CAROUSEL LOGIC
// ==========================================================================
function initCarouselAutoScroll() {
  const cards = elements.promoCarousel.querySelectorAll(".promo-card");
  if (cards.length === 0) return;

  setInterval(() => {
    state.carouselIndex = (state.carouselIndex + 1) % cards.length;
    scrollCarouselToIndex(state.carouselIndex);
  }, 6500);
}

function scrollCarouselToIndex(index) {
  const cards = elements.promoCarousel.querySelectorAll(".promo-card");
  if (!cards[index]) return;

  cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  elements.carouselDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

// ==========================================================================
// 7. CATEGORY PILLS NAVIGATION
// ==========================================================================
function renderCategoryPills() {
  elements.categoryPills.innerHTML = "";

  CATEGORIES.forEach(category => {
    const pill = document.createElement("button");
    pill.className = `category-pill ${state.currentCategory === category ? "active" : ""}`;
    pill.setAttribute("type", "button");

    let icon = "🍔";
    if (category.includes("Pizza")) icon = "🍕";
    else if (category.includes("Chicken")) icon = "🍗";
    else if (category.includes("Combos")) icon = "🍱";
    else if (category.includes("Desserts")) icon = "🍦";
    else if (category.includes("McCafé")) icon = "☕";
    else if (category === "All") icon = "✨";

    pill.innerHTML = `<span>${icon}</span> <span>${category}</span>`;

    pill.addEventListener("click", () => {
      state.currentCategory = category;
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      elements.activeCategoryName.textContent = category;
      renderProducts();
    });

    elements.categoryPills.appendChild(pill);
  });
}

// ==========================================================================
// 8. RENDER PRODUCTS WITH INDIAN FSSAI BADGES & FILTERS
// ==========================================================================
function getFilteredProducts() {
  let list = PRODUCTS.filter(item => {
    // Pure Veg Toggle Switch
    if (state.isPureVegOnly && !item.isVeg) return false;

    // Category Filter
    const matchesCategory = (state.currentCategory === "All") || (item.category === state.currentCategory);

    // Search Query
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q)) ||
      (item.badge && item.badge.toLowerCase().includes(q));

    // Dietary Filter Chips
    let matchesDiet = true;
    if (state.selectedDiet === "veg") {
      matchesDiet = item.isVeg;
    } else if (state.selectedDiet === "non-veg") {
      matchesDiet = !item.isVeg;
    } else if (state.selectedDiet === "spicy") {
      matchesDiet = item.tags.some(t => t.toLowerCase().includes("spicy")) || (item.badge && item.badge.includes("Spicy"));
    } else if (state.selectedDiet === "deals") {
      matchesDiet = item.originalPrice !== null || item.badgeType === "deal";
    }

    return matchesCategory && matchesSearch && matchesDiet;
  });

  // Sorting
  if (state.sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "cal-asc") {
    list.sort((a, b) => parseInt(a.calories) - parseInt(b.calories));
  } else if (state.sortBy === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  elements.productsGrid.innerHTML = "";

  elements.productCountBadge.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    elements.noResultsState.classList.remove("hidden");
    elements.productsGrid.style.display = "none";
    return;
  }

  elements.noResultsState.classList.add("hidden");
  elements.productsGrid.style.display = "grid";

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    // FSSAI Veg / Non-Veg Icon
    const fssaiClass = product.isVeg ? "veg" : "non-veg";
    const fssaiSymbolHtml = `<span class="fssai-symbol ${fssaiClass}" title="${product.isVeg ? '100% Pure Veg' : 'Non-Veg'}"></span>`;

    // Marketing Badge
    let badgeHtml = "";
    if (product.badge) {
      let badgeClass = "badge-bestseller";
      if (product.badgeType === "deal") badgeClass = "badge-deal";
      else if (product.badgeType === "spicy") badgeClass = "badge-spicy";
      else if (product.badgeType === "new") badgeClass = "badge-new";

      badgeHtml = `<span class="card-badge ${badgeClass}">${product.badge}</span>`;
    }

    // Price Display in INR (₹)
    let priceHtml = `<span class="product-price">₹${product.price}</span>`;
    if (product.originalPrice) {
      priceHtml = `
        <span class="product-price">₹${product.price}</span>
        <span class="original-price">₹${product.originalPrice}</span>
      `;
    }

    const tagsHtml = product.tags
      .map(tag => `<span class="tag-badge">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="card-top-badges">
          ${fssaiSymbolHtml}
          ${badgeHtml}
        </div>
        <span class="calories-badge">${product.calories}</span>
      </div>
      <div class="card-content">
        <div class="product-title-row">
          <h3 class="product-title">${product.name}</h3>
        </div>
        <p class="product-desc">${product.description}</p>
        <div class="product-tags">
          ${tagsHtml}
        </div>
        <div class="card-footer">
          <div class="price-wrap">
            ${priceHtml}
          </div>
          <div class="card-action-btns">
            <button class="quick-customize-btn" data-id="${product.id}" title="Customize your meal">
              Customize
            </button>
            <button class="add-to-cart-btn" data-id="${product.id}" title="Quick Add to Order" aria-label="Add ${product.name} to cart">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Open customizer on card or customize button click
    card.addEventListener("click", () => openCustomizerModal(product));

    const customBtn = card.querySelector(".quick-customize-btn");
    customBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openCustomizerModal(product);
    });

    const addBtn = card.querySelector(".add-to-cart-btn");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(product.id);
    });

    elements.productsGrid.appendChild(card);
  });
}

// ==========================================================================
// 9. INDIAN MEAL CUSTOMIZATION MODAL (INR)
// ==========================================================================
function openCustomizerModal(product) {
  state.selectedCustomItem = product;

  elements.customItemCategory.textContent = product.category;
  elements.customItemName.textContent = product.name;
  elements.customItemDesc.textContent = product.description;
  elements.customItemImg.src = product.image;
  elements.customItemCals.textContent = `⚡ ${product.calories}`;
  elements.customItemInstructions.value = "";

  // FSSAI symbol in modal
  elements.customFssaiSymbol.className = `fssai-symbol ${product.isVeg ? 'veg' : 'non-veg'}`;

  // Reset radio
  const regularRadio = elements.customizeModal.querySelector('input[name="meal_option"][value="regular"]');
  if (regularRadio) regularRadio.checked = true;

  // Uncheck add-ons
  elements.customizeModal.querySelectorAll('input[name="custom_addon"]').forEach(cb => cb.checked = false);

  updateCustomizerPrice();
  elements.customizeModal.classList.remove("hidden");
}

function updateCustomizerPrice() {
  if (!state.selectedCustomItem) return;

  let total = state.selectedCustomItem.price;

  const selectedMeal = elements.customizeModal.querySelector('input[name="meal_option"]:checked');
  if (selectedMeal) {
    total += parseFloat(selectedMeal.getAttribute("data-price") || 0);
  }

  const checkedAddons = elements.customizeModal.querySelectorAll('input[name="custom_addon"]:checked');
  checkedAddons.forEach(cb => {
    total += parseFloat(cb.getAttribute("data-price") || 0);
  });

  elements.customizerFinalPrice.textContent = `₹${total}`;
}

function addCustomizedItemToCart() {
  if (!state.selectedCustomItem) return;

  const product = state.selectedCustomItem;
  let unitPrice = product.price;
  let customDetails = [];

  const selectedMeal = elements.customizeModal.querySelector('input[name="meal_option"]:checked');
  if (selectedMeal) {
    const extra = parseFloat(selectedMeal.getAttribute("data-price") || 0);
    unitPrice += extra;
    if (selectedMeal.value === "medium") customDetails.push("Medium Meal (+ Fries & Coke)");
    if (selectedMeal.value === "large") customDetails.push("Large Meal (+ Lrg Fries & Thums Up)");
  }

  const checkedAddons = elements.customizeModal.querySelectorAll('input[name="custom_addon"]:checked');
  checkedAddons.forEach(cb => {
    unitPrice += parseFloat(cb.getAttribute("data-price") || 0);
    customDetails.push(cb.value);
  });

  const notes = elements.customItemInstructions.value.trim();
  if (notes) {
    customDetails.push(`Note: "${notes}"`);
  }

  const customKey = `${product.id}-${customDetails.join(",")}`;

  const existing = state.cart.find(i => i.customKey === customKey);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      customKey: customKey,
      name: product.name,
      price: unitPrice,
      isVeg: product.isVeg,
      quantity: 1,
      customizationNote: customDetails.length > 0 ? customDetails.join(" • ") : "Standard Prep",
      image: product.image
    });
  }

  saveCartToStorage();
  renderCart();
  closeCustomizerModal();
  showToast(`Added customized "${product.name}" to cart!`);
}

function closeCustomizerModal() {
  elements.customizeModal.classList.add("hidden");
  state.selectedCustomItem = null;
}

// ==========================================================================
// 10. SHOPPING CART LOGIC & INDIAN GST / BILLING ENGINE (INR)
// ==========================================================================
function addToCart(productId, customNote = null, customPrice = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const priceToUse = customPrice !== null ? customPrice : product.price;
  const noteToUse = customNote !== null ? customNote : "Standard Prep";
  const customKey = `${productId}-${noteToUse}-${priceToUse}`;

  const existingItem = state.cart.find(item => item.customKey === customKey || (!item.customKey && item.id === productId));

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      customKey: customKey,
      name: product.name,
      price: priceToUse,
      isVeg: product.isVeg,
      quantity: 1,
      customizationNote: noteToUse,
      image: product.image
    });
  }

  saveCartToStorage();
  renderCart();
  showToast(`Added "${product.name}" to cart`);
}

function updateQuantity(itemKeyOrId, delta) {
  const itemIndex = state.cart.findIndex(i => (i.customKey && i.customKey === itemKeyOrId) || i.id === itemKeyOrId);
  if (itemIndex === -1) return;

  const item = state.cart[itemIndex];
  const newQty = item.quantity + delta;

  if (newQty <= 0) {
    removeFromCart(itemKeyOrId);
  } else {
    item.quantity = newQty;
    saveCartToStorage();
    renderCart();
  }
}

function removeFromCart(itemKeyOrId) {
  const item = state.cart.find(i => (i.customKey && i.customKey === itemKeyOrId) || i.id === itemKeyOrId);
  state.cart = state.cart.filter(i => !((i.customKey && i.customKey === itemKeyOrId) || i.id === itemKeyOrId));
  saveCartToStorage();
  renderCart();
  if (item) {
    showToast(`Removed "${item.name}"`);
  }
}

// Indian Coupon Engine
function applyCoupon(code) {
  const cleanCode = code.toUpperCase().trim();
  const coupon = COUPONS[cleanCode];

  if (!coupon) {
    showToast("❌ Invalid coupon code. Try FESTIVE150 or SPICY50!");
    return;
  }

  const rawSubtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (rawSubtotal < coupon.minOrder) {
    showToast(`⚠️ Minimum order of ₹${coupon.minOrder} required for code ${cleanCode}`);
    return;
  }

  state.appliedCoupon = coupon;
  saveCartToStorage();
  renderCart();
  showToast(`🎉 Coupon "${cleanCode}" applied successfully!`);
}

function removeCoupon() {
  state.appliedCoupon = null;
  saveCartToStorage();
  renderCart();
  showToast("Coupon removed");
}

function calculateCartTotals() {
  const rawSubtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  let discount = 0;
  if (state.appliedCoupon && rawSubtotal >= state.appliedCoupon.minOrder) {
    if (state.appliedCoupon.type === "percent") {
      discount = Math.round((rawSubtotal * state.appliedCoupon.value) / 100);
      if (state.appliedCoupon.maxDiscount) {
        discount = Math.min(discount, state.appliedCoupon.maxDiscount);
      }
    } else if (state.appliedCoupon.type === "flat") {
      discount = Math.min(state.appliedCoupon.value, rawSubtotal);
    } else if (state.appliedCoupon.type === "bogo") {
      // Find burgers and give 50% discount on 1 unit if >= 2 burgers
      const burgers = state.cart.filter(i => i.id.startsWith("mcd-in-1"));
      const burgerCount = burgers.reduce((s, b) => s + b.quantity, 0);
      if (burgerCount >= 2 && burgers.length > 0) {
        discount = Math.round(burgers[0].price * 0.5);
      }
    }
  }

  const subtotalAfterDiscount = Math.max(0, rawSubtotal - discount);

  // Standard Indian Restaurant GST (5% = 2.5% CGST + 2.5% SGST)
  const gst = subtotalAfterDiscount > 0 ? Math.round(subtotalAfterDiscount * 0.05) : 0;

  // Indian Delivery Fee rule: Free delivery above ₹499, else ₹35
  const deliveryFee = (subtotalAfterDiscount >= 499 || subtotalAfterDiscount === 0) ? 0 : 35;

  const grandTotal = subtotalAfterDiscount + gst + deliveryFee;

  return {
    rawSubtotal,
    discount,
    subtotalAfterDiscount,
    gst,
    deliveryFee,
    grandTotal,
    totalItemCount
  };
}

function renderCart() {
  const { rawSubtotal, discount, subtotalAfterDiscount, gst, deliveryFee, grandTotal, totalItemCount } = calculateCartTotals();

  // Badges
  elements.cartItemCounter.textContent = totalItemCount;
  elements.mobileCartCount.textContent = totalItemCount;
  elements.cartTotalBadge.textContent = `${totalItemCount} item${totalItemCount === 1 ? "" : "s"}`;

  // Item Total
  elements.cartSubtotal.textContent = `₹${rawSubtotal}`;

  // Discount Row
  if (discount > 0 && state.appliedCoupon) {
    elements.cartDiscountRow.classList.remove("hidden");
    elements.cartDiscountValue.textContent = `-₹${discount}`;
    elements.appliedCouponRow.classList.remove("hidden");
    elements.appliedCouponCode.textContent = state.appliedCoupon.code;
    elements.appliedDiscountDesc.textContent = state.appliedCoupon.description;
  } else {
    elements.cartDiscountRow.classList.add("hidden");
    elements.appliedCouponRow.classList.add("hidden");
  }

  // Delivery Fee
  if (deliveryFee === 0 && subtotalAfterDiscount > 0) {
    elements.cartDeliveryFee.innerHTML = `<span style="color: #16a34a; font-weight: 800;">FREE</span>`;
  } else {
    elements.cartDeliveryFee.textContent = `₹${deliveryFee}`;
  }

  // Delivery threshold tracker progress (₹499 Free delivery goal)
  if (subtotalAfterDiscount >= 499) {
    elements.thresholdStatusText.innerHTML = `🎉 You have unlocked <strong>FREE Delivery!</strong>`;
    elements.thresholdProgressFill.style.width = "100%";
  } else {
    const diff = 499 - subtotalAfterDiscount;
    const pct = Math.min(100, Math.round((subtotalAfterDiscount / 499) * 100));
    elements.thresholdStatusText.innerHTML = `Add <strong>₹${diff}</strong> more for <strong>FREE Delivery</strong>`;
    elements.thresholdProgressFill.style.width = `${pct}%`;
  }

  elements.cartServiceCharge.textContent = `₹${gst}`;
  elements.cartGrandTotal.textContent = `₹${grandTotal}`;

  // Empty state handling
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = "";
    elements.cartItemsContainer.classList.add("hidden");
    elements.cartEmptyState.classList.remove("hidden");
    elements.checkoutBtn.disabled = true;
    return;
  }

  elements.cartEmptyState.classList.add("hidden");
  elements.cartItemsContainer.classList.remove("hidden");
  elements.checkoutBtn.disabled = false;

  // Render Cart Item Rows with FSSAI Veg Symbol
  elements.cartItemsContainer.innerHTML = "";

  state.cart.forEach(item => {
    const itemSubtotal = item.price * item.quantity;
    const formattedQty = String(item.quantity).padStart(2, "0");
    const itemKey = item.customKey || item.id;
    const fssaiClass = item.isVeg ? "veg" : "non-veg";

    const cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-details">
        <div class="cart-item-name-row">
          <span class="fssai-symbol ${fssaiClass}"></span>
          <h4 class="cart-item-name" title="${item.name}">${item.name}</h4>
        </div>
        ${item.customizationNote ? `<div class="cart-item-custom-notes" title="${item.customizationNote}">${item.customizationNote}</div>` : ""}
        <div class="cart-item-unit-price">₹${item.price}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button class="qty-btn minus-btn" aria-label="Decrease quantity">&minus;</button>
          <span class="qty-display">${formattedQty}</span>
          <button class="qty-btn plus-btn" aria-label="Increase quantity">&plus;</button>
        </div>
        <div class="cart-item-total-row">
          <span class="cart-item-subtotal">₹${itemSubtotal}</span>
          <button class="remove-item-btn" title="Remove item" aria-label="Remove ${item.name}">
            <svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    cartRow.querySelector(".minus-btn").addEventListener("click", () => updateQuantity(itemKey, -1));
    cartRow.querySelector(".plus-btn").addEventListener("click", () => updateQuantity(itemKey, 1));
    cartRow.querySelector(".remove-item-btn").addEventListener("click", () => removeFromCart(itemKey));

    elements.cartItemsContainer.appendChild(cartRow);
  });
}

// ==========================================================================
// 11. CHECKOUT MODAL FLOW (INDIAN UPI & CASH ON DELIVERY)
// ==========================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) return;

  const { grandTotal, discount, gst, deliveryFee } = calculateCartTotals();
  elements.modalPayableTotal.textContent = `₹${grandTotal}`;

  elements.modalSummaryList.innerHTML = state.cart.map(item => `
    <div class="modal-summary-item">
      <span>${item.quantity}x ${item.name} <small style="color: #6b7280;">(${item.customizationNote || 'Standard'})</small></span>
      <strong>₹${item.price * item.quantity}</strong>
    </div>
  `).join("");

  if (discount > 0 && state.appliedCoupon) {
    elements.modalSummaryList.innerHTML += `
      <div class="modal-summary-item" style="color: #16a34a; font-weight: 700; margin-top: 6px;">
        <span>Coupon Discount (${state.appliedCoupon.code})</span>
        <span>-₹${discount}</span>
      </div>
    `;
  }

  elements.modalSummaryList.innerHTML += `
    <div class="modal-summary-item" style="color: #4b5563; font-size: 0.8rem; margin-top: 6px;">
      <span>GST (5%)</span>
      <span>₹${gst}</span>
    </div>
    <div class="modal-summary-item" style="color: #4b5563; font-size: 0.8rem;">
      <span>Delivery & Packaging</span>
      <span>${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
    </div>
  `;

  elements.modalBodyContent.classList.remove("hidden");
  elements.modalSuccessScreen.classList.add("hidden");
  elements.checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  elements.checkoutModal.classList.add("hidden");
}

function confirmOrder() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  elements.orderIdNumber.textContent = `IND-${randomNum}`;

  elements.modalBodyContent.classList.add("hidden");
  elements.modalSuccessScreen.classList.remove("hidden");

  // Reset cart
  state.cart = [];
  state.appliedCoupon = null;
  saveCartToStorage();
  renderCart();
}

// ==========================================================================
// 12. UI TOAST & MOBILE DRAWER
// ==========================================================================
let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  elements.toastMessage.textContent = message;
  elements.toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2300);
}

function openMobileCart() {
  elements.cartSidebar.classList.add("open");
  elements.cartBackdrop.classList.add("show");
}

function closeMobileCart() {
  elements.cartSidebar.classList.remove("open");
  elements.cartBackdrop.classList.remove("show");
}

// ==========================================================================
// 13. EVENT LISTENERS
// ==========================================================================
function setupEventListeners() {
  // Brand logo
  if (elements.brandLogo) {
    elements.brandLogo.addEventListener("click", () => {
      state.currentCategory = "Burgers & Wraps";
      state.searchQuery = "";
      state.isPureVegOnly = false;
      if (elements.pureVegToggle) elements.pureVegToggle.checked = false;
      elements.searchInput.value = "";
      renderCategoryPills();
      renderProducts();
    });
  }

  // Pure Veg Toggle Switch
  if (elements.pureVegToggle) {
    elements.pureVegToggle.addEventListener("change", (e) => {
      state.isPureVegOnly = e.target.checked;
      renderProducts();
      showToast(state.isPureVegOnly ? "🟢 Pure Veg Filter Activated!" : "Showing All Items");
    });
  }

  // Real-time search
  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    elements.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderProducts();
  });

  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.clearSearchBtn.style.display = "none";
    elements.searchInput.focus();
    renderProducts();
  });

  // Filter popup
  elements.filterToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    elements.filterDropdown.classList.toggle("show");
    elements.filterToggleBtn.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!elements.filterDropdown.contains(e.target) && e.target !== elements.filterToggleBtn) {
      elements.filterDropdown.classList.remove("show");
      elements.filterToggleBtn.classList.remove("active");
    }
  });

  // Sorting
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Dietary chips
  elements.dietaryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      elements.dietaryChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedDiet = chip.getAttribute("data-diet");
      renderProducts();
    });
  });

  // Reset filters
  elements.resetFiltersBtn.addEventListener("click", () => {
    state.searchQuery = "";
    elements.searchInput.value = "";
    elements.clearSearchBtn.style.display = "none";
    state.currentCategory = "All";
    state.selectedDiet = "all";
    state.isPureVegOnly = false;
    if (elements.pureVegToggle) elements.pureVegToggle.checked = false;
    state.sortBy = "default";
    elements.sortSelect.value = "default";
    elements.dietaryChips.forEach(c => c.classList.toggle("active", c.getAttribute("data-diet") === "all"));
    renderCategoryPills();
    renderProducts();
  });

  // Top banner apply button
  document.querySelectorAll(".quick-apply-top-btn, .promo-pill-code").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.getAttribute("data-code");
      applyCoupon(code);
      if (window.innerWidth <= 992) openMobileCart();
    });
  });

  // Carousel promo apply buttons
  document.querySelectorAll(".promo-apply-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.getAttribute("data-code");
      applyCoupon(code);
      if (window.innerWidth <= 992) openMobileCart();
    });
  });

  // Carousel indicator dots
  elements.carouselDots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      state.carouselIndex = idx;
      scrollCarouselToIndex(idx);
    });
  });

  // Header "Offers" button
  if (elements.viewDealsBtn) {
    elements.viewDealsBtn.addEventListener("click", () => {
      state.currentCategory = "Combos & Super Savers";
      renderCategoryPills();
      renderProducts();
      elements.availableCouponsList.classList.remove("hidden");
      if (window.innerWidth <= 992) openMobileCart();
      showToast("🏷️ Showing Super Saver Combos & Deals!");
    });
  }

  // Cart Coupon box
  elements.applyCouponBtn.addEventListener("click", () => {
    const val = elements.couponInput.value;
    if (val) {
      applyCoupon(val);
      elements.couponInput.value = "";
    }
  });

  elements.couponInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = elements.couponInput.value;
      if (val) {
        applyCoupon(val);
        elements.couponInput.value = "";
      }
    }
  });

  elements.removeCouponBtn.addEventListener("click", removeCoupon);

  // Toggle available coupons drawer
  elements.toggleAvailableOffersBtn.addEventListener("click", () => {
    elements.availableCouponsList.classList.toggle("hidden");
  });

  // Mini apply buttons in drawer
  elements.availableCouponsList.querySelectorAll(".mini-apply-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.getAttribute("data-code");
      applyCoupon(code);
    });
  });

  // Customizer modal listeners
  elements.customizeModal.querySelectorAll('input[name="meal_option"], input[name="custom_addon"]').forEach(input => {
    input.addEventListener("change", updateCustomizerPrice);
  });

  elements.customizeCloseBtn.addEventListener("click", closeCustomizerModal);
  elements.addCustomizedToCartBtn.addEventListener("click", addCustomizedItemToCart);

  // Occasional slide-in promo deal popup
  if (elements.closePromoPopup) {
    elements.closePromoPopup.addEventListener("click", () => {
      elements.promoSlidePopup.classList.add("hidden");
    });
  }

  if (elements.quickAddPromoDealBtn) {
    elements.quickAddPromoDealBtn.addEventListener("click", () => {
      addToCart("mcd-in-205", "Special Deal ₹49", 49);
      elements.promoSlidePopup.classList.add("hidden");
      showToast("🥟 Added Pizza McPuff® at special deal price ₹49!");
    });
  }

  // Mobile cart drawer
  elements.mobileCartBtn.addEventListener("click", openMobileCart);
  elements.closeCartBtn.addEventListener("click", closeMobileCart);
  elements.cartBackdrop.addEventListener("click", closeMobileCart);

  // Checkout modal
  elements.checkoutBtn.addEventListener("click", () => {
    closeMobileCart();
    openCheckoutModal();
  });

  elements.modalCloseBtn.addEventListener("click", closeCheckoutModal);
  elements.confirmOrderBtn.addEventListener("click", confirmOrder);
  elements.newOrderBtn.addEventListener("click", closeCheckoutModal);

  // Escape key handler
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCheckoutModal();
      closeCustomizerModal();
      closeMobileCart();
      elements.filterDropdown.classList.remove("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", initApp);
