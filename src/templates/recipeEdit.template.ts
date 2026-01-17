export function renderRecipeEditTemplate(): string {
  return `
    <section class="recipe-edit">
      <div class="container mb-3" id="back-button-container"></div>
      
      <div class="container px-4">
        <h2 class="mb-4">Rezept bearbeiten</h2>
        
        <form id="recipe-edit-form">
          <div class="mb-3">
            <label for="recipe-name" class="form-label">Rezeptname</label>
            <input type="text" class="form-control" id="recipe-name" required>
          </div>

          <div class="mb-3">
            <label for="recipe-image-url" class="form-label">Bild-URL</label>
            <input type="url" class="form-control" id="recipe-image-url">
          </div>

          <div class="mb-3">
            <label for="recipe-prep-time" class="form-label">Zubereitungszeit</label>
            <input type="text" class="form-control" id="recipe-prep-time" placeholder="z.B. 30 Min">
          </div>

          <div class="mb-3">
            <label for="recipe-description" class="form-label">Beschreibung</label>
            <input type="text" class="form-control" id="recipe-description" placeholder="z.B. 30 Min">
          </div>

          <div class="mb-3">
            <label for="recipe-categories" class="form-label">Kategorien (kommagetrennt)</label>
            <input type="text" class="form-control" id="recipe-categories" placeholder="z.B. Vegetarisch, Schnell">
          </div>

          <div class="mb-3">
            <label class="form-label">Zutaten</label>
            <div id="ingredients-container"></div>
            <button type="button" class="btn btn-sm btn-outline-secondary mt-2" id="add-ingredient-btn">+ Zutat hinzufügen</button>
          </div>

          <div class="mb-3">
            <label class="form-label">Zubereitungsschritte</label>
            <div id="instructions-container"></div>
            <button type="button" class="btn btn-sm btn-outline-secondary mt-2" id="add-instruction-btn">+ Schritt hinzufügen</button>
          </div>

          <div class="d-flex gap-2 mt-4">
            <button type="submit" class="btn btn-success">Speichern</button>
            <button type="button" class="btn btn-outline-secondary" id="cancel-edit-btn" onClick="router.nav('/')">Abbrechen</button>
          </div>
        </form>
      </div>
    </section>
  `;
}
