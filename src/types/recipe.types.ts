export interface IIngredient {
  name: string;
  amount: string;
  unit: TUnit;
}

export type TUnit = 'g' | 'ml' | 'Stk.' | 'EL' | 'TL';

interface IIngredientWithId extends IIngredient {
  id: string;
}

export interface IRecipe {
  id?: string;
  name: string;
  category: string[];
  description: string;
  instructions: string;
  ingredients: IIngredient[];
  favorite: boolean;
  imageUrl: string;
}

export interface IRecipeWithId extends IRecipe {
  id: string;
}
