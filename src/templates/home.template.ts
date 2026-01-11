export function renderHomeViewTemplate() {
  return `
    <section class="hero-section position-relative text-center py-2 mb-4">
      <img src="/home-view-hero.jpg" 
           alt="Verschiedene Speisen auf einem Tisch" 
           class="hero-background-image">
      <div class="hero-content position-absolute top-50 start-50 translate-middle text-white">
        <h1 class="hero-h1 display-4 mb-2">Was kochst du heute?</h1>
        <p class="lead mb-4">Finde leckere Rezepte für jeden Tag!</p>
      </div>
    </section>
    <section class="container mb-5">
    <div id="home-categories" class="mb-4">
    </div>
    <section>
    <h3 class="hero-recipe-ovierview">Beliebte Rezepte</h3>
    <div id="recipe-list" class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    </section>
      
    </div>
    </section>
    `;
}
