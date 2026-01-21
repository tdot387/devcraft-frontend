import {
  createFilterButton,
  createFilterModalDialog,
} from '@/utils/filterHelpers';

export function renderFilterButton(): Node {
  const filterButton = createFilterButton();
  const dialog = createFilterModalDialog();
  filterButton.addEventListener('click', () => {
    dialog.toggleAttribute('open');
  });
  return filterButton;
}
