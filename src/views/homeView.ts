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

export async function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
  const recipeList = app.querySelector('#recipe-list')!;
  recipeList.innerHTML = renderLoadingSpinner();

  let recipes = await getRecipes();
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

  function handleSearch(searchEvent: Event) {
    const searchValue = (searchEvent as CustomEvent).detail.searchText;
    const filtered = recipes.filter((rec) =>
      rec.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    recipeList.innerHTML = renderSimpleRecipeCards(filtered);
    attachFavoriteListeners(recipeList, recipes, updateCategoryButtonsWithBadge);
  }

  homeCategories.addEventListener('click', handleCategoryClick);
  window.addEventListener('executeSearch', handleSearch);

  updateCategoryButtonsWithBadge();
  renderRecipesByCategory(currentCategory);
}
