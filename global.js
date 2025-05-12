// ----- DEMO USERS, RESTAURANTS, OFFERS -----
function getUSERS() {
    return JSON.parse(localStorage.getItem("FOODIE_USERS") || "null") || [
      { id: 1, name: "Amit Roy", email: "amit@example.com", username: "amit", password: "demo123", phone: "9876543210", address: "Kolkata" },
      { id: 2, name: "Priya Sharma", email: "priya@example.com", username: "priya", password: "demo456", phone: "9993322211", address: "Delhi" }
    ]; // default demo users
}
function saveUSERS(arr) {
    localStorage.setItem("FOODIE_USERS", JSON.stringify(arr));
}
let USERS = getUSERS(); // always use this variable in login logic

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// const USERS = [
//   { id: 1, name: "Amit Roy", email: "amit@example.com", username: "amit", password: "demo123", phone: "9876543210", address: "Kolkata" },
//   { id: 2, name: "Priya Sharma", email: "priya@example.com", username: "priya", password: "demo456", phone: "9993322211", address: "Delhi" }
// ];
const RESTAURANTS = [
  {
    id: 101, name: "Pizza Hub", cuisine: "Pizza, Italian", rating: 4.4,
    img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&w=600&fit=crop",
    menu: [
      { id: 1, name: "Margherita Pizza", desc: "Classic cheese and tomato", price: 249 },
      { id: 2, name: "Farmhouse Pizza", desc: "Loaded with veggies", price: 329 },
    ]
  },
  {
    id: 102, name: "Bombay Biryani", cuisine: "Biryani, North Indian", rating: 4.2,
    img: "https://images.pexels.com/photos/1860207/pexels-photo-1860207.jpeg?auto=compress&w=600&fit=crop",
    menu: [
      { id: 1, name: "Chicken Biryani", desc: "Hyderabadi style", price: 270 },
      { id: 2, name: "Veg Dum Biryani", desc: "Mixed veg, aromatic rice", price: 199 }
    ]
  }
];
const OFFERS = [
  { id: 1, title: "Flat 50% Off", description: "Get flat 50% on your first order above ₹199.", code: "WELCOME50", validity: "Valid till 30 June 2024" },
  { id: 2, title: "Buy 1 Get 1 Free Pizza!", description: "Order 2 pizzas and pay for 1 only.", code: "BOGOPIZZA", validity: "Till 25 June 2024" }
];
// ---- State helpers ----
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("FOODIE_USER")||"null");
}
function setLoggedInUser(u) {
  if(u) localStorage.setItem("FOODIE_USER", JSON.stringify(u));
  else localStorage.removeItem("FOODIE_USER");
}
function getOrders() {
  return JSON.parse(localStorage.getItem("FOODIE_ORDERS")||"{}");
}
function saveOrders(orders) {
  localStorage.setItem("FOODIE_ORDERS", JSON.stringify(orders));
}
function formatDate(millis) {
  const d = new Date(millis);
  return d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}
function checkAuthRedirect() {
  // If not on login.html and not logged in, redirect
  if (!getLoggedInUser() && !location.pathname.endsWith("/login.html")) {
    location.href = "login.html";
  }
}
function logout() {
  setLoggedInUser(null); location.href = "login.html";
}
function navbar(active = "dashboard") {
  return `
  <div class="navbar">
    <h1 style="cursor:pointer" onclick="location.href='dashboard.html'">🍽 Foodie</h1>
    <nav>
      <a href="dashboard.html" ${active === "dashboard" ? "class='active'" : ""}>Restaurants</a>
      <a href="offers.html" ${active === "offers" ? "class='active'" : ""}>Offers</a>
      <a href="https://srinivasmyk.github.io/omnifood/omni.html"  rel="noopener" class="plus-user-link">Plus User</a>
      <a href="#" onclick="logout()" style="color:#fc8019">Logout</a>
    </nav>
  </div>
  `;
}
// LocalStorage-backed USERS for persisting signup users
// LocalStorage-backed USERS for persisting signup users
