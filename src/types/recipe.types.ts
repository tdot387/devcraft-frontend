interface IIngredient {
  name: string;
  quantity: string;
}

export interface IRecipe {
  id?: string;
  name: string;
  categories: string[];
  description: string;
  instructions: string;
  ingredients: IIngredient[];
  favorite: boolean;
  image?: string;
}
