import type { IRecipe } from '@/types/recipe.types';

const getCategories = (recipes: IRecipe[]): string[] => {
  const categorySet = new Set<string>();

  recipes?.forEach((recipe) => {
    const categoryData = recipe.categories || recipe.category; // remove "category" when firebase is updated

    if (categoryData && Array.isArray(categoryData)) {
      categoryData.forEach((category) => {
        categorySet.add(category);
      });
    }
  });

  return Array.from(categorySet);
};

export { getCategories };
