import { renderDefaultLayout } from './default.layouts';
type LayoutRenderer = () => void;

/**
 * Layout System - How to use and extend
 *
 * HOW TO ADD A NEW LAYOUT:
 * 1. Create layout function in layouts/ folder
 * 2. Add it to 'layouts' object
 * 3. Assign routes in 'routeLayouts'
 *
 * Example:
 * layouts: { minimal: renderMinimalLayout }
 * routeLayouts: { '/login': 'minimal' }
 */

const layouts: Record<string, LayoutRenderer> = {
  default: renderDefaultLayout,
  // auth: renderAuthLayout, // Example for additional layout
};

const routeLayouts: Record<string, string> = {
  '/': 'default',
  // '/about': 'auth', // Example route to layout mapping
};

export function renderLayout(route: string) {
  const layoutName = routeLayouts[route] || 'default';
  layouts[layoutName]();
}
