import { renderRecipeEditTemplate } from '@/templates/recipeEdit.template';
import { getQueryParam } from '@/core/utils/urlUtils';
import { getRecipeById } from '@/services/recipeById.service';
import { renderBackButton } from '@/components/backButton';
import {
  hideAddNewButtonInHeader,
  hideSearchInputInHeader,
} from '@/utils/visibilityHelpers';
import { renderLoadingSpinner } from '@/components/loadingSpinner';
import type { IIngredient, IRecipe } from '@/types/recipe.types';

export async function renderRecipeEditView() {
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

  app.innerHTML = renderRecipeEditTemplate();

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

  const elements = {
    recipeName: document.getElementById('recipe-name') as HTMLInputElement,
    recipeImageUrl: document.getElementById(
      'recipe-image-url',
    ) as HTMLInputElement,
    recipePrepTime: document.getElementById(
      'recipe-prep-time',
    ) as HTMLInputElement,
    recipeCategories: document.getElementById(
      'recipe-categories',
    ) as HTMLInputElement,
    description: document.getElementById(
      'recipe-description',
    ) as HTMLInputElement,
    ingredientsContainer: document.getElementById('ingredients-container')!,
    instructionsContainer: document.getElementById('instructions-container')!,
    addIngredientBtn: document.getElementById('add-ingredient-btn')!,
    addInstructionBtn: document.getElementById('add-instruction-btn')!,
    recipeEditForm: document.getElementById(
      'recipe-edit-form',
    ) as HTMLFormElement,
  };
  console.log(recipe);

  // file form with recipe data
  elements.recipeName.value = recipe.name;
  elements.recipeImageUrl.value = recipe.imageUrl || '';
  elements.recipePrepTime.value = recipe.prepTime || '';
  elements.description.value = recipe.description || '';
  elements.recipeCategories.value = recipe.categories
    ? recipe.categories.join(', ')
    : '';

  // render ingredients with delete btn
  elements.ingredientsContainer.innerHTML = '';
  recipe.ingredients.forEach((ingredient: IIngredient) => {
    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'd-flex gap-2 mb-2';
    ingredientDiv.innerHTML = `
      <input type="text" class="form-control" placeholder="Menge" value="${ingredient.amount}">
      <input type="text" class="form-control" placeholder="Einheit" value="${ingredient.unit}">
      <input type="text" class="form-control" placeholder="Zutat" value="${ingredient.name}">
      <button type="button" class="btn btn-sm btn-outline-danger remove-ingredient-btn">-</button>
    `;
    elements.ingredientsContainer.appendChild(ingredientDiv);

    // remove ingredient event
    ingredientDiv
      .querySelector('.remove-ingredient-btn')!
      .addEventListener('click', () => {
        elements.ingredientsContainer.removeChild(ingredientDiv);
      });
  });

  // render instructions with delete btn
  elements.instructionsContainer.innerHTML = '';
  recipe.instructions.forEach(
    (instruction: Pick<IRecipe, 'instructions'>, index: number) => {
      const instructionDiv = document.createElement('div');
      instructionDiv.className = 'd-flex gap-2 mb-2';
      instructionDiv.innerHTML = `
      <textarea class="form-control" placeholder="Schritt ${index + 1}">${instruction}</textarea>
      <button type="button" class="btn btn-sm btn-outline-danger remove-instruction-btn">-</button>
    `;
      elements.instructionsContainer.appendChild(instructionDiv);

      // remove instruction btn event
      instructionDiv
        .querySelector('.remove-instruction-btn')!
        .addEventListener('click', () => {
          elements.instructionsContainer.removeChild(instructionDiv);
        });
    },
  );

  // add new ingredient event
  elements.addIngredientBtn.addEventListener('click', () => {
    const ingredientDiv = document.createElement('div');
    ingredientDiv.className = 'd-flex gap-2 mb-2';
    ingredientDiv.innerHTML = `
      <input type="text" class="form-control" placeholder="Menge">
      <input type="text" class="form-control" placeholder="Einheit">
      <input type="text" class="form-control" placeholder="Zutat">
      <button type="button" class="btn btn-sm btn-outline-danger remove-ingredient-btn">-</button>
    `;
    elements.ingredientsContainer.appendChild(ingredientDiv);

    // remove ingredient event
    ingredientDiv
      .querySelector('.remove-ingredient-btn')!
      .addEventListener('click', () => {
        elements.ingredientsContainer.removeChild(ingredientDiv);
      });
  });

  // add new instruction event
  elements.addInstructionBtn.addEventListener('click', () => {
    const instructionDiv = document.createElement('div');
    instructionDiv.className = 'd-flex gap-2 mb-2';
    instructionDiv.innerHTML = `
      <textarea class="form-control" placeholder="Neuer Schritt"></textarea>
      <button type="button" class="btn btn-sm btn-outline-danger remove-instruction-btn">-</button>
    `;
    elements.instructionsContainer.appendChild(instructionDiv);

    // remove instruction btn event
    instructionDiv
      .querySelector('.remove-instruction-btn')!
      .addEventListener('click', () => {
        elements.instructionsContainer.removeChild(instructionDiv);
      });
  });

  // form submit event
  elements.recipeEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // collect data and send to backend (not implemented)
    console.log('Form submitted');
  });
}
