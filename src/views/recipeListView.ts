import { renderRecipeListTemplate } from '@/templates/recipeList.template';
import { renderRecipeCard } from '@/components/recipeCard';
import { apiService } from '@/services/api';

export async function renderRecipeListView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderRecipeListTemplate();

  const recipeListContainer = document.querySelector('#recipe-list')!;
  recipeListContainer.innerHTML =
    '<div class="text-center">Lade Rezepte...</div>';

  const recipes = await apiService.getRecipes(); // Fetch all recipes from firebase soon currently using mock data
  if (recipes?.length === 0) {
    recipeListContainer.innerHTML =
      '<div class="text-center">Keine Rezepte gefunden.</div>';
    return;
  }

  const recipeCards =
    recipes?.map((recipe) => renderRecipeCard(recipe)).join('') || '';
  recipeListContainer.innerHTML = recipeCards;
}
