import { renderRecipeViewTemplate } from '@/templates/recipe.template';
import { apiService } from '@/services/api';
import { getQueryParam } from '@/core/utils/urlUtils';

export async function renderRecipeView() {
  const app = document.querySelector('#app')!;
  const recipeId = getQueryParam('id');
  
  if (!recipeId) {
    app.innerHTML = '<div class="alert alert-danger">Rezept-ID nicht gefunden</div>';
    return;
  }
  
  app.innerHTML = '<div class="text-center">Lade Rezept...</div>';
  
  const recipe = await apiService.getRecipe(recipeId);
  if (!recipe) {
    app.innerHTML = '<div class="alert alert-danger">Rezept nicht gefunden</div>';
    return;
  }
  
  app.innerHTML = renderRecipeViewTemplate(recipe);
}
