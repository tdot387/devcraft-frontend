import { renderFilterIconTemplate } from '@/templates/filter.template';
import type { IRecipe } from '@/types/recipe.types';

const allRecipes: IRecipe[] = [];
window.addEventListener('recipesFetched', (recipesFetchedEvent) => {
  allRecipes.length = 0;
  allRecipes.push.apply(
    allRecipes,
    (recipesFetchedEvent as CustomEvent).detail.recipes,
  );
});

export function renderFilterButton(): Node {
  const filterButton = document.createElement('BUTTON') as HTMLButtonElement;
  filterButton.setAttribute('style', 'order: 2;');
  filterButton.classList.add('btn', 'btn-success', 'filter', 'w-25');
  filterButton.innerHTML = 'Filter' + renderFilterIconTemplate();
  const searchContainer = document.getElementById('search-container');
  const dialog = document.createElement('DIALOG');
  dialog.textContent = 'test dialog';
  if (searchContainer) {
    searchContainer.appendChild(dialog);
  }
  filterButton.addEventListener('click', () => dialog.toggleAttribute('open'));
  return filterButton;
}
