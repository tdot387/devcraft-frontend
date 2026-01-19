import { renderRecipeViewTemplate } from '@/templates/recipe.template';
import { getQueryParam } from '@/core/utils/urlUtils';
import { getRecipeById } from '@/services/recipeById.service';
import type { IIngredient } from '@/types/recipe.types';
import { renderLoadingSpinner } from '@/components/loadingSpinner';
import { renderBackButton } from '@/components/backButton';
import {
  hideAddNewButtonInHeader,
  hideSearchInputInHeader,
} from '@/utils/visibilityHelpers';
import { renderFavoriteToggle } from '@/components/favoriteToggle';
import { attachFavoriteListeners } from '@/utils/favoriteHelpers';
import { deleteRecipe } from '@/services/recipes.service';
import { renderDeleteModal } from '@/components/modal';
import * as bootstrap from 'bootstrap';
import { router } from '@/core/router';
import { renderToastTemplate } from '@/templates/toast.template';

export async function renderRecipeView() {
  // Hide search input And add new button
  hideSearchInputInHeader();
  hideAddNewButtonInHeader();

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
  app.innerHTML += renderDeleteModal();
  app.innerHTML += renderToastTemplate('Rezept erfolgreich gelöscht.');
  const successToast = new bootstrap.Toast('.toast');

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

  // Navigate to edit view on button click
  document.getElementById('edit-recipe-btn')!.addEventListener('click', () => {
    (window as any).router.nav(`/recipe/edit?id=${recipe.id}`);
  });

  const favoriteContainer = document.querySelector(
    '#favorite-button-container',
  )!;
  favoriteContainer.innerHTML = renderFavoriteToggle(
    recipe.favorite,
    recipe.id!,
  );
  attachFavoriteListeners(favoriteContainer, [recipe]);

  const elements = {
    image: document.getElementById('recipe-image')! as HTMLImageElement,
    title: document.getElementById('recipe-title')!,
    prepTime: document.getElementById('preparation-time')!,
    category: document.getElementById('recipe-category')!,
    ingredientsTitle: document.getElementById('ingredients-title')!,
    ingredientsList: document.getElementById('ingredients-list')!,
    preparationTitle: document.getElementById('preparation-title')!,
    preparationSteps: document.getElementById('preparation-steps')!,
    servings: document.getElementById('servings')! as HTMLSelectElement,
  };

  const baseIngredients = recipe.ingredients ?? [];

  function formatIngredientsAmount(number: number) {
    const rounded = Math.round((number + Number.EPSILON) * 100) / 100;
    return Number.isInteger(rounded) ? String(rounded) : String(rounded);
  }

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

  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.text = i.toString();
    option.value = i.toString();
    elements.servings.appendChild(option);
  }

  elements.ingredientsTitle.innerHTML =
    '<span class="text-success">🥬</span> Zutaten';

  function renderIngredients(servings: number) {
    elements.ingredientsList.innerHTML =
      baseIngredients
        ?.map((ing: IIngredient) => {
          const amount = Number(ing.amount) * servings;
          const amountText = Number.isFinite(amount)
            ? formatIngredientsAmount(amount)
            : '';

          return `<li class="d-flex align-items-center mb-2"><span class="me-2 text-success">✓</span>${amountText}${ing.unit || ''} ${ing.name}</li>`;
        })
        .join('') || '';
  }

  renderIngredients(Number(elements.servings.value));

  elements.servings.addEventListener('change', () => {
    renderIngredients(Number(elements.servings.value));
  });

  document.getElementById('preparation-title')!.innerHTML =
    '<span class="text-success">👩‍🍳</span> Zubereitung';
  document.getElementById('preparation-steps')!.innerHTML =
    recipe.instructions
      ?.map(
        (instruction: string) =>
          `<li class="d-flex align-items-center mb-2">${instruction}</li>`,
      )
      .join('') || '';

  const deleteRecipeBtn = document.getElementById(
    'delete-recipe',
  ) as HTMLElement;
  deleteRecipeBtn.addEventListener('click', () => {
    deleteRecipe(recipe.id);
    console.log(`Success: Reciped with id ${recipe.id} deleted`);

    const modalEl = document.getElementById('deleteRecipeModal') as HTMLElement;
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener(
      'hidden.bs.modal',
      () => {
        successToast.show();
        setTimeout(() => {
          router.nav('/');
          document.body.classList.remove('modal-open');
          document.querySelectorAll('.modal-backdrop').forEach((b) => b.remove());
        }, 3000);
      },
      { once: true },
    );

    modal.hide();
  });
}
