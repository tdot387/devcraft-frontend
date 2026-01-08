import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseApp';
import type { IRecipe, IRecipeWithId } from '@/types/recipe.types';

export async function getRecipes(): Promise<IRecipeWithId[]> {
  const snapshot = await getDocs(collection(db, 'recipes'));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<IRecipeWithId, 'id'>),
  }));
}

export async function createRecipe(recipe: IRecipe) {

  try {
    const docRef = await addDoc(collection(db, 'recipes'), {
      recipe
    });
    console.log('Success!', docRef.id);

  }
  catch (e) {
    console.log('that didnt work', e);

  }
}

