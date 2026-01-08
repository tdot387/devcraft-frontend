export function renderAddNewRecipeTemplate() {
  return `
    <div class="mt-5"> 
      
      <h1>Fügen Sie ein neues Rezept hinzu</h1>

      <form id="recipe-form" class="mt-3">
        <div class="row g-3">  
          <div class="form-group col-6">
            <label for="new-recipe-name">Name des Rezepts</label>
            <input type="text" class="form-control mt-2" id="new-recipe-name">
          </div>
          <div class="form-group col-6">
            <label for="new-recipe-description">Rezeptbeschreibung</label>
            <input type="text" class="form-control mt-2" id="new-recipe-description">
          </div>
        </div>
        <div class="row g-3 mt-3">
          <div class="form-group col-6">
            <label for="new-recipe-category">Kategorie des Rezepts</label>
            <input type="text" class="form-control mt-2" id="new-recipe-category">
            <p id="newly-added-categories" class="mt-2"></p>
          </div>
          <div class="form-group col-6">
            <label for="new-recipe-ingredients">Link zum Rezeptbild</label>
            <input type="text" class="form-control mt-2" id="new-recipe-image-url">
          </div>
        </div>
        <h2>Zutaten</h2>
        <div class="row g-3 mt-3">
          <div class="form-group col-1">
            <label for="new-recipe-ingr-amount">Menge</label>
            <select class="form-select mt-2" id="inputGroupSelect01">
              <option selechted value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
              <option value="3">5</option>
              <option value="3">6</option>
              <option value="3">7</option>
              <option value="3">8</option>
            </select>
          </div>
          <div class="form-group col-3">
            <label for="new-recipe-ingr-unit">Einheit</label>
            <input type="text" class="form-control mt-2" id="new-recipe-ingr-unit">
          </div>
          <div class="form-group col-8">
            <label for="new-recipe-ingr-name">Name der Zutat</label>
            <input type="text" class="form-control mt-2" id="new-recipe-ingr-name">
          </div>
          <p id="newly-added-categories" class="mt-2"></p>
        </div> 
        <button class="btn btn-success mt-2" type="submit">Rezept speichern</button>
      </form>

    </div>
  `;
}
