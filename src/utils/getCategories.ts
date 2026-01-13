import type { IRecipe } from '@/types/recipe.types';

const getCategories = (recipes: IRecipe[]): string[] => {
  const categorySet = new Set<string>();

  recipes?.forEach((recipe) => {
    recipe.categories?.forEach((category) => {
      categorySet.add(category);
    });
  });

  return Array.from(categorySet);
};

export { getCategories };
