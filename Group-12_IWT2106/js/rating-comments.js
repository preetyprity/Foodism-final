// ⭐ Rating System
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#rating span");
  const ratingValue = document.getElementById("rating-value");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      let value = star.getAttribute("data-value");

      // reset all
      stars.forEach(s => s.classList.remove("active"));

      // highlight selected
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("active");
      }

      ratingValue.textContent = `You rated this ${value} out of 5 stars ⭐`;
    });
  });

  // 💬 Comment System
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const li = document.createElement("li");
      li.textContent = commentText;
      commentList.appendChild(li);
      commentInput.value = "";
    }
  });
});
