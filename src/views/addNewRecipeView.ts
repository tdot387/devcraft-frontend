import { createRecipe } from '@/services/recipes.service';
import { renderAddNewRecipeTemplate } from '@/templates/addNewRecipe.template';
import type { IRecipe, IIngredient, TUnit } from '@/types/recipe.types';
import { renderBackButton } from '@/components/backButton';

export function renderAddNewRecipeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderAddNewRecipeTemplate();

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

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
  ) as HTMLInputElement;
  const addInstructionsBtn = document.getElementById(
    'add-new-instruction-btn'
  ) as HTMLButtonElement;
  const newRecipePrepTimeInput = document.getElementById(
    'new-recipe-prep-time',
  ) as HTMLInputElement;
  const newlyAddedInstructions = document.getElementById(
    'newly-added-instruction'
  ) as HTMLElement;

  let newRecipeCategories: string[] = [];
  let newRecipeIngredients: IIngredient[] = [];
  let newRecipeInstructions: string[] = [];

  /***
   * Start of functions that push a new category into the newRecipeCategory array
   * and then display the newly added category below the category input field.
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

    newRecipeCategories.push(value);
    newRecipeCategoryInput.value = '';

    showNewlyAddedCategories();
  };

  addCategoryBtn.addEventListener('click', () => {
    addCategoryToArray();
  });

  let showNewlyAddedCategories = () => {
    newlyAddedCategories.textContent = '';

    for (let category of newRecipeCategories) {
      const cat = document.createElement('span');
      cat.textContent = category;
      cat.classList.add('badge', 'text-bg-success', 'me-2');
      newlyAddedCategories.appendChild(cat);
    }
  };

  /*** End new categories functions */

  /***
   * Start of functions that push a new ingredient into the newRecipeIngredients array
   * and then display the newly added ingredient below the ingredient input field.
   *
   */

  newRecipeIngredientsInputName.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    addIngredientToArray();
  });


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

  newRecipeInstructionsInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    addInstructionToArray();
  })

  let addInstructionToArray = () => {
    const value = newRecipeInstructionsInput.value.trim();
    if (!value) return;

    newRecipeInstructions.push(value);
    newRecipeInstructionsInput.value = '';

    showNewlyAddedInstructions();
  }

  addInstructionsBtn.addEventListener('click', () => {
    addInstructionToArray();
  })

  let showNewlyAddedInstructions = () => {
    newlyAddedInstructions.textContent = '';

    for (let instruction of newRecipeInstructions) {
      const instr = document.createElement('p');
      instr.textContent = instruction;
      newlyAddedInstructions.appendChild(instr);
    }
  }




  /** Helper function that checks if array is empty */
  const isEmptyArray = (arr: string[] | IIngredient[]) => !Array.isArray(arr) || arr.length === 0;

  newRecipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (newRecipeNameInput.value.trim() == ''
      || newRecipeDescriptionInput.value.trim() == ''
      || newRecipeImgUrl.value.trim() == ''
      || newRecipePrepTimeInput.value.trim() == ''
      || isEmptyArray(newRecipeCategories)
      || isEmptyArray(newRecipeIngredients)
      || isEmptyArray(newRecipeInstructions)
    ) {
      console.log('Cant add stuff due to empty fields')
      return
    }

    const newRecipe: IRecipe = {
      name: newRecipeNameInput.value,
      description: newRecipeDescriptionInput.value,
      categories: [...newRecipeCategories],
      favorite: false,
      imageUrl: newRecipeImgUrl.value,
      ingredients: [...newRecipeIngredients],
      instructions: [...newRecipeInstructions],
      prepTime: newRecipePrepTimeInput.value + ' Min'
    };

    createRecipe(newRecipe);

    /*** UI und State reset */
    newRecipeForm.reset();
    newRecipeIngredients = [];
    newRecipeCategories = [];
    newlyAddedCategories.textContent = '';
  });
}
