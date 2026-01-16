import { updateRecipeFavorite } from '@/services/recipes.service';

export function attachFavoriteListeners(container: Element) {
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
    });
  });
}

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
