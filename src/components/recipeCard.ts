import type { IRecipe } from '@/types/recipe.types';

export function renderRecipeCard(recipe: IRecipe): string {
  const ingredientsList = recipe.ingredients
    .map(
      (ingredient) =>
        `<li class="list-group-item">${ingredient.quantity} ${ingredient.name}</li>`,
    )
    .join('');

  const categories = recipe.categories
    .map(
      (category) => `<span class="badge bg-secondary me-1">${category}</span>`,
    )
    .join('');
  // toggleFavourite is an another ticket - just a placeholder for now
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        ${recipe.image ? `<img src="${recipe.image}" class="card-img-top" alt="${recipe.name}" style="height: 200px; object-fit: cover;">` : ''}
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title">${recipe.name}</h5>
            <button class="btn btn-sm ${recipe.favorite ? 'btn-danger' : 'btn-outline-danger'}" 
                    onclick="toggleFavorite('${recipe.name}')">
              <i class="bi bi-heart${recipe.favorite ? '-fill' : ''}"></i>
            </button>
          </div>
          
          <div class="mb-2">${categories}</div>
          
          <p class="card-text">${recipe.description}</p>
          
          <div class="mb-3">
            <h6>Zutaten:</h6>
            <ul class="list-group list-group-flush">
              ${ingredientsList}
            </ul>
          </div>
        </div>
        
        <div class="card-footer">
          <button class="btn btn-primary btn-sm" onclick="router.nav('/recipe?id=${recipe.id}')">
            Rezept anzeigen
          </button>
        </div>
      </div>
    </div>
  `;
}
