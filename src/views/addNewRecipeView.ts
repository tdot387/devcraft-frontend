import { createRecipe } from "@/services/recipe.service";
import { renderAddNewRecipeTemplate } from "@/templates/addNewRecipe.template";
import type { IRecipe } from "@/types/recipe.types";

export function renderAddNewRecipeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderAddNewRecipeTemplate();

  let newRecipeNameInput = document.getElementById('new-recipe-name') as HTMLInputElement;
  let newRecipeDescriptionInput = document.getElementById('new-recipe-description') as HTMLInputElement;
  let newRecipeCategoryInput = document.getElementById('new-recipe-category') as HTMLFormElement;
  let newRecipeIngredientsInput = document.getElementById('new-recipe-ingredient') as HTMLFormElement;
  let newRecipeForm = document.getElementById('recipe-form') as HTMLFormElement;
  let newRecipeImgUrl = document.getElementById('new-recipe-image-url') as HTMLFormElement;

  
  let newRecipeCategory: string[] = [];

  newRecipeCategoryInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    
    const value = newRecipeCategoryInput.value.trim();
    if(!value) return;

    newRecipeCategory.push(value);

    console.log('This is your category:', newRecipeCategoryInput.value)
    newRecipeCategoryInput.value = '';

    showNewlyAddedCategories();

  })

  let showNewlyAddedCategories = () => {
    const newlyAddedCategories = document.getElementById('newly-added-categories') as HTMLElement;
    
    newlyAddedCategories.textContent = '';

    for (let category of newRecipeCategory) {
      const cat = document.createElement('span');
      cat.textContent = category;
      cat.classList.add('badge', 'text-bg-primary', 'me-2')
      newlyAddedCategories.appendChild(cat);
    }

  }

  newRecipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRecipe: IRecipe = {
      name: newRecipeNameInput.value,
      description: newRecipeDescriptionInput.value,
      category: ['testkategorie'],
      favorite: false,
      imageUrl: newRecipeImgUrl.value,
      ingredients: [{ amount: '1', name: 'Spitzkohl', unit: 'Stk.' }, { amount: '2', name: 'Olivenöl', unit: 'EL' }, { amount: '5', name: 'Sojasoße', unit: 'g' }],
      instructions: 'Einfach loslegen und gut is.'
    }

    createRecipe(newRecipe);
  })

}
