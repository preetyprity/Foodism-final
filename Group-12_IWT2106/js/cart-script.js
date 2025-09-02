document.addEventListener("DOMContentLoaded", function () {
  // CSS inject করা
  const style = document.createElement('style');
  style.textContent = `
  .qty-control {
    display: inline-flex;
    align-items: center;
    border: 1px solid #2588ebff;
    border-radius: 5px;
    overflow: hidden;
    width: fit-content;
  }
  
  .qty-control button {
    background-color: #f8f9fa;
    border: none;
    color: #495057;
    width: 32px;
    height: 32px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
    user-select: none;
  }
  
  .qty-control button:hover {
    background-color: #eea2daff;
  }
  
  .qty-control input {
    width: 40px;
    height: 32px;
    border: none;
    text-align: center;
    font-size: 1rem;
    color: #212529;
    pointer-events: none;
    background-color: white;
    user-select: none;
  }
  `;
  document.head.appendChild(style);

  const cartItems = document.getElementById("cartItems");
  const orderNow = document.getElementById("orderNow");
  const receiptSection = document.getElementById("receiptSection");
  const paymentMethodSelect = document.getElementById("paymentMethod");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      cartItems.innerHTML = `<li class="list-group-item text-center text-danger">🛒 Your cart is empty.</li>`;
      return;
    }

    let totalPrice = 0;

    cart.forEach((item, index) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 1;
      const itemTotal = price * quantity;
      totalPrice += itemTotal;

      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center cart-item-hover";

      li.innerHTML = `
        <span>
          <strong>${item.name}</strong>
          <div class="qty-control ms-3">
            <button class="decrease" data-index="${index}">−</button>
            <input type="text" value="${quantity}" readonly />
            <button class="increase" data-index="${index}">+</button>
          </div>
        </span>
        <span>
          ৳${itemTotal.toFixed(2)}
          <button class="btn btn-sm btn-outline-danger remove-btn ms-3" data-index="${index}">❌</button>
        </span>
      `;

      cartItems.appendChild(li);
    });

    const totalLi = document.createElement("li");
    totalLi.className = "list-group-item d-flex justify-content-between align-items-center fw-bold bg-light";
    totalLi.innerHTML = `<span>Total Price:</span> <span>৳${totalPrice.toFixed(2)}</span>`;
    cartItems.appendChild(totalLi);

    // Remove buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });

    // Increase buttons
    document.querySelectorAll(".increase").forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });

    // Decrease buttons
    document.querySelectorAll(".decrease").forEach(button => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        if ((cart[index].quantity || 1) > 1) {
          cart[index].quantity = cart[index].quantity - 1;
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        }
      });
    });
  }

  function generateReceipt(items, paymentMethod) {
    const date = new Date().toLocaleString();
    let subtotal = 0;
    let receiptItems = items.map(item => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 1;
      const itemTotal = price * quantity;
      subtotal += itemTotal;
      return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.name} <span class="text-muted small">x${quantity}</span></span>
        <span>৳${itemTotal.toFixed(2)}</span>
      </li>`;
    }).join("");

    const vat = subtotal * 0.05;
    const grandTotal = subtotal + vat;

    let receiptHTML = `
      <div class="card shadow receipt-fade-in">
        <div class="card-header bg-primary text-white text-center">
          <h4>🧾 Receipt</h4>
        </div>
        <div class="card-body">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod}</p>
          <ul class="list-group mb-3">
            ${receiptItems}
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>Subtotal</span>
              <span>৳${subtotal.toFixed(2)}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span>VAT (5%)</span>
              <span>৳${vat.toFixed(2)}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center fw-bold bg-light">
              <span>Grand Total</span>
              <span>৳${grandTotal.toFixed(2)}</span>
            </li>
          </ul>
          <p class="text-success fw-bold text-center">Thank you for your purchase!</p>
          <a id="downloadReceipt" href="#" class="btn btn-outline-primary mt-2 receipt-download-hover" download="receipt.txt">⬇ Download Receipt</a>
        </div>
      </div>
    `;
    return { html: receiptHTML, text: generateReceiptText(items, subtotal, vat, grandTotal, date, paymentMethod) };
  }

  function generateReceiptText(items, subtotal, vat, grandTotal, date, paymentMethod) {
    let lines = [
      "Receipt",
      `Date: ${date}`,
      `Payment Method: ${paymentMethod}`,
      "Items:"
    ];
    items.forEach(item => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 1;
      const itemTotal = price * quantity;
      lines.push(`- ${item.name} x${quantity}: ৳${itemTotal.toFixed(2)}`);
    });
    lines.push(
      `Subtotal: ৳${subtotal.toFixed(2)}`,
      `VAT (5%): ৳${vat.toFixed(2)}`,
      `Grand Total: ৳${grandTotal.toFixed(2)}`,
      "Thank you for your purchase!"
    );
    return lines.join("\n");
  }

  orderNow.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("🚫 Your cart is empty!");
      return;
    }

    const paymentMethod = paymentMethodSelect.value;
    if (!paymentMethod) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    alert(`🎉 Order placed successfully!\nPayment Method: ${paymentMethod}`);

    const { html, text } = generateReceipt(cart, paymentMethod);
    receiptSection.innerHTML = html;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    document.getElementById("downloadReceipt").href = url;

    localStorage.removeItem("cart");
    cart = [];
    renderCart();
  });

  renderCart();
});
