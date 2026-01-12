export function renderRecipeViewTemplate(): string {
  return `
    <section class="recipe-view">
      <div class="container mb-4">
        <img id="recipe-image" alt="Rezeptbild" class="img-fluid rounded" style="max-height: 600px; object-fit: cover; width: inherit" />
      </div>
      <div class="container px-4 border-bottom pb-3 mb-3">
        <h2 id="recipe-title"></h2>
        <div class="d-flex gap-2">
          <p id="preparation-time"></p>
          <p class="border-end pe-2"></p>
          <p id="recipe-category"></p>
        </div>
      </div>
      <div class="container px-4">
        <h3 id="ingredients-title" class=" pb-2 mb-3" ></h3>
        <ul id="ingredients-list" class="list-group list-group-flush"></ul>
      </div>
      <div class="container px-4 mt-4 mb-5">
        <h3 id="preparation-title" class=" pb-2 mb-3" ></h3>
        <p id="preparation-steps"></p>
      </div>
    </section>
  `;
}
