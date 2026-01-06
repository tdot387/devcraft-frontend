interface IIngredient {
  name: string;
  quantity: string;
}

export interface IRecipe {
  name: string;
  category: string[];
  description: string;
  instructions: string;
  ingredients: IIngredient[];
  favorite: boolean;
}
