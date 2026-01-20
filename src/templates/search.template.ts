export function renderSearchTemplate(): string {
  return `
    <div class="autocomplete me-1 w-90">
      <input id="search-input" type="text" class="form-control" name="search" placeholder="Rezepte suchen..." aria-label="Search recipes">
    </div>
  `;
}
