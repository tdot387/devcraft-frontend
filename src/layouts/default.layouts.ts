import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';

export function renderDefaultLayout() {
  const header = document.querySelector('#header')!;
  const footer = document.querySelector('#footer')!;
  const app = document.querySelector('#app')!;

  app.className = 'flex-grow-1 container';

  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
}
