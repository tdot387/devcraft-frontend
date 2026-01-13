export interface IIngredient {
  name: string;
  amount: string;
  unit: TUnit;
}

export type TUnit = 'g' | 'ml' | 'Stk.' | 'EL' | 'TL';

export interface IRecipe {
  id?: string;
  name: string;
  categories: string[];
  description: string;
  instructions: string[];
  ingredients: IIngredient[];
  favorite: boolean;
  imageUrl: string;
  prepTime: string;
}
