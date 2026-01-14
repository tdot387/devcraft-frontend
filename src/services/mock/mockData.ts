import type { IRecipe } from '@/types/recipe.types';

// Mock data with Pixabay images as fallback/testing purposes
const mockRecipes: IRecipe[] = [
  {
    id: '1Epsml7vamvgCaRYFpt8',
    name: 'Gebratener Lachs mit Zitronenreis',
    ingredients: [
      {
        amount: '2 Stück',
        name: 'Lachsfilet',
        unit: 'Stk.',
      },
      {
        name: 'Reis',
        amount: '150 g',
        unit: 'g',
      },
    ],
    instructions: [
      '1. Reis nach Packungsanleitung kochen.',
      '2. Zitrone heiß abwaschen, Schale abreiben und Saft auspressen.',
      '3. Lachsfilets salzen, pfeffern und in Olivenöl auf der Hautseite 4–5 Minuten braten.',
      '4. Lachs wenden und weitere 2 Minuten braten.',
      '5. Zitronenschale, Zitronensaft und Butter unter den Reis mischen.',
      '6. Lachs mit Zitronenreis servieren.',
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/11/16/18/00/salmon-3819966_960_720.jpg',
    description:
      'Saftiger Lachs mit frischem Zitronenreis – einfach, gesund und in 30 Minuten fertig.',
    categories: ['Fisch', 'Hauptgericht', 'Schnell'],
    favorite: false,
    prepTime: '30 Min',
  },
  {
    id: '1t1koO1ykasYqZCbUEpI',
    ingredients: [
      {
        amount: '3',
        name: 'Tomaten',
        unit: 'Stk.',
      },
      {
        name: 'Mozzarella',
        unit: 'Stk.',
        amount: '2',
      },
      {
        name: 'Olivenöl',
        unit: 'EL',
        amount: '2',
      },
      {
        unit: 'g',
        name: 'Basilikum',
        amount: '10',
      },
      {
        name: 'Salz',
        unit: 'TL',
        amount: '1',
      },
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2011/08/17/14/32/tomato-and-mozzarella-salad-8830_1280.jpg',
    categories: ['Salat', 'Vegetarisch', 'Sommer'],
    description: 'Frisch, einfach, mit Basilikum.',
    favorite: false,
    instructions: [
      '1. Tomaten in Scheiben schneiden, Mozzarella abtropfen und ebenfalls scheiben.',
      '2. Auf einem Teller abwechselnd anrichten.',
      '3. Mit Olivenöl, Salz und etwas Pfeffer würzen.',
      '4. Basilikum darüber.',
    ],
    name: 'Tomaten-Mozzarella-Salat',
    prepTime: '10 Min',
  },
  {
    id: '2X6c5r21X9HaWSiY1X5t',
    ingredients: [
      {
        amount: '250',
        name: 'Linsen (rot)',
        unit: 'g',
      },
      {
        unit: 'Stk.',
        amount: '2',
        name: 'Karotte',
      },
      {
        unit: 'Stk.',
        amount: '1',
        name: 'Zwiebel',
      },
      {
        unit: 'ml',
        amount: '900',
        name: 'Wasser',
      },
      {
        name: 'Tomatenmark',
        amount: '1',
        unit: 'EL',
      },
      {
        unit: 'TL',
        name: 'Salz',
        amount: '1',
      },
    ],
    categories: ['Suppe', 'Vegetarisch', 'Meal Prep'],
    favorite: false,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/10/10/22/28/lentil-soup-3738547_1280.jpg',
    name: 'Linsensuppe',
    instructions: [
      '1. Gemüse würfeln',
      '2. In Topf kurz anrösten, Linsen und Wasser dazugeben',
      '3. 25–35 Minuten köcheln lassen',
      '4. Salzen und abschmecken',
    ],
    description: 'Sättigende Linsensuppe, perfekt zum Aufwärmen.',
    prepTime: '40 Min',
  },
  {
    id: '635SoRfF3F5trTnKwIWR',
    instructions: [
      '1. Pasta kochen',
      '2. Pesto mit etwas Nudelwasser verrühren',
      '3. Pasta unterheben',
      '4. Servieren',
    ],
    favorite: false,
    ingredients: [
      {
        amount: '250',
        unit: 'g',
        name: 'Pasta',
      },
      {
        amount: '3',
        unit: 'EL',
        name: 'Pesto',
      },
      {
        unit: 'g',
        amount: '30',
        name: 'Parmesan',
      },
      {
        unit: 'TL',
        amount: '1',
        name: 'Salz',
      },
    ],
    description: 'Pasta mit Basilikum-Pesto.',
    categories: ['Pasta', 'Vegetarisch', 'Schnell'],
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/11/08/07/38/pasta-1033216_960_720.jpg',
    name: 'Pesto Pasta',
    prepTime: '15 Min',
  },
  {
    id: '6jWyXgBQjAZxeDujV1p4',
    instructions: [
      '1. Zwiebel anbraten',
      '2. Tomaten und Tomatenmark dazugeben',
      '3. Für 10 Minuten köcheln lassen',
      '4. Mulden machen, Eier hineinschlagen und stocken lassen',
      '5. Mit Salz abschmecken.',
    ],
    favorite: false,
    categories: ['Hauptgericht', 'Vegetarisch'],
    description: 'Eier in würziger Tomatensoße.',
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/05/08/16/13/shakshuka-6238787_960_720.jpg',
    ingredients: [
      {
        unit: 'Stk.',
        name: 'Eier',
        amount: '4',
      },
      {
        unit: 'g',
        name: 'Tomaten (Dose)',
        amount: '400',
      },
      {
        amount: '1',
        name: 'Zwiebel',
        unit: 'Stk.',
      },
      {
        unit: 'EL',
        name: 'Tomatenmark',
        amount: '1',
      },
      {
        name: 'Olivenöl',
        amount: '1',
        unit: 'EL',
      },
      {
        amount: '1',
        name: 'Salz',
        unit: 'TL',
      },
    ],
    name: 'Shakshuka',
    prepTime: '25 Min',
  },
  {
    id: '8ydydRHCxPkbkHw3uC0f',
    instructions: [
      '1. Thunfisch abtropfen',
      '2. Mit Mais und gewürfelter Zwiebel mischen',
      '3. Mit Joghurt und Salz abschmecken',
    ],
    ingredients: [
      {
        unit: 'g',
        name: 'Thunfisch',
        amount: '200',
      },
      {
        unit: 'g',
        amount: '150',
        name: 'Mais',
      },
      {
        unit: 'Stk.',
        amount: '1',
        name: 'Zwiebel',
      },
      {
        unit: 'g',
        name: 'Joghurt',
        amount: '100',
      },
      {
        unit: 'TL',
        name: 'Salz',
        amount: '0.5',
      },
    ],
    name: 'Thunfischsalat',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/01/16/16/59/salad-1143601_1280.jpg',
    description: 'Schneller Salat mit Thunfisch und Mais.',
    categories: ['Salat', 'Schnell'],
    favorite: false,
    prepTime: '10 Min',
  },
  {
    id: 'E5FCUgzBmMmBT7fFwh9c',
    description: 'Ofen-Feta mit Tomaten, dann mit Pasta vermischt.',
    name: 'Baked Feta Pasta',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/11/20/26/food-2940358_960_720.jpg',
    favorite: false,
    ingredients: [
      {
        name: 'Pasta',
        unit: 'g',
        amount: '250',
      },
      {
        amount: '200',
        unit: 'g',
        name: 'Feta',
      },
      {
        unit: 'g',
        name: 'Tomaten',
        amount: '300',
      },
      {
        unit: 'EL',
        name: 'Olivenöl',
        amount: '2',
      },
      {
        name: 'Salz',
        amount: '1',
        unit: 'TL',
      },
    ],
    categories: ['Pasta', 'Ofen', 'Vegetarisch'],
    instructions: [
      '1. Ofen auf 200°C vorheizen',
      '2. Tomaten und Feta in eine Form mit Öl und Salz geben',
      '3. 25 Minuten backen',
      '4. Pasta kochen',
      '5. Alles zerdrücken, Pasta untermischen',
    ],
    prepTime: '35 Min',
  },
  {
    id: 'GBI0pJgVZ4u0SuhGCsun',
    categories: ['Frühstück', 'Schnell'],
    name: 'Rührei mit Schnittlauch',
    description: 'Cremiges Rührei, fix gemacht.',
    instructions: [
      '1. Eier verquirlen und salzen.',
      '2. In Pfanne bei mittlerer Hitze stocken lassen und rühren.',
      '3. Schnittlauch darüber streuen, servieren.',
    ],
    prepTime: '10 Min',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/08/05/12/29/breakfast-876432_960_720.jpg',
    favorite: false,
    ingredients: [
      {
        name: 'Eier',
        unit: 'Stk.',
        amount: '4',
      },
      {
        unit: 'ml',
        amount: '30',
        name: 'Milch',
      },
      {
        name: 'Schnittlauch',
        amount: '10',
        unit: 'g',
      },
      {
        amount: '0.5',
        name: 'Salz',
        unit: 'TL',
      },
    ],
  },
  {
    id: 'H68eTcZCTFVfljNK91Bo',
    ingredients: [
      {
        amount: '400',
        name: 'Kidneybohnen',
        unit: 'g',
      },
      {
        amount: '200',
        unit: 'g',
        name: 'Mais',
      },
      {
        name: 'Tomaten (Dose)',
        unit: 'g',
        amount: '400',
      },
      {
        name: 'Zwiebel',
        unit: 'Stk.',
        amount: '1',
      },
      {
        unit: 'EL',
        amount: '1',
        name: 'Tomatenmark',
      },
      {
        name: 'Salz',
        unit: 'TL',
        amount: '1',
      },
    ],
    categories: ['Vegetarisch', 'Hauptgericht', 'Meal Prep'],
    name: 'Chili sin Carne',
    instructions: [
      '1. Zwiebel würfeln, in Topf anschwitzen',
      '2. Bohnen und Tomaten dazugeben',
      '3. Alles 15–20 Minuten köcheln lassen',
      '4. Mit Salz abschmecken',
      '5. Servieren',
    ],
    favorite: false,
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/04/16/12/49/chili-con-carne-325587_960_720.jpg',
    description: 'Würziges Bohnen-Chili ohne Fleisch.',
    prepTime: '30 Min',
  },
  {
    id: 'IvGAXRkIoDOUfGWgEUS6',
    ingredients: [
      {
        name: 'Hackfleisch',
        unit: 'g',
        amount: '400',
      },
      {
        unit: 'Stk.',
        name: 'Zwiebel',
        amount: '1',
      },
      {
        amount: '500',
        name: 'Passierte Tomaten',
        unit: 'ml',
      },
      {
        unit: 'EL',
        amount: '2',
        name: 'Tomatenmark',
      },
      {
        amount: '1',
        unit: 'TL',
        name: 'Salz',
      },
    ],
    description: 'Klassische Hackfleischsoße für Pasta.',
    favorite: false,
    instructions: [
      '1. Zwiebel fein würfeln',
      '2. Hack anbraten',
      '3. Tomatenmark kurz mitrösten',
      '4. Passierte Tomaten zugeben',
      '5. Für 15-20 köcheln lassen',
      '6. Mit Salz abschmecken',
      '7. Mit Pasta servieren',
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/08/19/09/24/spaghetti-1604836_960_720.jpg',
    categories: ['Pasta', 'Hauptgericht'],
    name: 'Bolognese (schnell)',
    prepTime: '25 Min',
  },
  {
    id: 'KByMsKCuqtXNujp6XzFq',
    instructions: [
      '1. Milch aufkochen',
      '2. Reis einrühren',
      '3. Bei niedriger Hitze 25–30 Minuten rühren, bis cremig',
      '4. Zucker und Salz unterrühren',
    ],
    categories: ['Süß', 'Dessert'],
    favorite: false,
    ingredients: [
      {
        name: 'Milch',
        amount: '800',
        unit: 'ml',
      },
      {
        amount: '200',
        name: 'Milchreis',
        unit: 'g',
      },
      {
        amount: '2',
        unit: 'EL',
        name: 'Zucker',
      },
      {
        name: 'Salz',
        amount: '0.5',
        unit: 'TL',
      },
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/10/08/21/45/rice-pudding-480823_1280.jpg',
    description: 'Cremiger Milchreis, warm oder kalt.',
    name: 'Milchreis',
    prepTime: '35 Min',
  },
  {
    id: 'KjQL0gCBPZvHWJijhe9l',
    name: 'Ofenkartoffeln mit Kräuterquark',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/01/15/17/57/baked-potatoes-1142155_960_720.jpg',
    ingredients: [
      {
        amount: '900',
        unit: 'g',
        name: 'Kartoffeln',
      },
      {
        unit: 'EL',
        name: 'Olivenöl',
        amount: '2',
      },
      {
        unit: 'g',
        amount: '250',
        name: 'Quark',
      },
      {
        unit: 'g',
        amount: '15',
        name: 'Kräuter',
      },
      {
        unit: 'TL',
        name: 'Salz',
        amount: '1',
      },
    ],
    instructions: [
      '1. Ofen auf 200°C vorheizen',
      '2. Kartoffeln halbieren',
      '3. Mit Öl und Salz mischen',
      '4. Für 35–45 Minuten backen',
      '5. Quark mit Kräutern und Salz verrühren, dazu servieren.',
    ],
    categories: ['Vegetarisch', 'Ofen', 'Hauptgericht'],
    favorite: false,
    description: 'Knusprige Kartoffeln, dazu cremiger Quark.',
    prepTime: '50 Min',
  },
  {
    id: 'QYHDLSmrYOhrLLx7Lptp',
    categories: ['Vegetarisch', 'Schnell', 'Hauptgericht'],
    ingredients: [
      {
        amount: '200',
        unit: 'g',
        name: 'Reis',
      },
      {
        amount: '1',
        name: 'Paprika',
        unit: 'Stk.',
      },
      {
        unit: 'Stk.',
        name: 'Zucchini',
        amount: '1',
      },
      {
        amount: '1',
        unit: 'Stk.',
        name: 'Karotte',
      },
      {
        amount: '2',
        unit: 'EL',
        name: 'Olivenöl',
      },
      {
        unit: 'TL',
        amount: '1',
        name: 'Salz',
      },
    ],
    name: 'Gemüsepfanne mit Reis',
    favorite: false,
    instructions: [
      '1. Reis kochen',
      '2. Gemüse würfeln, in etwas Öl anbraten',
      '3. Mit Salz abschmecken',
      '4. Reis unterheben und kurz durchschwenken',
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/12/04/16/49/vegetable-palau-3856048_960_720.jpg',
    description: 'Bunte Pfanne, ideal für Resteverwertung.',
    prepTime: '25 Min',
  },
  {
    id: 'VAEs98H8JJWSmdKh0Tqu',
    name: 'Couscous-Salat',
    categories: ['Salat', 'Vegetarisch', 'Meal Prep'],
    favorite: false,
    instructions: [
      '1. Couscous in heißem Wasser quellen lassen',
      '2. Gemüse würfeln',
      '3. Alles mit Olivenöl und Salz mischen',
    ],
    description: 'Couscous mit Gemüse, frisch und sättigend.',
    prepTime: '15 Min',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/05/07/21/36/couscous-3381718_1280.jpg',
    ingredients: [
      {
        unit: 'g',
        amount: '200',
        name: 'Couscous',
      },
      {
        amount: '250',
        unit: 'ml',
        name: 'Wasser',
      },
      {
        name: 'Gurke',
        amount: '1',
        unit: 'Stk.',
      },
      {
        name: 'Tomaten',
        amount: '2',
        unit: 'Stk.',
      },
      {
        amount: '2',
        unit: 'EL',
        name: 'Olivenöl',
      },
      {
        amount: '1',
        unit: 'TL',
        name: 'Salz',
      },
    ],
  },
  {
    id: 'b0fIqWm6S0niEtMNKa1u',
    favorite: false,
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/03/29/12/19/oats-3272113_960_720.jpg',
    categories: ['Frühstück', 'Schnell', 'Meal Prep'],
    description: 'Am Abend vorbereiten, morgens fertig.',
    instructions: [
      '1. Haferflocken, Milch und Joghurt verrühren',
      '2. Honig einrühren',
      '3. Über Nacht kalt stellen',
      '4. Am nächsten Morgen mit Obst toppen',
    ],
    name: 'Overnight Oats',
    prepTime: '5 Min',
    ingredients: [
      {
        name: 'Haferflocken',
        amount: '60',
        unit: 'g',
      },
      {
        unit: 'ml',
        name: 'Milch',
        amount: '150',
      },
      {
        unit: 'g',
        amount: '100',
        name: 'Joghurt',
      },
      {
        amount: '1',
        unit: 'EL',
        name: 'Honig',
      },
      {
        amount: '80',
        name: 'Beeren',
        unit: 'g',
      },
    ],
  },
  {
    id: 'dsB0EZGh2C187nZB2ozJ',
    imageUrl:
      'https://cdn.pixabay.com/photo/2022/03/22/01/13/pretty-7084158_1280.jpg',
    favorite: false,
    name: 'Spaghetti Aglio e Olio',
    categories: ['Pasta', 'Vegetarisch', 'Schnell'],
    instructions: [
      '1. Spaghetti in Salzwasser al dente kochen',
      '2. Knoblauch in Scheiben schneiden, Chili fein hacken',
      '3. Öl erhitzen, Knoblauch sanft goldgelb anbraten, Chili kurz mitziehen lassen',
      '4. Spaghetti abgießen (etwas Kochwasser auffangen)',
      '5. In die Pfanne geben, mit etwas Kochwasser emulgieren',
      '6. Mit Petersilie und Salz abschmecken',
    ],
    description: 'Klassiker mit Knoblauch, Chili und Olivenöl.',
    prepTime: '20 Min',
    ingredients: [
      {
        amount: '250',
        name: 'Spaghetti',
        unit: 'g',
      },
      {
        amount: '4',
        unit: 'EL',
        name: 'Olivenöl',
      },
      {
        name: 'Knoblauch',
        amount: '3',
        unit: 'Stk.',
      },
      {
        name: 'Chili',
        amount: '1',
        unit: 'Stk.',
      },
      {
        name: 'Petersilie',
        amount: '10',
        unit: 'g',
      },
      {
        amount: '1',
        unit: 'TL',
        name: 'Salz',
      },
    ],
  },
  {
    id: 'jG1lHdh8ykhhyS4q4yvo',
    instructions: [
      '1. Ofen auf 180°C vorheizen',
      '2. Kartoffeln in dünne Scheiben schneiden',
      '3. In eine Form schichten',
      '4. Milch und Sahne mischen, salzen, über die Kartoffeln gießen',
      '5. Für 45–60 Minuten backen, bis das Gratin goldbraun ist',
    ],
    categories: ['Ofen', 'Herzhaft'],
    name: 'Kartoffelgratin',
    favorite: false,
    description: 'Cremiges Gratin mit Kartoffeln und Sahne.',
    prepTime: '70 Min',
    imageUrl:
      'https://cdn.pixabay.com/photo/2012/10/12/17/52/potato-gratin-61106_960_720.jpg',
    ingredients: [
      {
        amount: '800',
        name: 'Kartoffeln',
        unit: 'g',
      },
      {
        name: 'Sahne',
        amount: '200',
        unit: 'ml',
      },
      {
        name: 'Milch',
        amount: '150',
        unit: 'ml',
      },
      {
        name: 'Knoblauch',
        unit: 'Stk.',
        amount: '1',
      },
      {
        amount: '1',
        unit: 'TL',
        name: 'Salz',
      },
    ],
  },
  {
    id: 'mxJNdhewS1KVBkEqAxGX',
    categories: ['Backen', 'Süß'],
    description: 'Saftiges Bananenbrot, ideal für reife Bananen.',
    favorite: false,
    ingredients: [
      {
        unit: 'Stk.',
        amount: '3',
        name: 'Banane',
      },
      {
        name: 'Mehl',
        amount: '250',
        unit: 'g',
      },
      {
        unit: 'EL',
        amount: '3',
        name: 'Zucker',
      },
      {
        amount: '80',
        name: 'Milch',
        unit: 'ml',
      },
      {
        unit: 'Stk.',
        amount: '1',
        name: 'Ei',
      },
    ],
    name: 'Bananenbrot',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/06/30/21/49/bread-2459926_1280.jpg',
    instructions: [
      '1. Ofen auf 180°C vorheizen',
      '2. Bananen zerdrücken, mit Ei und Milch verrühren',
      '3. Mehl und Zucker dazu, mischen',
      '4. In Form füllen und 45–55 Minuten backen',
    ],
    prepTime: '60 Min',
  },
  {
    id: 'nhjoCr0msEFHcIApQjLd',
    instructions: [
      '1. Ofen auf 200°C vorheizen',
      '2. Gemüse schneiden, mit Öl und Salz mischen, aufs Blech',
      '3. Hähnchen dazugeben, 25–30 Minuten backen',
    ],
    ingredients: [
      {
        amount: '400',
        name: 'Hähnchenbrust',
        unit: 'g',
      },
      {
        amount: '500',
        unit: 'g',
        name: 'Kartoffeln',
      },
      {
        amount: '1',
        name: 'Paprika',
        unit: 'Stk.',
      },
      {
        amount: '1',
        unit: 'Stk.',
        name: 'Zucchini',
      },
      {
        name: 'Olivenöl',
        unit: 'EL',
        amount: '2',
      },
      {
        amount: '1',
        name: 'Salz',
        unit: 'TL',
      },
    ],
    favorite: false,
    name: 'Hähnchenbrust mit Ofengemüse',
    imageUrl:
      'https://cdn.pixabay.com/photo/2023/06/27/09/28/chicken-8091825_1280.jpg',
    categories: ['Hauptgericht', 'Ofen', 'Proteinreich'],
    description: 'Einfaches Blechgericht.',
    prepTime: '35 Min',
  },
  {
    id: 'rJlZV2gHnSP0b94lWOur',
    ingredients: [
      {
        amount: '4',
        unit: 'Stk.',
        name: 'Wraps',
      },
      {
        amount: '300',
        name: 'Hähnchenbrust',
        unit: 'g',
      },
      {
        name: 'Salat',
        amount: '80',
        unit: 'g',
      },
      {
        amount: '120',
        unit: 'g',
        name: 'Joghurt',
      },
      {
        name: 'Salz',
        amount: '1',
        unit: 'TL',
      },
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2022/03/11/10/06/wrap-7061741_960_720.jpg',
    categories: ['Snack', 'Schnell', 'Hauptgericht'],
    name: 'Wraps mit Hähnchen',
    description: 'Wraps mit Hähnchen, Salat und Joghurtsoße.',
    instructions: [
      '1. Hähnchen anbraten, salzen',
      '2. Wraps erwärmen',
      '3. Salat schneiden',
      '4. Alles in Wraps füllen, einrollen',
    ],
    favorite: false,
    prepTime: '20 Min',
  },
  {
    id: 'wBFbp6V6z39qFZxhGNtu',
    name: 'Pancakes',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/01/23/07/51/pancakes-4787102_1280.jpg',
    description: 'Fluffige Pancakes für ein schnelles Frühstück.',
    instructions: [
      '1. Mehl, Zucker und Salz mischen',
      '2. Milch einrühren, dann Ei unterziehen',
      '3. Pfanne leicht fetten',
      '4. Teig portionsweise ausbacken, bis Blasen entstehen',
      '5. Wenden und fertig backen',
    ],
    categories: ['Frühstück', 'Süß'],
    favorite: false,
    prepTime: '15 Min',
    ingredients: [
      {
        unit: 'g',
        amount: '200',
        name: 'Mehl',
      },
      {
        name: 'Milch',
        amount: '250',
        unit: 'ml',
      },
      {
        name: 'Ei',
        unit: 'Stk.',
        amount: '1',
      },
      {
        amount: '2',
        unit: 'EL',
        name: 'Zucker',
      },
      {
        amount: '0.5',
        unit: 'TL',
        name: 'Salz',
      },
    ],
  },
  {
    id: 'xNXXG3TUogpRsWHVUg6d',
    description: 'Einfache Tomatensuppe aus passierten Tomaten.',
    categories: ['Suppe', 'Vegetarisch'],
    instructions: [
      '1. Zwiebeln anbraten',
      '2. Passierte Tomaten und Wasser dazugeben',
      '3. Für 10–15 Minuten köcheln lassen',
      '4. Mit Salz abschmecken',
    ],
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/07/29/18/47/soup-5448661_1280.jpg',
    name: 'Tomatensuppe',
    favorite: false,
    prepTime: '20 Min',
    ingredients: [
      {
        amount: '700',
        name: 'Passierte Tomaten',
        unit: 'ml',
      },
      {
        unit: 'Stk.',
        name: 'Zwiebel',
        amount: '1',
      },
      {
        amount: '300',
        name: 'Wasser',
        unit: 'ml',
      },
      {
        name: 'Olivenöl',
        unit: 'EL',
        amount: '1',
      },
      {
        unit: 'TL',
        amount: '1',
        name: 'Salz',
      },
    ],
  },
];
