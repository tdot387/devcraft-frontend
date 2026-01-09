import { renderRecipeListTemplate } from '@/templates/recipeList.template';
import { renderRecipeCard } from '@/components/recipeCard';
import { getRecipes } from '@/services/recipe.service';

export async function renderRecipeListView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderRecipeListTemplate();

  const recipeListContainer = document.querySelector('#recipe-list')!;
  recipeListContainer.innerHTML =
    '<div class="text-center">Lade Rezepte...</div>';

  const recipes = await getRecipes();

  if (recipes?.length === 0) {
    recipeListContainer.innerHTML =
      '<div class="text-center">Keine Rezepte gefunden.</div>';
    return;
  }

  const recipeCards =
    recipes
      ?.map((recipe) => {
        return renderRecipeCard(recipe);
      })
      .join('') || '';

  recipeListContainer.innerHTML = recipeCards;
}
