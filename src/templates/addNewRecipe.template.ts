export function renderAddNewRecipeTemplate() {
  return `
    <div class="mt-5 container"> 
    <div class="container mt-5"> 
      <div class="mb-3" id="back-button-container">
      </div>
      
      <h1>Fügen Sie ein neues Rezept hinzu</h1>

      <form id="recipe-form" class="mt-3">
        <div class="row g-3">  
          <div class="form-group col-md-6">
            <label for="new-recipe-name">Name des Rezepts</label>
            <input type="text" class="form-control mt-2" id="new-recipe-name">
            <span class="input-error" id="name-error">Rezeptname darf nicht leer sein.</span>
          </div>
          <div class="form-group col-md-6">
            <label for="new-recipe-description">Rezeptbeschreibung</label>
            <input type="text" class="form-control mt-2" id="new-recipe-description">
            <span class="input-error" id="description-error">Rezeptbeschreibung darf nicht leer sein.</span>
          </div>
        </div>
        <div class="row g-3 mt-3">
          <div class="form-group col-lg-4 col-md-6">
            <label for="new-recipe-category">Kategorie des Rezepts</label>
            <div class="input-group">
              <input type="text" class="form-control mt-2" id="new-recipe-category">
              <button class="btn btn-success mt-2" type="button" id="add-new-recipe-btn">+</button>
            </div>
            <span class="input-error" id="categories-error">Rezept muss mind. eine Kategorie haben.</span>
            <p id="newly-added-categories" class="mt-2"></p>
          </div>
          <div class="form-group col-lg-4 col-md-6">
          <label for="new-recipe-prep-time">Zubereitungszeit</label>
          <div class="input-group">
          <input type="text" class="form-control mt-2" id="new-recipe-prep-time">
          <span type="text" class="align-content-end ms-1">min</span>
          </div>
          <span class="input-error" id="preptime-error">Zubereitungszeit darf nicht leer sein.</span>
          </div>
          <div class="form-group col-lg-4 col-md-12">
            <label for="new-recipe-ingredients">Link zum Rezeptbild</label>
            <input type="text" class="form-control mt-2" id="new-recipe-image-url">
            <span class="input-error" id="image-url-error">Bild-URL darf nicht leer sein.</span>
          </div>
        </div>
        <h2 class="mt-3">Zutaten</h2>
        <div class="row g-3">
          <div class="form-group col-lg-2 col-sm-6">
            <label for="new-recipe-ingr-amount">Menge</label>
            <input type="text" class="form-control mt-2" id="new-recipe-ingr-amount">
          </div>
          <div class="form-group col-lg-2 col-sm-6">
            <label for="new-recipe-ingr-unit">Einheit</label>
            <select class="form-select mt-2" id="new-recipe-ingr-unit">
              <option selected value="g">Gramm</option>
              <option value="ml">Milliliter</option>
              <option value="Stk.">Stück</option>
              <option value="EL">Esslöffel</option>
              <option value="TL">Teelöffel</option>
            </select>
          </div>
          <div class="form-group col-lg-8 col-12">
            <label for="new-recipe-ingr-name">Name der Zutat</label>
            <div class="input-group">
              <input type="text" class="form-control mt-2" id="new-recipe-ingr-name">
              <button class="btn btn-success mt-2" type="button" id="add-ingr-btn">+</button>
            </div>
            <span class="input-error" id="ingredients-error">Rezept muss mind. eine Zutat haben.</span>
            <p id="newly-added-ingredients"></p>
          </div>
        </div> 
        <h2>Zubereitung</h2>
        <div class="row g-3">
        <div class="form-group col-12">
            <label for="new-recipe-instructions">Zubereitungsschritte eingeben</label>
            <div class="input-group">
              <input type="text" class="form-control mt-2" id="new-recipe-instructions">
              <button class="btn btn-success mt-2" type="button" id="add-new-instruction-btn">+</button>
            </div>
            <span class="input-error" id="instructions-error">Rezept muss mind. einen Zubereitungsschritt haben.</span>
            <p id="newly-added-instruction" class="mt-3"></p>
          </div>
        </div>
        <button class="btn btn-success mt-2 mb-5" type="submit">Rezept speichern</button>
      </form>

    </div>
  `;
}
