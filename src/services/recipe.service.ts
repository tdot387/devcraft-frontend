import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseApp';
import type { IRecipe, IRecipeWithId } from '@/types/recipe.types';

export async function getRecipes(): Promise<IRecipeWithId[]> {

    const snapshot = await getDocs(collection(db, 'recipes'));
    return snapshot.docs.map(doc =>
    ({
        id: doc.id,
        ...(doc.data() as Omit<IRecipeWithId, 'id'>)
    })
    );
}