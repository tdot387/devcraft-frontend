import { renderRecipeEditTemplate } from '@/templates/recipeEdit.template';
import { getQueryParam } from '@/core/utils/urlUtils';
import { getRecipeById } from '@/services/recipeById.service';
import { updateRecipe } from '@/services/recipes.service';
import { renderBackButton } from '@/components/backButton';
import {
  hideAddNewButtonInHeader,
  hideSearchInputInHeader,
} from '@/utils/visibilityHelpers';
import { renderLoadingSpinner } from '@/components/loadingSpinner';
import type { IIngredient, IRecipe, TUnit } from '@/types/recipe.types';
import { renderToastTemplate } from '@/templates/toast.template';
import * as bootstrap from 'bootstrap';

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
  app.innerHTML += renderToastTemplate('Änderungen gespeichert.');
  const successToast = new bootstrap.Toast('.toast');

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
    ingredientDiv.className = 'ingredient-row d-flex gap-2 mb-2';
    ingredientDiv.innerHTML = `
      <input type="text" class="form-control ingredient-amount" placeholder="Menge" value="${ingredient.amount}">
      <input type="text" class="form-control ingredient-unit" placeholder="Einheit" value="${ingredient.unit}">
      <input type="text" class="form-control ingredient-name" placeholder="Zutat" value="${ingredient.name}">
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
      instructionDiv.className = 'instruction-row d-flex gap-2 mb-2';
      instructionDiv.innerHTML = `
      <textarea class="form-control instruction-text" placeholder="Schritt ${index + 1}">${instruction}</textarea>
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
    ingredientDiv.className = 'ingredient-row d-flex gap-2 mb-2';
    ingredientDiv.innerHTML = `
      <input type="text" class="form-control ingredient-amount" placeholder="Menge">
      <input type="text" class="form-control ingredient-unit" placeholder="Einheit">
      <input type="text" class="form-control ingredient-name" placeholder="Zutat">
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
    instructionDiv.className = 'instruction-row d-flex gap-2 mb-2';
    instructionDiv.innerHTML = `
      <textarea class="form-control instruction-text" placeholder="Neuer Schritt"></textarea>
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
  elements.recipeEditForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // collect ingredients
    const ingredientRows =
      elements.ingredientsContainer.querySelectorAll('.ingredient-row');
    const ingredients: IIngredient[] = [];
    ingredientRows.forEach((row) => {
      const amount = (
        row.querySelector('.ingredient-amount') as HTMLInputElement
      ).value;
      const unit = (row.querySelector('.ingredient-unit') as HTMLInputElement)
        .value as TUnit;
      const name = (row.querySelector('.ingredient-name') as HTMLInputElement)
        .value;
      ingredients.push({ amount, unit, name });
    });

    // collect instructions
    const instructionRows =
      elements.instructionsContainer.querySelectorAll('.instruction-row');
    const instructions: string[] = [];
    instructionRows.forEach((row) => {
      const text = (
        row.querySelector('.instruction-text') as HTMLTextAreaElement
      ).value;
      instructions.push(text);
    });

    // collect categories
    const categories = elements.recipeCategories.value
      .split(',')
      .map((cat) => cat.trim())
      .filter((cat) => cat.length > 0);

    const updatedRecipe: Partial<IRecipe> = {
      name: elements.recipeName.value,
      imageUrl: elements.recipeImageUrl.value,
      prepTime: elements.recipePrepTime.value,
      description: elements.description.value,
      categories,
      ingredients,
      instructions,
    };

    try {
      await updateRecipe(recipeId, updatedRecipe);
      successToast?.show();
      setTimeout(() => {
        window.location.href = `/recipe?id=${recipeId}`;
      }, 2000);
    } catch (error) {
      console.error('Error updating recipe:', error);
      alert('Fehler beim Speichern des Rezepts');
    }
  });
}
