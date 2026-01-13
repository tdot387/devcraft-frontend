import { createRecipe } from '@/services/recipes.service';
import { renderAddNewRecipeTemplate } from '@/templates/addNewRecipe.template';
import type { IRecipe, IIngredient, TUnit } from '@/types/recipe.types';
import { renderBackButton } from '@/components/backButton';

export function renderAddNewRecipeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderAddNewRecipeTemplate();

  document.querySelector('#back-button-container')!.innerHTML = renderBackButton();

  const newRecipeNameInput = document.getElementById(
    'new-recipe-name',
  ) as HTMLInputElement;
  const newRecipeDescriptionInput = document.getElementById(
    'new-recipe-description',
  ) as HTMLInputElement;
  const newRecipeCategoryInput = document.getElementById(
    'new-recipe-category',
  ) as HTMLInputElement;
  const newlyAddedCategories = document.getElementById(
    'newly-added-categories',
  ) as HTMLElement;
  const addCategoryBtn = document.getElementById(
    'add-new-recipe-btn',
  ) as HTMLButtonElement;
  const newRecipeIngredientsInputName = document.getElementById(
    'new-recipe-ingr-name',
  ) as HTMLInputElement;
  const newRecipeIngredientsInputAmount = document.getElementById(
    'new-recipe-ingr-amount',
  ) as HTMLInputElement;
  const newRecipeIngredientsInputUnit = document.getElementById(
    'new-recipe-ingr-unit',
  ) as HTMLInputElement;
  const newlyAddedIngredients = document.getElementById(
    'newly-added-ingredients',
  ) as HTMLElement;
  const addIngredientBtn = document.getElementById(
    'add-ingr-btn',
  ) as HTMLButtonElement;
  const newRecipeForm = document.getElementById(
    'recipe-form',
  ) as HTMLFormElement;
  const newRecipeImgUrl = document.getElementById(
    'new-recipe-image-url',
  ) as HTMLInputElement;
  const newRecipeInstructionsInput = document.getElementById(
    'new-recipe-instructions',
  ) as HTMLTextAreaElement;

  let newRecipeCategory: string[] = [];
  let newRecipeIngredients: IIngredient[] = [];

  /***
   * These two functions push a new category into the newRecipeCategory array
   * and then display the newly added category below the category input field
   *
   */

  newRecipeCategoryInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    addCategoryToArray();
  });

  let addCategoryToArray = () => {
    const value = newRecipeCategoryInput.value.trim();
    if (!value) return;

    newRecipeCategory.push(value);
    newRecipeCategoryInput.value = '';

    showNewlyAddedCategories();
  };

  addCategoryBtn.addEventListener('click', () => {
    addCategoryToArray();
  });

  let showNewlyAddedCategories = () => {
    newlyAddedCategories.textContent = '';

    for (let category of newRecipeCategory) {
      const cat = document.createElement('span');
      cat.textContent = category;
      cat.classList.add('badge', 'text-bg-success', 'me-2');
      newlyAddedCategories.appendChild(cat);
    }
  };

  let addIngredientToArray = () => {
    const nameValue = newRecipeIngredientsInputName.value.trim();
    if (!nameValue) return;

    newRecipeIngredients.push({
      amount: newRecipeIngredientsInputAmount.value,
      name: nameValue,
      unit: newRecipeIngredientsInputUnit.value as TUnit,
    });
    newRecipeIngredientsInputAmount.value = '';
    newRecipeIngredientsInputName.value = '';

    showNewlyAddedIngredients();
  };

  newRecipeIngredientsInputName.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    addIngredientToArray();
  });

  addIngredientBtn.addEventListener('click', () => {
    addIngredientToArray();
  });

  let showNewlyAddedIngredients = () => {
    newlyAddedIngredients.textContent = '';

    for (let ingredient of newRecipeIngredients) {
      const ingr = document.createElement('span');
      ingr.textContent = `${ingredient.amount}${ingredient.unit} ${ingredient.name}`;
      ingr.classList.add('badge', 'text-bg-success', 'me-2');
      newlyAddedIngredients.appendChild(ingr);
    }
  };

  newRecipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRecipe: IRecipe = {
      name: newRecipeNameInput.value,
      description: newRecipeDescriptionInput.value,
      categories: [...newRecipeCategory],
      favorite: false,
      imageUrl: newRecipeImgUrl.value,
      ingredients: [...newRecipeIngredients],
      instructions: [newRecipeInstructionsInput.value],
      prepTime: '30 Min',
    };

    createRecipe(newRecipe);

    /*** UI und State reset */
    newRecipeForm.reset();
    newRecipeIngredients = [];
    newRecipeCategory = [];
    newlyAddedCategories.textContent = '';
  });
}
