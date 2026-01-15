import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';

export function renderDefaultLayout() {
  const header = document.querySelector('#header')!;
  const footer = document.querySelector('#footer')!;
  const app = document.querySelector('#app')!;

  app.className = 'flex-grow-1';

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
  registerHeaderSearch();
}

function registerHeaderSearch() {
  const searchInput: HTMLInputElement = document.getElementById("search-input") as HTMLInputElement;
  if (searchInput) {
    searchInput.addEventListener('keyup', () => {
      const searchText = searchInput.value;
      const searchEvent = new CustomEvent("executeSearch", { detail: { searchText } });
      window.dispatchEvent(searchEvent);
    })
  }
}

