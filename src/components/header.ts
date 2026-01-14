import { renderHeaderTemplate } from '../templates/header.template';

export function renderHeader(): string {
  const template = renderHeaderTemplate();
  return template;
}