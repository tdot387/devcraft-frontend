// Startseite (Suche + Rezeptliste)
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
  const recipes = await getRecipes();
  const homeCategories = app.querySelector('#home-categories')!;
  const categories = ['Beliebte Rezepte', ...getCategories(recipes)];

  homeCategories.innerHTML = renderCategoryButtons(categories);

  homeCategories.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.matches('button')) {
      updateCategoryButtons(homeCategories, target);
      const selectedCategory = target.getAttribute('data-category')!;
      const filteredRecipes = filterRecipesByCategory(
        recipes,
        selectedCategory,
      );

      updateRecipeHeader(app, selectedCategory);
      recipeList.innerHTML = renderSimpleRecipeCards(filteredRecipes);
    }
  });

  // Initial render click the "Beliebte Rezepte" button to show all recipes
  recipeList.innerHTML = renderSimpleRecipeCards(recipes);
  const firstButton = homeCategories.querySelector('button');
  if (firstButton) {
    firstButton.click();
  }
}
