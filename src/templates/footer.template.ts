export function renderFooterTemplate(): string {
  return `
    <footer class="bg-secondary-subtle py-4 border-top">
      <div class="container divider-top">
        <div class="row gy-4">
          <div class="col-12 col-md-6">
            <h4 class="mb-2 text-success">Rezept App</h4>
            <p class="mb-2">Entdecke leckere Rezepte für jeden Anlass.</p>

            <small class="text-muted d-block">
              &copy; 2026 DevCraft Academy · Alle Rechte vorbehalten
            </small>
          </div>

          <div class="col-12 col-md-6">
            <h4 class="mb-2 text-success">Navigation</h4>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <a class="footer-link text-decoration-none" href="/recipes">Alle Rezepte</a>
              </li>
              <li>
                <a class="footer-link text-decoration-none" href="/add-new-recipe">Rezept hinzufügen</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;
}
