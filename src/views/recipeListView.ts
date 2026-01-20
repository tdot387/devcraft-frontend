import { renderRecipeListTemplate } from '@/templates/recipeList.template';
import { renderRecipeCard } from '@/components/recipeCard';
import { getRecipes } from '@/services/recipes.service';
import { renderBackButton } from '@/components/backButton';
import type { IRecipe } from '@/types/recipe.types';
import { attachFavoriteListeners } from '@/utils/favoriteHelpers';
import {
  applyFilters,
  ID_INGREDIENT,
  ID_CATEGORY,
} from '@/utils/filterHelpers';

export async function renderRecipeListView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderRecipeListTemplate();

  document.querySelector('#back-button-container')!.innerHTML =
    renderBackButton();

  const recipeListContainer = document.querySelector('#recipe-list')!;
  recipeListContainer.innerHTML =
    '<div class="text-center">Lade Rezepte...</div>';

  const recipes = await getRecipes();

  if (recipes?.length === 0) {
    recipeListContainer.innerHTML =
      '<div class="text-center">Keine Rezepte gefunden.</div>';
    return;
  }

  const recipeCards = mapToRecipeCards(recipes);
  recipeListContainer.innerHTML = recipeCards;
  handleFilter(recipes, recipeListContainer);
  attachFavoriteListeners(recipeListContainer, recipes);
}

function handleFilter(list: IRecipe[], recipeListContainer: Element) {
  document.getElementById('apply-filters')?.addEventListener('click', () => {
    recipeListContainer.innerHTML = mapToRecipeCards(applyFilters(list));
  });
  document.getElementById('reset-filters')?.addEventListener('click', () => {
    recipeListContainer.innerHTML = mapToRecipeCards(list);
    document
      .querySelectorAll('#' + ID_INGREDIENT)
      .forEach((e) => ((e as HTMLInputElement).checked = false));
    document
      .querySelectorAll('#' + ID_CATEGORY)
      .forEach((e) => ((e as HTMLInputElement).checked = false));
  });
}

function mapToRecipeCards(recipes: IRecipe[], searchText?: string) {
  return (
    (searchText
      ? recipes.filter((e) =>
          e.name.toLowerCase().includes(searchText.toLowerCase()),
        )
      : recipes
    )
      .map((recipe) => {
        return renderRecipeCard(recipe);
      })
      .join('') || ''
  );
}
