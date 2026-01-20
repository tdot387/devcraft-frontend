import { getRecipes } from '@/services/recipes.service';
import { renderFilterIconTemplate } from '@/templates/filter.template';
import {
  renderCheckbox,
  renderFilterModalDialogContent,
} from '@/templates/filterDialog.template copy';
import type { IRecipe } from '@/types/recipe.types';
import { IntegerSchema } from 'firebase/ai';
import { doc } from 'firebase/firestore';

const ID_CATEGORY = 'category-checkbox';
const ID_INGREDIENT = 'ingredient-checkbox';
const allRecipes: IRecipe[] = await getRecipes();

export const createFilterButton = () => {
  const filterButton = document.createElement('BUTTON') as HTMLButtonElement;
  filterButton.setAttribute('style', 'order: 2;');
  filterButton.classList.add('btn', 'btn-success', 'filter', 'w-25');
  filterButton.innerHTML = 'Filter' + renderFilterIconTemplate();
  return filterButton;
};

export const createFilterModalDialog = () => {
  const dialog = createDialogWindow();
  populateCheckboxes(dialog);
  const searchContainer = document.getElementById('search-container');
  if (searchContainer) {
    searchContainer.appendChild(dialog);
  }
  return dialog;
};

function createDialogWindow() {
  const dialog = document.createElement('DIALOG');
  dialog.setAttribute('id', 'filter-dialog');
  dialog.classList.add('filter-dialog');
  dialog.innerHTML = renderFilterModalDialogContent();
  // close button
  const closeButton = dialog.querySelector(
    '#btn-close-dialog',
  ) as HTMLButtonElement;
  closeButton.addEventListener('click', () => dialog.removeAttribute('open'));
}

function populateCheckboxes() {
  const dialog = getFilterModalDialog();
  const ingredientSection = dialog.querySelector('#ingredient-filters');
  const categorySection = dialog.querySelector('#category-filters');
  if (!ingredientSection || !categorySection) return;
  getIngredients().forEach((ingredient) => {
    ingredientSection.innerHTML += renderCheckbox(ID_INGREDIENT, ingredient);
  });
  getCategories().forEach((category) => {
    categorySection.innerHTML += renderCheckbox(ID_CATEGORY, category);
  });
}

function getIngredients() {
  let ingredients: string[] = [];
  allRecipes
    .flatMap((rec) => rec.ingredients)
    .forEach((ingredient) => {
      if (ingredients.indexOf(ingredient.name) === -1) {
        ingredients.push(ingredient.name);
      }
    });
  return ingredients;
}

function getCategories() {
  let categories: string[] = [];
  allRecipes
    .flatMap((rec) => rec.categories)
    .forEach((category) => {
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
  return categories;
}

export function applyFilters(dialog: HTMLElement, recipeList: IRecipe[]) {
  const selectedCategories: string[] = [];
  const selectedIngredients: string[] = [];
  dialog
    .querySelectorAll('#' + ID_CATEGORY)
    .forEach((e) => selectedCategories.push((e as HTMLInputElement).value));
  dialog
    .querySelectorAll('#' + ID_INGREDIENT)
    .forEach((e) => selectedIngredients.push((e as HTMLInputElement).value));
  return recipeList.filter((recipe) => {
    return (
      selectedCategories.every((filterCatefory) =>
        recipe.categories.includes(filterCatefory),
      ) &&
      selectedIngredients.every((filteredIngredient) =>
        recipe.ingredients.map((e) => e.name).includes(filteredIngredient),
      )
    );
  });
}

// apply filter button
export function addFilterEventListener(recipeList: IRecipe[]) {
  const dialog = getFilterModalDialog();
  const applyButton = dialog.querySelector(
    '#apply-filters',
  ) as HTMLButtonElement;
  applyButton.addEventListener('click', () => applyFilters(dialog, recipeList));
  return dialog;
}

function getFilterModalDialog(): HTMLElement {
  return document.getElementById('filter-dialog') as HTMLElement;
}
