import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseApp';
import type { IRecipe, IRecipeWithId } from '@/types/recipe.types';

export async function getRecipes(): Promise<IRecipeWithId[]> {
  try {
    const snapshot = await getDocs(collection(db, 'recipes'));
    const recipes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...(doc.data() as Omit<IRecipeWithId, 'id'>),
      };
    });

    return recipes;
  } catch (error) {
    return [];
  }
}

export async function createRecipe(recipe: IRecipe) {
  try {
    const docRef = await addDoc(collection(db, 'recipes'), recipe);
    console.log('Success!', docRef.id);
  } catch (e) {
    console.log('that didnt work', e);
  }
}
