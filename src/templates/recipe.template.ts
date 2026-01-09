import type { IRecipe } from '@/types/recipe.types';

export function renderRecipeViewTemplate(recipe: IRecipe) {
  const ingredientsList = recipe.ingredients
    .map(
      (ingredient) =>
        `<li class="list-group-item">${ingredient.amount} ${ingredient.name}</li>`,
    )
    .join('');

  const categories = recipe.categories
    .map(
      (category) => `<span class="badge bg-secondary me-1">${category}</span>`,
    )
    .join('');

  // toggleFavourite is an another ticket - just a placeholder for now
  return `
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <h1>${recipe.name}</h1>
          <button class="btn ${recipe.favorite ? 'btn-danger' : 'btn-outline-danger'}" 
                  onclick="toggleFavorite('${recipe.name}')"> 
            <i class="bi bi-heart${recipe.favorite ? '-fill' : ''}"></i> 
            ${recipe.favorite ? 'Favorit entfernen' : 'Zu Favoriten'}
          </button>
        </div>
        
        <div class="mb-3">${categories}</div>
        
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Zutaten</h5>
              </div>
              <ul class="list-group list-group-flush">
                ${ingredientsList}
              </ul>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5>Beschreibung</h5>
              </div>
              <div class="card-body">
                <p>${recipe.description}</p>
              </div>
            </div>
            
            <div class="card mt-3">
              <div class="card-header">
                <h5>Anleitung</h5>
              </div>
              <div class="card-body">
                <p>${recipe.instructions}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-4">
          <button class="btn btn-secondary" onclick="router.nav('/recipe')">
            <i class="bi bi-arrow-left"></i> Zurück zur Übersicht
          </button>
        </div>
      </div>
    </div>
  `;
}
