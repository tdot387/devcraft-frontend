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
      <div class="card shadow h-100 d-flex flex-column">
        <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}" style="height: 200px; object-fit: cover;">
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
