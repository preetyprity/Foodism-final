// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Recipe Search Filter
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("recipeSearch");
  const cards = document.querySelectorAll(".recipe-card");
  const rowContainer = document.querySelector(".row.g-4");

  let noResult = document.createElement("div");
  noResult.className = "text-center fw-bold text-danger mt-4";
  noResult.style.display = "none";
  noResult.textContent = "❌ No recipes found!";
  if (rowContainer) {
    rowContainer.parentNode.appendChild(noResult);
  }

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      let filter = searchInput.value.toLowerCase();
      let matchFound = false;

      cards.forEach(function (card) {
        let title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(filter)) {
          card.parentElement.style.display = "block";
          matchFound = true;
        } else {
          card.parentElement.style.display = "none";
        }
      });

      noResult.style.display = matchFound ? "none" : "block";
    });
  }
});

// Toast Function
function showToast(message, type = "success") {
  let toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add to Cart Functionality (with Price)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if item is already in the cart
      let itemExists = cart.find(item => item.name === name);

      if (!itemExists) {
        cart.push({ name, price });
        localStorage.setItem("cart", JSON.stringify(cart));
        showToast(`✅ ${name} added to cart for ৳${price}! 🛒`, "success");
      } else {
        showToast(`⚠️ ${name} is already in the cart!`, "warning");
      }
    });
  });
});

