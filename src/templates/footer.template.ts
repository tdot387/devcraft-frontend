export function renderFooterTemplate(): string {
  return `
    <footer class="hr py-4 border-top">
      <div class="container   divider-top">
        <div class="row">
          <div class="col-md-6">
            <h5>Rezept App</h5>
            <p class="mb-3">Entdecke leckere Rezepte für jeden Anlass.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-1">&copy; 2026 DevCraft Academy</p>
            <small class="text-muted">Alle Rechte vorbehalten</small>
          </div>
        </div>
      </div>
    </footer>
  `;
}
