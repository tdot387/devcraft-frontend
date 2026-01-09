export function renderHomeViewTemplate() {
  return `
    <section class="hero-section text-center py-5 mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="display-4 mb-4">Willkommen zur Rezept App</h1>
          <p class="lead mb-4">Entdecke leckere Rezepte für jeden Anlass und jeden Geschmack.</p>
          <button class="btn btn-primary btn-lg" onclick="router.nav('/recipe')">
            <i class="bi bi-book"></i> Alle Rezepte entdecken
          </button>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="recipe-hero-image" onclick="router.nav('/recipe')" style="cursor: pointer;">
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" 
                 alt="Leckere Rezepte" 
                 class="img-fluid rounded shadow-lg hover-zoom">
            <div class="overlay-text position-absolute top-50 start-50 translate-middle text-white">
              <h3 class="fw-bold">Jetzt entdecken!</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="features-section">
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="feature-card p-4 h-100 border rounded">
            <i class="bi bi-heart-fill text-danger fs-1 mb-3"></i>
            <h4>Favoriten</h4>
            <p>Speichere deine Lieblingsrezepte und finde sie schnell wieder.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="feature-card p-4 h-100 border rounded">
            <i class="bi bi-search text-primary fs-1 mb-3"></i>
            <h4>Suchen</h4>
            <p>Finde das perfekte Rezept nach Zutaten oder Kategorien.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="feature-card p-4 h-100 border rounded">
            <i class="bi bi-clock text-success fs-1 mb-3"></i>
            <h4>Schnell & Einfach</h4>
            <p>Alle Rezepte mit detaillierten Anleitungen und Zutatenlisten.</p>
          </div>
        </div>
      </div>
          <a href="/add-new-recipe">Add a new recipe</a>
    </section>
    `;
}
