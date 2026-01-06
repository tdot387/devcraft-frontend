// SPA-Router (URL → View, History API)
// TODO: Router implementieren
import { renderHomeView } from '../views/homeView';

export function initRouter() {
  const render = () => {
    const path = window.location.pathname;
    
    if (path === '/') {
      renderHomeView();
    } else {
      // 404 für alle anderen URLs
      const app = document.querySelector('#app')!;
      app.innerHTML = '<h1>404 - Seite nicht gefunden</h1>';
    }
  };
  
  render(); // Initial render
}

export function navigateTo(path: string) {
  // TODO: Navigation implementieren
  console.log('Navigate to:', path);
}
