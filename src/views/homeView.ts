// Startseite (Suche + Rezeptliste)
// TODO: Home View implementieren
import { createHeader } from '../components/header';

export function renderHomeView() {
  const app = document.querySelector('#app')!;
  app.innerHTML = ''; // Clear
  
  const header = createHeader();
  app.appendChild(header);
  
  const content = document.createElement('div');
  content.innerHTML = '<h1>Home View - TODO</h1>';
  app.appendChild(content);
}