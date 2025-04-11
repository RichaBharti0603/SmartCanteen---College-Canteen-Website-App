const token = localStorage.getItem("token"); // assuming JWT is stored after login
const menuContainer = document.getElementById("menu-container");
const cartList = document.getElementById("cart-list");
const placeOrderBtn = document.getElementById("place-order-btn");

let cart = [];

// Fetch Menu Items
async function loadMenu() {
  const res = await fetch("http://localhost:5000/api/menu");
  const menuItems = await res.json();

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - ₹${item.price}</p>
      <button onclick="addToCart('${item._id}', '${item.name}', ${item.price})">Add to Cart</button>
    `;
    menuContainer.appendChild(itemDiv);
  });
}

window.addToCart = function (id, name, price) {
  const existing = cart.find((i) => i.menuItem === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ menuItem: id, name, quantity: 1, price });
  }
  renderCart();
};

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} x ${item.quantity}`;
    cartList.appendChild(li);
  });
}

// Place Order
placeOrderBtn.addEventListener("click", async () => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderPayload = {
    items: cart.map(({ menuItem, quantity }) => ({ menuItem, quantity })),
    totalPrice,
  };

  const res = await fetch("http://localhost:5000/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderPayload),
  });

  const data = await res.json();
  if (res.ok) {
    alert("Order placed successfully!");
    cart = [];
    renderCart();
  } else {
    alert("Order failed: " + data.message);
  }
});

loadMenu();
