import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseApp';

export async function getRecipeById(id: string) {
  try {
    const docRef = doc(db, 'recipes', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const recipeData = data.recipe || data;
      return {
        id: docSnap.id,
        ...recipeData,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return null;
  }
}
