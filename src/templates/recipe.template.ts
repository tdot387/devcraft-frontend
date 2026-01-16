export function renderRecipeViewTemplate(): string {
  return `
    <section class="recipe-view ">
      <div class="container mb-3" id="back-button-container" >
      </div>
      <div class="container mb-4 position-relative"  ">
        <img id="recipe-image" alt="Rezeptbild" class="img-fluid rounded" style="max-height: 600px; object-fit: cover; width: inherit" />
        <div class id="favorite-button-container"></div>
      </div>
      <div class="container px-4 border-bottom pb-3 mb-3">
        <h2 id="recipe-title"></h2>
        <div class="d-flex gap-2 align-items-center">
          <p id="preparation-time" class="mb-0 d-flex align-items-center gap-1"></p>
          <p class="border-end pe-2 mb-0" style="height: 20px;"></p>
          <p id="recipe-category" class="mb-0"></p>
          <p class="border-end pe-2 mb-0" style="height: 20px;"></p>
          <div class="d-flex align-items-center">
          <select class="form-select-sm me-2" id="servings">
          </select>
          <p class="mb-0">Portionen</p>
          </div>
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
