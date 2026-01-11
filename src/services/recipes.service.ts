import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseApp';
import type { IRecipe } from '@/types/recipe.types';

export async function getRecipes(): Promise<IRecipe[]> {
  try {
    const snapshot = await getDocs(collection(db, 'recipes'));
    const recipes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...(doc.data() as Omit<IRecipe, 'id'>),
      };
    });

    return recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
}

export async function createRecipe(recipe: IRecipe) {
  try {
    const docRef = await addDoc(collection(db, 'recipes'), recipe);
    console.log('Success!', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
