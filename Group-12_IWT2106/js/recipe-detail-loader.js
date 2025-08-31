window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  const recipe = recipes.find(r => r.id === recipeId);

  const container = document.getElementById("recipeDetails");

  if (!recipe) {
    container.innerHTML = `
      <h2 class='text-danger'>Recipe not found!</h2>
      <div class="footer-container">
  <a href="javascript:history.back()" class="btn-secondary">Go Back</a>
</div>
    `;
    return;
  }

  container.innerHTML = `
    <h2 class="fw-bold mb-4">${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}" class="img-fluid rounded shadow mb-4" width="400" />
    <p class="lead mb-4">${recipe.description}</p>

    ${recipe.video ? `
      <h4>🎥 Watch Recipe Video:</h4>
      <div class="mb-4">
        <iframe class="recipe-video"
          src="${recipe.video}"
          title="${recipe.name}"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    ` : ""}

    <h4>📝 Ingredients:</h4>
    <ul class="list-group mb-4">
      ${recipe.ingredients.map(item => `<li class="list-group-item">${item}</li>`).join("")}
    </ul>

    <h4>👨‍🍳 Steps:</h4>
    <ol class="list-group list-group-numbered mb-4">
      ${recipe.steps.map(step => `<li class="list-group-item">${step}</li>`).join("")}
    </ol>
   <div class="footer-container">
  <a href="javascript:history.back()" class="btn-secondary">Go Back</a>
</div>

  `;
});
