import { renderFavoriteToggleTemplate } from '@/templates/favoriteToggle.template';

export function renderFavoriteToggle(
  isFavorite: boolean,
  recipeId: string,
): string {
  return renderFavoriteToggleTemplate(isFavorite, recipeId);
}
