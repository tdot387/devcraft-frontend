import { renderLoadingSpinner } from '@/components/loadingSpinner';
import { getRecipes } from '@/services/recipes.service';
import { renderHomeViewTemplate } from '@/templates/home.template';
import { getCategories } from '@/utils';
import {
  renderCategoryButtons,
  updateCategoryButtons,
  updateRecipeHeader,
  getRecipeHTMLForCategory,
  renderSimpleRecipeCards,
} from '@/utils/homeViewHelpers';
import { attachFavoriteListeners } from '@/utils/favoriteHelpers';
import type { IRecipe } from '@/types/recipe.types';
import {
  applyFilters,
  closeFilterDialogAndResetFilterCount,
  resetCheckedFilters,
} from '@/utils/filterHelpers';

export async function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
  const recipeList = app.querySelector('#recipe-list')!;
  recipeList.innerHTML = renderLoadingSpinner();

  let recipes = await getRecipes();
  handleFilter(recipes);
  const homeCategories = app.querySelector('#home-categories')!;
  let currentCategory = 'Beliebte Rezepte';

  function updateCategoryButtonsWithBadge() {
    const favoriteCount = recipes.filter((recipe) => recipe.favorite).length;
    const categories = [
      'Meine Favoriten',
      'Beliebte Rezepte',
      ...getCategories(recipes),
    ];
    homeCategories.innerHTML = renderCategoryButtons(categories, favoriteCount);
    markActiveCategory();
  }

  function markActiveCategory() {
    homeCategories.querySelectorAll('button').forEach((btn) => {
      btn.className =
        btn.getAttribute('data-category') === currentCategory
          ? 'btn btn-success flex-shrink-0'
          : 'btn btn-outline-secondary flex-shrink-0';
    });
  }

  function renderRecipesByCategory(category: string) {
    const html = getRecipeHTMLForCategory(recipes, category);
    recipeList.innerHTML = html;
    attachFavoriteListeners(recipeList, recipes, () => {
      updateCategoryButtonsWithBadge();
      if (currentCategory === 'Meine Favoriten') {
        renderRecipesByCategory('Meine Favoriten');
      }
    });
  }

  function handleCategoryClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.matches('button')) return;

    currentCategory = target.getAttribute('data-category')!;
    updateCategoryButtons(homeCategories, target);
    updateRecipeHeader(app, currentCategory);
    renderRecipesByCategory(currentCategory);
  }

  function handleFilter(list: IRecipe[]) {
    document.getElementById('apply-filters')?.addEventListener('click', () => {
      recipeList.innerHTML = renderSimpleRecipeCards(applyFilters(list));
    });
    document.getElementById('reset-filters')?.addEventListener('click', () => {
      recipeList.innerHTML = renderSimpleRecipeCards(list);
      resetCheckedFilters();
      closeFilterDialogAndResetFilterCount();
    });
    attachFavoriteListeners(
      recipeList,
      recipes,
      updateCategoryButtonsWithBadge,
    );
  }

  homeCategories.addEventListener('click', handleCategoryClick);

  updateCategoryButtonsWithBadge();
  renderRecipesByCategory(currentCategory);
}
