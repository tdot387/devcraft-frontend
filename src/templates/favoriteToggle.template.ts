export function renderFavoriteToggleTemplate(
  isFavorite: boolean,
  recipeId: string,
): string {
  const heartClass = isFavorite
    ? 'bi-heart-fill text-danger'
    : 'bi-heart text-white';

  return `
    <button 
      class="btn position-absolute favorite-toggle" 
      data-recipe-id="${recipeId}" 
      data-favorite="${isFavorite}"
    >
      <i class="bi ${heartClass}"></i>
    </button>
  `;
}
