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
  console.log('Recipes:', recipes);
  const homeCategories = app.querySelector('#home-categories')!;
  const categories = ['Beliebte Rezepte', ...getCategories(recipes)];
  console.log('Categories:', categories);
  homeCategories.innerHTML = renderCategoryButtons(categories);

  homeCategories.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.matches('button')) {
      updateCategoryButtons(homeCategories, target);
      const selectedCategory = target.getAttribute('data-category')!;

      if (selectedCategory === 'Beliebte Rezepte') {
        updateRecipeHeader(app, selectedCategory);
        recipeList.innerHTML = renderSimpleRecipeCards(recipes.slice(0, 7)); // just show the first 7 recipes as popular
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

  recipeList.innerHTML = renderSimpleRecipeCards(recipes.slice(0, 7));
}
