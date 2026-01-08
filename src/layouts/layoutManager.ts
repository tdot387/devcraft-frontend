import { renderDefaultLayout } from './default.layouts';
type LayoutRenderer = () => void;

const layouts: Record<string, LayoutRenderer> = {
  default: renderDefaultLayout,
};

const routeLayouts: Record<string, string> = {
  '/': 'default',
  '/about': 'default',
  '/recipe': 'default',
};

export function renderLayout(route: string) {
  const layoutName = routeLayouts[route] || 'default';
  layouts[layoutName]();
}
