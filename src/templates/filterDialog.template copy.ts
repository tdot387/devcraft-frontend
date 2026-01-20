export function renderFilterModalDialogContent(): string {
  return `
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Filter Recipes</h5>
        <button id="btn-close-dialog" type="button" class="btn-close"></button>
      </div>

      <div class="modal-body">
        <!-- Ingredients -->
        <div id="ingredient-filters" class="filter-list mb-3">
          <h6 class="fw-semibold">Ingredients</h6>
          <!-- checkboxes -->
        </div>

        <!-- Category -->
        <div id="category-filters" class="filter-list mb-3">
          <h6 class="fw-semibold">Category</h6>
          <!-- checkboxes -->
        </div>
      </div>
      <div class="modal-footer">
        <button id="apply-filters" class="btn btn-success w-100">
          Apply Filters
        </button>
      </div>

    </div>
  `;
}

export function renderCheckbox(id: string, name: string) {
  return `
    <div class="form-check">
      <input id="${id}" class="form-check-input" type="checkbox" value="${name}">
      <label class="form-check-label">${name}</label>
    </div>
  `;
}
