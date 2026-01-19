import { renderSearchTemplate } from '@/templates/searchTemplate';
import type { IRecipe } from '@/types/recipe.types';
import {
  createOptionsDropdownOnInput,
  markOptionActive,
  closeOtherOptions,
  reactToKeyboardNavigation,
} from '@/utils/searchHelpers';

// Can we create this as a constant in Recipes Service and export it to be used everywhere?
const allRecipes: IRecipe[] = [];
window.addEventListener('recipesFetched', (recipesFetchedEvent) => {
  allRecipes.length = 0;
  allRecipes.push.apply(
    allRecipes,
    (recipesFetchedEvent as CustomEvent).detail.recipes,
  );
});

export function renderSearch(): Node {
  const searchForm = document.createElement('FORM');
  searchForm.setAttribute('autocompolete', 'off');
  searchForm.innerHTML = renderSearchTemplate();
  const searchInput = searchForm.querySelector(
    '#search-input',
  ) as HTMLInputElement;
  addAutoCompleteFunctionality(searchInput);
  return searchForm;
}

function addAutoCompleteFunctionality(inputElement: HTMLInputElement) {
  let currentFocus = -1;
  createOptionsDropdownOnInput(inputElement, allRecipes);
  reactToKeyboardNavigation(inputElement, currentFocus);
  markOptionActive(currentFocus);
  document.addEventListener('click', function (e) {
    closeOtherOptions(e.target as Element);
  });
}
