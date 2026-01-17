import type { IRecipe } from '@/types/recipe.types';
import { updateRecipeFavorite } from '@/services/recipes.service';

export function updateFavoriteButtonUI(
  btn: HTMLButtonElement,
  icon: HTMLElement,
  isFavorite: boolean,
) {
  btn.dataset.favorite = String(isFavorite);
  icon.className = isFavorite
    ? 'bi bi-heart-fill text-danger'
    : 'bi bi-heart text-white';
  btn.style.transform = 'scale(1.2)';
  setTimeout(() => (btn.style.transform = 'scale(1)'), 200);
}

/**
 * Attaches click listeners to all favorite toggle buttons in a container.
 * Updates UI, syncs with Firebase, and updates local recipe state.
 *
 * @param container - DOM element containing favorite buttons
 * @param recipes - Recipe array for local state updates
 * @param onToggle - Optional callback after favorite state changes - currently using for badge updates
 */
export function attachFavoriteListeners(
  container: Element,
  recipes: IRecipe[],
  onToggle?: () => void,
) {
  container.querySelectorAll('.favorite-toggle').forEach((button) => {
    button.addEventListener('click', async (e) => {
      e.stopPropagation();
      const btn = button as HTMLButtonElement;
      const recipeId = btn.dataset.recipeId!;
      const currentState = btn.dataset.favorite === 'true';
      const newState = !currentState;
      const icon = btn.querySelector('i')!;

      updateFavoriteButtonUI(btn, icon, newState);
      await updateRecipeFavorite(recipeId, newState);

      const recipe = recipes.find((r) => r.id === recipeId);
      if (recipe) recipe.favorite = newState;

      onToggle?.();
    });
  });
}
