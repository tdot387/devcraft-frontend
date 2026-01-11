import type { IIngredient } from '@/types/recipe.types';

export function renderRecipeCard(recipe: any): string {
  // Handle nested recipe structure from Firebase
  const recipeData = recipe.recipe || recipe;

  if (!recipeData.ingredients || !recipeData.category) {
    console.warn('Invalid recipe data:', recipe);
    return '';
  }

  const ingredientsList = recipeData.ingredients
    .map(
      (ingredient: IIngredient) =>
        `<li class="list-group-item">${ingredient.amount} ${ingredient.unit || ''} ${ingredient.name}</li>`,
    )
    .join('');

  const categories = (recipeData.category || [])
    .map(
      (category: string) =>
        `<span class="badge bg-secondary me-1">${category}</span>`,
    )
    .join('');
  // toggleFavourite is an another ticket - just a placeholder for now
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card h-100">
        ${recipeData.imageUrl ? `<img src="${recipeData.imageUrl}" class="card-img-top" alt="${recipeData.name}" style="height: 200px; object-fit: cover;">` : ''}
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title">${recipeData.name}</h5>
            <button class="btn btn-sm ${recipeData.favorite ? 'btn-danger' : 'btn-outline-danger'}" 
                    onclick="toggleFavorite('${recipeData.name}')">
              <i class="bi bi-heart${recipeData.favorite ? '-fill' : ''}"></i>
            </button>
          </div>
          
          <div class="mb-2">${categories}</div>
          
          <p class="card-text">${recipeData.description}</p>
          
          <div class="mb-3">
            <h6>Zutaten:</h6>
            <ul class="list-group list-group-flush">
              ${ingredientsList}
            </ul>
          </div>
        </div>
        
        <div class="card-footer">
          <button class="btn btn-success btn-sm" onclick="router.nav('/recipe?id=${recipe.id}')">
            Rezept anzeigen
          </button>
        </div>
      </div>
    </div>
  `;
}
