export function renderFilterModalDialogContent(): string {
  return `
    <div class="modal-content">

      <div class="modal-header">
        <h3 class="modal-title">Rezepte Filtern nach:</h3>
        <button id="btn-close-dialog" type="button" class="btn-close"></button>
      </div>

      <div class="modal-body">
        <!-- Ingredients -->
        <h5 class="fw-semibold">Zutaten</h5>
        <div id="ingredient-filters" class="filter-list mb-2">
          <!-- checkboxes -->
        </div>

        <hr class="mt-1 mb-1">
        
        <!-- Categories -->
        <h5 class="fw-semibold">Kategorie</h5>
        <div id="category-filters" class="filter-list mb-2">
          <!-- checkboxes -->
        </div>
      </div>

      <div class="modal-footer flex flex-row justify-content-between">
        <button id="apply-filters" class="btn btn-success filter-action w-50">
          übernehmen
        </button>
        <button id="reset-filters" class="btn btn-light filter-action w-50">
          zurücksetzen
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
