import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';

export function renderDefaultLayout() {
  const header = document.querySelector('#header')!;
  const footer = document.querySelector('#footer')!;
  const app = document.querySelector('#app')!;

  app.className = 'flex-grow-1';

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
  // Registers the visible search input on resize
  window.addEventListener("resize", () => {
    registerHeaderSearch(document.body.clientWidth);
  });
  registerHeaderSearch(document.body.clientWidth);
}

function registerHeaderSearch(screenWidth: number) {
  const searchInput = screenWidth >= 768 ? document.getElementById("search-input") : document.getElementById("search-input-mobile");
  if (searchInput) {
    searchInput.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    })
  }
}

