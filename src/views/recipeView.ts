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

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

  const elements = {
    image: document.getElementById('recipe-image')! as HTMLImageElement,
    title: document.getElementById('recipe-title')!,
    prepTime: document.getElementById('preparation-time')!,
    category: document.getElementById('recipe-category')!,
    ingredientsTitle: document.getElementById('ingredients-title')!,
    ingredientsList: document.getElementById('ingredients-list')!,
    preparationTitle: document.getElementById('preparation-title')!,
    preparationSteps: document.getElementById('preparation-steps')!,
  };

  elements.image.src = recipe.imageUrl;
  elements.title.textContent = recipe.name;
  elements.prepTime.innerHTML = `<i class="bi bi-clock"></i> <span>${recipe.prepTime || '∞'}</span>`;
  elements.category.innerHTML =
    recipe.categories
      ?.map(
        (cat: string) =>
          `<span class="badge bg-success rounded-pill">${cat}</span>`,
      )
      .join(' ') || '';

  elements.ingredientsTitle.innerHTML =
    '<span class="text-success">🥬</span> Zutaten';
  elements.ingredientsList.innerHTML =
    recipe.ingredients
      ?.map(
        (ing: IIngredient) =>
          `<li class="d-flex align-items-center mb-2"><span class="me-2 text-success">✓</span>${ing.amount}${ing.unit || ''} ${ing.name}</li>`,
      )
      .join('') || '';

  elements.preparationTitle.innerHTML =
    '<span class="text-success">👩🍳</span> Zubereitung';
  elements.preparationSteps.innerHTML =
    recipe.instructions?.map((step: string) => `<p>${step}</p>`).join('') || '';
}
