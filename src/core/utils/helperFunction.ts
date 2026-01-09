import { router } from '../router';

// helper function to set up event listeners for link clicks
export const handleLinkClick = (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'A') {
    e.preventDefault();
    const url = (target as HTMLAnchorElement).getAttribute('href');
    console.log('Navigating to:', url);
    router.nav(url || '/', true);
  }
};

// helper function to handle browser navigation (back/forward)
export const handleBrowserNavigation = (e: PopStateEvent) => {
  const route = e.state?.route || window.location.pathname;
  router.nav(route, false);
};

// function to set up all necessary event listeners
export const setupEventListeners = () => {
  document.addEventListener('click', handleLinkClick);
  window.addEventListener('popstate', handleBrowserNavigation);
};
