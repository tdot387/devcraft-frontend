interface IIngredient {
  name: string;
  amount: string;
}

export interface IRecipe {
  name: string;
  category: string[];
  description: string;
  instructions: string;
  ingredients: IIngredient[];
  favorite: boolean;
}
