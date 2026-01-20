import { router } from '@/core/router';
import type { IRecipe } from '@/types/recipe.types';

export const closeOtherOptions = (parent: Element, option?: Element) => {
  var x = document.getElementsByClassName('autocomplete-items');
  for (var i = 0; i < x.length; i++) {
    if (option != x[i] && option != parent) {
      x[i].parentNode!.removeChild(x[i]);
    }
  }
};

export const createOptionsDropdownOnInput = (
  inputElement: HTMLInputElement,
  allRecipes: IRecipe[],
) => {
  inputElement.addEventListener('input', () => {
    closeOtherOptions(inputElement);
    let inputValue = inputElement.value;
    if (!inputValue) {
      return;
    }
    const optionsContainer = createOptionsContainer(inputElement);
    inputElement.parentNode?.appendChild(optionsContainer);
    allRecipes
      .filter((rec) => rec.name.toLocaleLowerCase().includes(inputValue))
      .forEach((rec) => {
        const option: HTMLElement = createOption(inputValue, rec);
        option.addEventListener('click', function () {
          inputElement.value = this.getElementsByTagName('input')[0].value;
          closeOtherOptions(inputElement);
          // TODO route to recipe view
        });
        optionsContainer.appendChild(option);
      });
  });
};

export const createOptionsContainer = (inputElement: HTMLInputElement) => {
  const a = document.createElement('DIV');
  a.setAttribute('id', inputElement.id + 'autocomplete-list');
  a.setAttribute('class', 'autocomplete-items');
  return a;
};

export const createOption = (
  inputValue: string,
  recipe: IRecipe,
): HTMLElement => {
  const optionDiv = document.createElement('div');
  optionDiv.classList.add('option-container');
  const name = recipe.name;
  const search = inputValue.trim();
  const nameContainer = document.createElement('span');
  if (search) {
    const matchIndex = name.toLowerCase().indexOf(search.toLowerCase());
    if (matchIndex !== -1) {
      nameContainer.append(
        document.createTextNode(name.substring(0, matchIndex)),
      );
      const strong = document.createElement('strong');
      strong.textContent = name.substring(
        matchIndex,
        matchIndex + search.length,
      );
      nameContainer.append(strong);
      nameContainer.append(
        document.createTextNode(name.substring(matchIndex + search.length)),
      );
    } else {
      nameContainer.textContent = name;
    }
  } else {
    nameContainer.textContent = name;
  }
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.value = name;
  const image = document.createElement('img');
  image.classList.add('option-image');
  image.src = recipe.imageUrl;
  optionDiv.append(nameContainer, hiddenInput, image);
  optionDiv.addEventListener('click', () => {
    router.nav(`/recipe?id=${recipe.id}`);
  });

  return optionDiv;
};

export const removeActive = (x: HTMLCollectionOf<HTMLDivElement>) => {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('autocomplete-active');
  }
};

export const reactToKeyboardNavigation = (inputElement: HTMLInputElement) => {
  let currentFocus = -1;

  inputElement.addEventListener('keydown', (e) => {
    const list = document.getElementById(`${inputElement.id}autocomplete-list`);
    if (!list) return;

    const items = Array.from(list.getElementsByTagName('div'));
    if (items.length === 0) return;

    const keyActions: Record<string, () => void> = {
      ArrowDown: () => {
        currentFocus = (currentFocus + 1) % items.length;
        markOptionActive(currentFocus, items);
      },
      ArrowUp: () => {
        currentFocus = currentFocus <= 0 ? items.length - 1 : currentFocus - 1;
        markOptionActive(currentFocus, items);
      },
      Enter: () => {
        e.preventDefault();
        items[currentFocus]?.click();
      },
      Escape: () => closeOtherOptions(inputElement),
    };

    keyActions[e.key]?.();
  });
};

export const markOptionActive = (
  currentFocus: number,
  items: HTMLDivElement[],
) => {
  if (!items) return;
  items.forEach((item, i) => {
    item.classList.toggle('autocomplete-active', i === currentFocus);
  });
};
