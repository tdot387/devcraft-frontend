export function renderHeaderTemplate(): string {
  return `
    <nav class="navbar navbar-expand-lg bg-light bg-light">
      <div class="container-fluid d-flex align-items-center">
        
        <a class="navbar-brand d-flex align-items-center" href="/">
          <svg width="32" height="32" class="me-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12.88 11.53z" fill="#28a745"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="#dc3545"/>
          </svg>
          <span class="fw-bold">Rezept App</span>
        </a>

        <!-- Right side (desktop search + filter button) -->
        <div class="d-flex align-items-center ms-auto w-75">

          <!-- Search (desktop only) -->
          <input type="text" id="recipe-search" class="form-control w-75 me-2 ms-auto d-none d-md-block"
                 placeholder="Rezepte oder Kategorien suchen..." aria-label="Search recipes">
          <button class="btn btn-success w-25 max-width-200 ms-auto">
            Filter
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <button class="btn btn-outline-secondary ms-2" onClick="router.nav('/add-new-recipe')">Neues Rezept hinzufügen</button>
        </div>
      </div>
    </nav>

    <!-- Search below header (mobile only) -->
    <div class="container mt-2 d-md-none">
      <input
        type="search"
        class="form-control"
        placeholder="Search"
      >
    </div>
  `
}
