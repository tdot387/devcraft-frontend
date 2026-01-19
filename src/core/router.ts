import type { RouteHandler, TRouter } from '@/types/router.types';
import { setupEventListeners } from './utils/helperFunction';
import { renderHomeView } from '../views/homeView';
import { renderRecipeListView } from '../views/recipeListView';
import { renderRecipeView } from '../views/recipeView';
import { renderRecipeEditView } from '../views/recipeEditView';
import { renderLayout } from '../layouts/layoutManager';
import { getQueryParam } from './utils/urlUtils';
import { renderAddNewRecipeView } from '@/views/addNewRecipeView';

const routes: Record<string, RouteHandler> = {
  '/': renderHomeView,
  '/about': () => console.log('About page'),
  '/recipe': () => {
    const recipeId = getQueryParam('id');
    if (recipeId) {
      renderRecipeView();
    }
  },
  '/recipe/edit': () => {
    const recipeId = getQueryParam('id');
    if (recipeId) {
      renderRecipeEditView();
    }
  },
  '/recipes': renderRecipeListView,
  '/add-new-recipe': renderAddNewRecipeView,
};

/**
 * Simple router for our recipe app
 *
 * How to use:
 * router.nav('/about');             // go to about page from anywhere
 * router.nav('/recipe/456');        // go to recipe 456
 *
 * What it handles:
 * - Normal pages: '/', '/about', '/recipe'
 * - Recipe details: '/recipe/123' (gets the recipe ID automatically)
 * - Browser back/forward buttons
 * - Clicking on <a> links
 * - Simply add more routes to the `routes` object above
 *
 * Examples:
 * <a href="/recipe">Recipes</a>     // this link will work automatically
 * <button onclick="router.nav('/about')">About</button>
 */
const router: TRouter = {
  init: () => {
    setupEventListeners();
    router.nav(window.location.pathname, false);
  },

  nav: (route: string, addHistory = true) => {
    if (addHistory) {
      window.history.pushState({ route }, '', route);
    }

    renderLayout(route);

    // Extract base route without query parameters
    const baseRoute = route.split('?')[0];

    if (routes[baseRoute]) {
      routes[baseRoute]();
      return;
    }

    const app = document.querySelector('#app')!;
    app.innerHTML = '<h1>404 - Page not found</h1>';
  },
};

export { router, routes };
