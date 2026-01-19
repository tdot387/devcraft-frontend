import type { IRecipe } from '@/types/recipe.types';
import { renderFavoriteToggle } from '@/components/favoriteToggle';

export function renderCategoryButtons(
  categories: string[],
  favoriteCount?: number,
): string {
  return `
    <div class="d-flex overflow-auto gap-2 pb-2">
      ${categories
        .map((category, index) => {
          const btnClass =
            index === 0
              ? 'btn btn-success flex-shrink-0'
              : 'btn btn-outline-secondary flex-shrink-0';
          const badge =
            category === 'Meine Favoriten' && favoriteCount !== undefined
              ? `<span class="badge bg-danger ms-1">${favoriteCount}</span>`
              : '';
          return `<button class="${btnClass}" data-category="${category}">${category}${badge}</button>`;
        })
        .join('')}
    </div>
  `;
}

export function renderSimpleRecipeCards(recipes: IRecipe[]): string {
  return recipes
    .map(
      (recipe) => `
    <div class="col">
      <div class="card shadow h-100 d-flex flex-column">
        <div class="position-relative">
          <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}" style="height: 200px; object-fit: cover;">
          ${renderFavoriteToggle(recipe.favorite, recipe.id!)}
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${recipe.name}</h5>
          <p class="card-text flex-grow-1">${recipe.description}</p>
          <button onClick="router.nav('/recipe?id=${recipe.id}')" class="btn btn-success mt-auto">Rezept ansehen</button>
        </div>
      </div>
    </div>
  `,
    )
    .join('');
}

export function filterRecipesByCategory(
  recipes: IRecipe[],
  category: string,
): IRecipe[] {
  if (category === 'Beliebte Rezepte') {
    return recipes;
  }
  return recipes.filter((recipe) => recipe.categories?.includes(category));
}

export function updateCategoryButtons(
  homeCategories: Element,
  activeButton: HTMLElement,
): void {
  homeCategories.querySelectorAll('button').forEach((btn) => {
    btn.className = 'btn btn-outline-secondary flex-shrink-0';
  });
  activeButton.className = 'btn btn-success flex-shrink-0';
}

export function updateRecipeHeader(app: Element, category: string): void {
  const homeRecipeHeader = app.querySelector('.hero-recipe-ovierview')!;
  if (category === 'Beliebte Rezepte') {
    homeRecipeHeader.textContent = 'Beliebte Rezepte';
  } else {
    homeRecipeHeader.textContent = `Kategorie ${category}`;
  }
}

export function getRecipeHTMLForCategory(
  recipes: IRecipe[],
  category: string,
): string {
  if (category === 'Meine Favoriten') {
    return getFavoritesHTML(recipes);
  }
  if (category === 'Beliebte Rezepte') {
    return renderSimpleRecipeCards(recipes.slice(7, 14));
  }
  return renderSimpleRecipeCards(filterRecipesByCategory(recipes, category));
}

export function getFavoritesHTML(recipes: IRecipe[]): string {
  const favoriteRecipes = recipes.filter((recipe) => recipe.favorite);
  return favoriteRecipes.length > 0
    ? renderSimpleRecipeCards(favoriteRecipes)
    : '<div class="text-center text-muted py-5">🍖 Noch keine Favoriten gespeichert 🥬</div>';
}
