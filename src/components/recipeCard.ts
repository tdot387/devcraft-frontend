import type { IRecipe } from '@/types/recipe.types';

export function renderRecipeCard(recipe: IRecipe): string {
  const categories = recipe.categories
    .map(
      (category: string) =>
        `<span class="badge bg-success rounded-pill">${category}</span>`,
    )
    .join(' ');

  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card shadow h-100 card-hover">
        ${recipe.imageUrl ? `<img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}" style="height: 200px; object-fit: cover;">` : ''}
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${recipe.name}</h5>
          <div class="d-flex gap-2 mb-2">
            <small class="text-muted d-flex align-items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
              </svg>
              <span>${recipe.prepTime}</span>
            </small>
          </div>
          <div class="mb-2">${categories}</div>
          <p class="card-text flex-grow-1">${recipe.description}</p>
          <button class="btn btn-success mt-auto" onclick="router.nav('/recipe?id=${recipe.id}')">
            Rezept ansehen
          </button>
        </div>
      </div>
    </div>
  `;
}
