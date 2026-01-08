import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';

export function renderDefaultLayout() {
  const header = document.querySelector('#header')!;
  const footer = document.querySelector('#footer')!;
  
  header.innerHTML = renderHeader();
  footer.innerHTML = renderFooter();
}
