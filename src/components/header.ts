import { renderHeaderTemplate } from '../templates/header.template';
import { renderSearch } from './searchRecipes';

export function renderHeader(header: any): void {
  header.innerHTML = renderHeaderTemplate();
  const searchContainer = document.getElementById('search-container')!;
  searchContainer.appendChild(renderSearch());
}
