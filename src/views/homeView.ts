// Startseite (Suche + Rezeptliste)
import { renderHomeViewTemplate } from '@/templates/home.template';

export function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = renderHomeViewTemplate();
}
