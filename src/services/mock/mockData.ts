import type { IRecipe } from '@/types/recipe.types';

// Mock data with Pixabay images
const mockRecipes: IRecipe[] = [
  {
    id: '123',
    name: 'Spaghetti Carbonara',
    categories: ['Pasta', 'Italienisch'],
    description: 'Klassische italienische Pasta mit Ei, Speck und Parmesan.',
    instructions:
      '1. Pasta kochen 2. Speck anbraten 3. Ei und Käse vermischen 4. Alles zusammen mischen',
    ingredients: [
      { name: 'Spaghetti', quantity: '400g' },
      { name: 'Speck', quantity: '200g' },
      { name: 'Eier', quantity: '3 Stück' },
      { name: 'Parmesan', quantity: '100g' },
    ],
    favorite: false,
    image:
      'https://cdn.pixabay.com/photo/2018/07/18/19/12/spaghetti-3547078_1280.jpg',
  },
  {
    id: '456',
    name: 'Caesar Salad',
    categories: ['Salat', 'Amerikanisch'],
    description: 'Frischer Salat mit Croutons und Caesar Dressing.',
    instructions:
      '1. Salat waschen 2. Dressing zubereiten 3. Croutons rösten 4. Alles vermischen',
    ingredients: [
      { name: 'Römersalat', quantity: '2 Köpfe' },
      { name: 'Parmesan', quantity: '50g' },
      { name: 'Croutons', quantity: '100g' },
    ],
    favorite: true,
    image:
      'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg',
  },
  {
    id: '789',
    name: 'Schnitzel Wiener Art',
    categories: ['Fleisch', 'Österreichisch'],
    description: 'Paniertes Schnitzel nach Wiener Art.',
    instructions:
      '1. Fleisch klopfen 2. Panieren 3. In Öl braten 4. Mit Zitrone servieren',
    ingredients: [
      { name: 'Kalbsschnitzel', quantity: '4 Stück' },
      { name: 'Mehl', quantity: '100g' },
      { name: 'Eier', quantity: '2 Stück' },
      { name: 'Semmelbrösel', quantity: '200g' },
    ],
    favorite: false,
    image:
      'https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg',
  },
];

export { mockRecipes };
