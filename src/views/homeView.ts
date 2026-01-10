// Startseite (Suche + Rezeptliste)
import { getRecipes } from '@/services/recipe.service';
import { renderHomeViewTemplate } from '@/templates/home.template';
import { getCategories } from '@/utils';

export async function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
  const recipeList = app.querySelector('#recipe-list')!;
  const recipes = await getRecipes();
  const homeCategories = app.querySelector('#home-categories')!;
  const categories = ['Beliebte Rezepte', ...getCategories(recipes)];

  homeCategories.innerHTML = `
    <div class="d-flex overflow-auto gap-2 pb-2">
      ${categories
        .map((category, index) => {
          if (index === 0) {
            return `<button class="btn btn-success flex-shrink-0" data-category="${category}">
            ${category}
            </button>`;
          }
          return `<button class="btn btn-outline-secondary flex-shrink-0" data-category="${category}">
            ${category}
            </button>`;
        })
        .join('')}
    </div>
  `;

  homeCategories.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.matches('button')) {
      homeCategories.querySelectorAll('button').forEach((btn) => {
        btn.className = 'btn btn-outline-secondary flex-shrink-0';
      });
      target.className = 'btn btn-success flex-shrink-0';
      const selectedCategory = target.getAttribute('data-category');

      let filteredRecipes: typeof recipes;
      if (selectedCategory === 'Beliebte Rezepte') {
        filteredRecipes = recipes;
      } else {
        filteredRecipes = recipes.filter((recipe) =>
          recipe.category?.includes(selectedCategory!),
        );
      }

      recipeList.innerHTML = '';

      filteredRecipes.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        const homeRecipeHeader = app.querySelector('.hero-recipe-ovierview')!;
        if (selectedCategory === 'Beliebte Rezepte') {
          homeRecipeHeader.textContent = 'Beliebte Rezepte';
        } else {
          homeRecipeHeader.textContent = `Kategorie ${selectedCategory}`;
        }
        recipeCard.className = 'col';
        recipeCard.innerHTML = `
            <div class="card shadow h-100">
              <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}">
              <div class="card-body">
                <h5 class="card-title">${recipe.name}</h5>
                <p class="card-text">${recipe.description}</p>
                <button onClick="router.nav('/recipe?id=${recipe.id}')" class="btn btn-success">Rezept ansehen</button>
              </div>
            </div>
          `;
        recipeList.appendChild(recipeCard);
      });

      return;
    }
  });

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'col';
    recipeCard.innerHTML = `
        <div class="card shadow h-100">
          <img src="${recipe.imageUrl}" class="card-img-top" alt="${recipe.name}">
          <div class="card-body">
            <h5 class="card-title">${recipe.name}</h5>
            <p class="card-text">${recipe.description}</p>
            <button onClick="router.nav('/recipe?id=${recipe.id}')" class="btn btn-success">Rezept ansehen</button>
          </div>
        </div>
      `;
    recipeList.appendChild(recipeCard);
  });
}
