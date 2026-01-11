import type { IRecipe } from '@/types/recipe.types';

export function renderCategoryButtons(categories: string[]): string {
  return `
    <div class="d-flex overflow-auto gap-2 pb-2">
      ${categories
        .map((category, index) => {
          const btnClass =
            index === 0
              ? 'btn btn-success flex-shrink-0'
              : 'btn btn-outline-secondary flex-shrink-0';
          return `<button class="${btnClass}" data-category="${category}">${category}</button>`;
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
      <div class="card shadow h-100">
        <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}">
        <div class="card-body">
          <h5 class="card-title">${recipe.name}</h5>
          <p class="card-text">${recipe.description}</p>
          <button onClick="router.nav('/recipe?id=${recipe.id}')" class="btn btn-success">Rezept ansehen</button>
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
  return recipes.filter((recipe) => recipe.category?.includes(category));
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
