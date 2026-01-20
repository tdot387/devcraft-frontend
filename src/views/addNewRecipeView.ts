import { createRecipe } from '@/services/recipes.service';
import { renderAddNewRecipeTemplate } from '@/templates/addNewRecipe.template';
import type { IRecipe, IIngredient, TUnit } from '@/types/recipe.types';
import { renderBackButton } from '@/components/backButton';
import { handleDeleteRequest } from '@/core/utils/helperFunction';
import { renderToastTemplate } from '@/templates/toast.template';
import * as bootstrap from 'bootstrap';

export function renderAddNewRecipeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderAddNewRecipeTemplate();
  app.innerHTML += renderToastTemplate('Rezept erfolgreich gespeichert.');
  const successToast = new bootstrap.Toast('.toast');

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

  const errorMessageSpans = {
    name: document.getElementById('name-error') as HTMLSpanElement,
    description: document.getElementById(
      'description-error',
    ) as HTMLSpanElement,
    prepTime: document.getElementById('preptime-error') as HTMLSpanElement,
    imgUrl: document.getElementById('image-url-error') as HTMLSpanElement,
    categories: document.getElementById('categories-error') as HTMLSpanElement,
    ingredients: document.getElementById(
      'ingredients-error',
    ) as HTMLSpanElement,
    instructions: document.getElementById(
      'instructions-error',
    ) as HTMLSpanElement,
  };

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
    'add-new-instruction-btn',
  ) as HTMLButtonElement;
  const newRecipePrepTimeInput = document.getElementById(
    'new-recipe-prep-time',
  ) as HTMLInputElement;
  const newlyAddedInstructions = document.getElementById(
    'newly-added-instruction',
  ) as HTMLElement;

  let newRecipeCategories: string[] = [];
  let newRecipeIngredients: IIngredient[] = [];
  let newRecipeInstructions: string[] = [];

  /** Input listeners that check if inputs are empty */

  const inputValidators: Array<[HTMLInputElement, HTMLSpanElement]> = [
    [newRecipeNameInput, errorMessageSpans.name],
    [newRecipeDescriptionInput, errorMessageSpans.description],
    [newRecipePrepTimeInput, errorMessageSpans.prepTime],
    [newRecipeImgUrl, errorMessageSpans.imgUrl],
    [newRecipeCategoryInput, errorMessageSpans.categories],
    [newRecipeIngredientsInputName, errorMessageSpans.ingredients],
    [newRecipeInstructionsInput, errorMessageSpans.instructions],
  ];

  inputValidators.forEach(([input, errorSpan]) => {
    input.addEventListener('input', () => {
      isEmtpyInputField(input, errorSpan);
    });
  });

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

    for (let i = 0; i < newRecipeCategories.length; ++i) {
      const wrapper = document.createElement('span');
      wrapper.classList.add(
        'btn',
        'btn-success',
        'btn-sm',
        'delete-btn',
        'me-2',
        'mb-2',
      );
      wrapper.textContent = newRecipeCategories[i];
      wrapper.dataset.index = i.toString();
      newlyAddedCategories.appendChild(wrapper);
    }
  };

  handleDeleteRequest(
    newlyAddedCategories,
    newRecipeCategories,
    showNewlyAddedCategories,
  );

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

    for (let i = 0; i < newRecipeIngredients.length; ++i) {
      const ingr = document.createElement('span');
      ingr.textContent = `${newRecipeIngredients[i].amount}${newRecipeIngredients[i].unit} ${newRecipeIngredients[i].name}`;
      ingr.classList.add(
        'btn',
        'btn-success',
        'btn-sm',
        'delete-btn',
        'me-2',
        'mb-2',
      );
      ingr.dataset.index = i.toString();
      newlyAddedIngredients.appendChild(ingr);
    }
  };

  handleDeleteRequest(
    newlyAddedIngredients,
    newRecipeIngredients,
    showNewlyAddedIngredients,
  );

  newRecipeInstructionsInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    addInstructionToArray();
  });

  let addInstructionToArray = () => {
    const value = newRecipeInstructionsInput.value.trim();
    if (!value) return;

    newRecipeInstructions.push(value);
    newRecipeInstructionsInput.value = '';

    showNewlyAddedInstructions();
  };

  addInstructionsBtn.addEventListener('click', () => {
    addInstructionToArray();
  });

  let showNewlyAddedInstructions = () => {
    newlyAddedInstructions.textContent = '';

    for (let i = 0; i < newRecipeInstructions.length; ++i) {
      const instr = document.createElement('p');
      instr.textContent = newRecipeInstructions[i];
      instr.classList.add('delete-btn');
      instr.dataset.index = i.toString();
      newlyAddedInstructions.appendChild(instr);
    }
  };

  handleDeleteRequest(
    newlyAddedInstructions,
    newRecipeInstructions,
    showNewlyAddedInstructions,
  );

  function isEmtpyInputField(
    input: HTMLInputElement,
    errorSpan?: HTMLSpanElement,
  ) {
    if (input.value.trim() === '') {
      if (errorSpan) {
        errorSpan.style.visibility = 'visible';
      }
      return false;
    }
    if (errorSpan) {
      errorSpan.style.visibility = 'hidden';
    }
    return true;
  }

  /** Helper function that checks if array is empty */
  const isEmptyArray = (
    arr: string[] | IIngredient[],
    errorSpan: HTMLSpanElement,
  ) => {
    if (!Array.isArray(arr) || arr.length === 0) {
      if (errorSpan) {
        errorSpan.style.visibility = 'visible';
      }
      return false;
    }
    if (errorSpan) {
      errorSpan.style.visibility = 'hidden';
    }
    return true;
  };

  newRecipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const validations = [
      isEmtpyInputField(newRecipeNameInput, errorMessageSpans.name),
      isEmtpyInputField(
        newRecipeDescriptionInput,
        errorMessageSpans.description,
      ),
      isEmtpyInputField(newRecipePrepTimeInput, errorMessageSpans.prepTime),
      isEmtpyInputField(newRecipeImgUrl, errorMessageSpans.imgUrl),
      isEmptyArray(newRecipeCategories, errorMessageSpans.categories),
      isEmptyArray(newRecipeIngredients, errorMessageSpans.ingredients),
      isEmptyArray(newRecipeInstructions, errorMessageSpans.instructions),
    ];

    if (validations.includes(false)) {
      return;
    }

    const newRecipe: IRecipe = {
      name: newRecipeNameInput.value,
      description: newRecipeDescriptionInput.value,
      categories: [...newRecipeCategories],
      favorite: false,
      imageUrl: newRecipeImgUrl.value,
      ingredients: [...newRecipeIngredients],
      instructions: [...newRecipeInstructions],
      prepTime: newRecipePrepTimeInput.value + ' Min',
    };

    createRecipe(newRecipe);

    successToast.show();

    /*** UI und State reset */
    newRecipeForm.reset();
    newRecipeIngredients = [];
    newRecipeCategories = [];
    newRecipeInstructions = [];
    newlyAddedCategories.textContent = '';
    newlyAddedIngredients.textContent = '';
    newlyAddedInstructions.textContent = '';
  });
}
