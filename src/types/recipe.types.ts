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
  category?: string; // keep it till categories is implemented in firebase
  description: string;
  instructions: string[];
  ingredients: IIngredient[];
  favorite: boolean;
  imageUrl: string;
}
