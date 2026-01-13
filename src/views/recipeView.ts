import { renderRecipeViewTemplate } from '@/templates/recipe.template';
import { getQueryParam } from '@/core/utils/urlUtils';
import { getRecipeById } from '@/services/recipeById.service';
import type { IIngredient } from '@/types/recipe.types';
import { renderLoadingSpinner } from '@/components/loadingSpinner';
import { renderBackButton } from '@/components/backButton';

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
  console.log(recipe);
  app.innerHTML = renderRecipeViewTemplate();

  document.querySelector('#back-button-container')!.innerHTML = renderBackButton();

  // Fill template with recipe data
  (document.getElementById('recipe-image')! as HTMLImageElement).src =
    recipe.imageUrl;
  document.getElementById('recipe-title')!.textContent = recipe.name;
  document.getElementById('preparation-time')!.innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
    </svg> ${recipe.prepTime || '∞'}`;
  document.getElementById('recipe-category')!.innerHTML =
    recipe.categories
      ?.map(
        (cat: string) => `<span class="badge bg-success rounded-pill">${cat}</span>`,
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
      ?.map((step: string, index: number) => `<p><strong>${index + 1}.</strong> ${step.replace(/^\d+\.\s*/, '')}</p>`)
      .join('') || '';
}
