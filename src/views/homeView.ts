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
import { getQueryParam } from '@/core/utils/urlUtils';

export async function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
  const recipeList = app.querySelector('#recipe-list')!;
  recipeList.innerHTML = renderLoadingSpinner();

  let recipes = await getRecipes();
  const homeCategories = app.querySelector('#home-categories')!;
  
  const getCurrentCategory = () => getQueryParam('category') || 'Beliebte Rezepte';

  function updateCategoryButtonsWithBadge() {
    const favoriteCount = recipes.filter((recipe) => recipe.favorite).length;
    const categories = [
      'Meine Favoriten',
      'Beliebte Rezepte',
      ...getCategories(recipes),
    ];
    homeCategories.innerHTML = renderCategoryButtons(categories, favoriteCount, getCurrentCategory());
  }

function renderRecipesByCategory(category: string) {
    const html = getRecipeHTMLForCategory(recipes, category);
    recipeList.innerHTML = html;
    attachFavoriteListeners(recipeList, recipes, () => {
      updateCategoryButtonsWithBadge();
      if (getCurrentCategory() === 'Meine Favoriten') {
        renderRecipesByCategory('Meine Favoriten');
      }
    });
  }

  function handleCategoryClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.matches('button')) return;

    const category = target.getAttribute('data-category')!;
    const url = category === 'Beliebte Rezepte' ? '/' : `/?category=${encodeURIComponent(category)}`;
    window.history.pushState({}, '', url);
    
    updateCategoryButtons(homeCategories, target);
    updateRecipeHeader(app, category);
    renderRecipesByCategory(category);
  }

  function handleSearch(searchEvent: Event) {
    const searchValue = (searchEvent as CustomEvent).detail.searchText;
    
    if (!searchValue) {
      // If search is cleared, restore category view
      renderRecipesByCategory(getCurrentCategory());
      return;
    }
    
    // Search across ALL recipes, ignore category filter
    const filtered = recipes.filter((rec) =>
      rec.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    recipeList.innerHTML = renderSimpleRecipeCards(filtered);
    attachFavoriteListeners(recipeList, recipes, updateCategoryButtonsWithBadge);
  }

  homeCategories.addEventListener('click', handleCategoryClick);
  window.addEventListener('executeSearch', handleSearch);

  updateCategoryButtonsWithBadge();
  renderRecipesByCategory(getCurrentCategory());
}
