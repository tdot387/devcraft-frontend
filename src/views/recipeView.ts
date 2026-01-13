import { renderRecipeViewTemplate } from '@/templates/recipe.template';
import { getQueryParam } from '@/core/utils/urlUtils';
import { getRecipeById } from '@/services/recipeById.service';
import type { IIngredient } from '@/types/recipe.types';
import { renderLoadingSpinner } from '@/components/loadingSpinner';

export async function renderRecipeView() {
  const app = document.querySelector('#app')!;
  const recipeId = getQueryParam('id');

  if (!recipeId) {
    app.innerHTML =
      '<div class="alert alert-danger">Rezept-ID nicht gefunden</div>';
    return;
  }

  app.innerHTML = renderLoadingSpinner();

  const recipe = await getRecipeById(recipeId);
  if (!recipe) {
    app.innerHTML =
      '<div class="alert alert-danger">Rezept nicht gefunden</div>';
    return;
  }

  app.innerHTML = renderRecipeViewTemplate();

  // Fill template with recipe data
  (document.getElementById('recipe-image')! as HTMLImageElement).src =
    recipe.imageUrl;
  document.getElementById('recipe-title')!.textContent = recipe.name;
  document.getElementById('preparation-time')!.textContent =
    recipe.preparationTime || '∞';
  document.getElementById('recipe-category')!.innerHTML =
    recipe.category
      ?.map(
        (cat: string) =>
          `<span class="badge bg-success rounded-pill">${cat}</span>`,
      )
      .join(' ') || '';

  document.getElementById('ingredients-title')!.innerHTML =
    '<span class="text-success">🥬</span> Zutaten';
  document.getElementById('ingredients-list')!.innerHTML =
    recipe.ingredients
      ?.map(
        (ing: IIngredient) =>
          `<li class="d-flex align-items-center mb-2"><span class="me-2 text-success">✓</span>${ing.amount}${ing.unit || ''} ${ing.name}</li>`,
      )
      .join('') || '';

  document.getElementById('preparation-title')!.innerHTML =
    '<span class="text-success">👩‍🍳</span> Zubereitung';
  document.getElementById('preparation-steps')!.innerHTML =
    recipe.instructions
      ?.map(
        (instruction: string) =>
          `<li class="d-flex align-items-center mb-2">${instruction}</li>`,
      )
      .join('') || '';
}
