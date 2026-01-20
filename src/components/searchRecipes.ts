import { getRecipes } from '@/services/recipes.service';
import { renderSearchTemplate } from '@/templates/search.template';
import type { IRecipe } from '@/types/recipe.types';
import {
  createOptionsDropdownOnInput,
  closeOtherOptions,
  reactToKeyboardNavigation,
} from '@/utils/searchHelpers';

let allRecipes: IRecipe[] = await getRecipes();

export function renderSearch(): Node {
  const searchForm = document.createElement('FORM');
  searchForm.setAttribute('autocompolete', 'off');
  searchForm.innerHTML = renderSearchTemplate();
  const searchInput = searchForm.querySelector(
    '#search-input',
  ) as HTMLInputElement;
  searchInput.addEventListener('focus', async function () {
    allRecipes = await getRecipes();
  });
  addAutoCompleteFunctionality(searchInput);
  return searchForm;
}

function addAutoCompleteFunctionality(searchInput: HTMLInputElement) {
  createOptionsDropdownOnInput(searchInput, allRecipes);
  reactToKeyboardNavigation(searchInput);
  document.addEventListener('click', function (e) {
    closeOtherOptions(e.target as Element);
  });
}
