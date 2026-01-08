import { renderDefaultLayout } from './default.layouts';
type LayoutRenderer = () => void;

const layouts: Record<string, LayoutRenderer> = {
  default: renderDefaultLayout,
  auth: () => {
    console.log('Render auth layout');
    const header = document.querySelector('#header')!;
    const footer = document.querySelector('#footer')!;
    const app = document.querySelector('#app')!;
    
    // Set auth layout classes
    app.className = 'flex-grow-1 d-flex justify-content-center align-items-center';
    
    header.innerHTML = '<div class="bg-warning p-3 text-center">🔐 AUTH HEADER</div>';
    footer.innerHTML = '<div class="bg-info p-2 text-center mt-auto">Auth Footer</div>';
  },
};

const routeLayouts: Record<string, string> = {
  '/': 'default',
  '/about': 'auth',
  '/recipe': 'default',
};

export function renderLayout(route: string) {
  const layoutName = routeLayouts[route] || 'default';
  layouts[layoutName]();
}
