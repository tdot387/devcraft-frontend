// Startseite (Suche + Rezeptliste)
import { renderLoadingSpinner } from '@/components/loadingSpinner';
import { getRecipes } from '@/services/recipes.service';
import { renderHomeViewTemplate } from '@/templates/home.template';
import { getCategories } from '@/utils';
import {
  renderCategoryButtons,
  renderSimpleRecipeCards,
  filterRecipesByCategory,
  updateCategoryButtons,
  updateRecipeHeader,
} from '@/utils/homeViewHelpers';

export async function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
  const recipeList = app.querySelector('#recipe-list')!;
  recipeList.innerHTML = renderLoadingSpinner();
  const recipes = await getRecipes();
  const homeCategories = app.querySelector('#home-categories')!;
  const categories = ['Beliebte Rezepte', ...getCategories(recipes)];
  homeCategories.innerHTML = renderCategoryButtons(categories);
  homeCategories.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.matches('button')) {
      updateCategoryButtons(homeCategories, target);
      const selectedCategory = target.getAttribute('data-category')!;

      if (selectedCategory === 'Beliebte Rezepte') {
        updateRecipeHeader(app, selectedCategory);
        recipeList.innerHTML = renderSimpleRecipeCards(recipes.slice(7, 14)); // just show some popular recipes
        return;
      }
      const filteredRecipes = filterRecipesByCategory(
        recipes,
        selectedCategory,
      );

      updateRecipeHeader(app, selectedCategory);
      recipeList.innerHTML = renderSimpleRecipeCards(filteredRecipes);
    }
  });

  recipeList.innerHTML = renderSimpleRecipeCards(recipes.slice(7, 14)); // just show some popular recipes
  // search recipies
  window.addEventListener("executeSearch", (searchEvent) => {
    const searchValue = (searchEvent as CustomEvent).detail.searchText;
    recipeList.innerHTML = renderSimpleRecipeCards(recipes.filter(rec => rec.name.toLowerCase().includes(searchValue.toLowerCase())));
  });
}
