const adminOrdersDiv = document.getElementById("admin-orders");
const token = localStorage.getItem("token");

async function loadAllOrders() {
  const res = await fetch("http://localhost:5000/api/order/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const orders = await res.json();

  if (res.ok) {
    orders.forEach((order) => {
      const div = document.createElement("div");
      div.classList.add("order-box");

      const itemList = order.items
        .map(
          (item) =>
            `<li>${item.menuItem.name} - Quantity: ${item.quantity}</li>`
        )
        .join("");

      div.innerHTML = `
        <p><strong>User:</strong> ${order.user.username || order.user.email}</p>
        <ul>${itemList}</ul>
        <p><strong>Total:</strong> ₹${order.totalPrice}</p>
        <p><strong>Status:</strong> 
          <select onchange="updateStatus('${order._id}', this.value)">
            <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Preparing" ${order.status === "Preparing" ? "selected" : ""}>Preparing</option>
            <option value="Ready" ${order.status === "Ready" ? "selected" : ""}>Ready</option>
          </select>
        </p>
        <hr />
      `;

      adminOrdersDiv.appendChild(div);
    });
  } else {
    adminOrdersDiv.innerHTML = "<p>Error loading orders.</p>";
  }
}

async function updateStatus(orderId, newStatus) {
  const res = await fetch(`http://localhost:5000/api/order/${orderId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: newStatus }),
  });

  if (res.ok) {
    alert("Status updated!");
    location.reload();
  } else {
    alert("Failed to update status.");
  }
}

loadAllOrders();
