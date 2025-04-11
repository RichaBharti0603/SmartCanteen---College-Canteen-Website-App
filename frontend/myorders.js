const ordersContainer = document.getElementById("orders-container");
const token = localStorage.getItem("token");

async function loadMyOrders() {
  const res = await fetch("http://localhost:5000/api/order", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const orders = await res.json();

  if (res.ok) {
    orders.forEach((order, index) => {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("order-box");

      const itemList = order.items
        .map(
          (item) =>
            `<li>${item.menuItem.name} - Quantity: ${item.quantity}</li>`
        )
        .join("");

      orderDiv.innerHTML = `
        <h3>Order #${index + 1}</h3>
        <ul>${itemList}</ul>
        <p><strong>Total:</strong> ₹${order.totalPrice}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <hr />
      `;

      ordersContainer.appendChild(orderDiv);
    });
  } else {
    ordersContainer.innerHTML = "<p>Could not load your orders.</p>";
  }
}

loadMyOrders();
