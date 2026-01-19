// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { renderFooter } from '../components/footer';

describe('Footer Component', () => {
  it('should render a footer element', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderFooter();

    const footer = wrapper.querySelector('footer');
    expect(footer).not.toBeNull();
  });

  it('should contain the two section headings', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderFooter();

    const footer = wrapper.querySelector('footer')!;
    const text = footer.textContent ?? '';

    expect(text).toContain('Rezept App');
    expect(text).toContain('Navigation');
  });

  it('should contain navigation links', () => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = renderFooter();

    const footer = wrapper.querySelector('footer')!;
    const links = Array.from(footer.querySelectorAll('a'));

    // Link texts present
    expect(links.some((a) => a.textContent?.includes('Alle Rezepte'))).toBe(true);
    expect(links.some((a) => a.textContent?.includes('Rezept hinzufügen'))).toBe(true);

    // Correct hrefs (adjust if your router uses hash routes)
    const recipesLink = links.find((a) => a.textContent?.includes('Alle Rezepte'));
    const addLink = links.find((a) => a.textContent?.includes('Rezept hinzufügen'));

    expect(recipesLink?.getAttribute('href')).toBe('/recipes');
    expect(addLink?.getAttribute('href')).toBe('/add-new-recipe');
  });
});
