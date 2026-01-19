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
        option.addEventListener('click', function (e) {
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

export const createOption = (inputValue: string, recipe: IRecipe) => {
  let optionDiv: HTMLElement;
  optionDiv = document.createElement('DIV');
  optionDiv.classList.add('option-container');
  optionDiv.innerHTML =
    '<strong>' + recipe.name.substring(0, inputValue.length) + '</strong>';
  optionDiv.innerHTML += recipe.name.substring(inputValue.length);
  optionDiv.innerHTML += "<input type='hidden' value='" + recipe.name + "'>";
  optionDiv.innerHTML += `<img class='option-image' src='${recipe.imageUrl}'>`;
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

export const markOptionActive = (
  currentFocus: number,
  x?: HTMLCollectionOf<HTMLDivElement>,
) => {
  if (!x) return -1;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add('autocomplete-active');
  return currentFocus;
};

export const reactToKeyboardNavigation = (
  inputElement: HTMLInputElement,
  currentFocus: number,
) => {
  inputElement.addEventListener('keydown', function (e) {
    let x = document.getElementById(this.id + 'autocomplete-list');
    let autoComppleteList;
    if (x) {
      autoComppleteList = x.getElementsByTagName('div');
    }
    if (!autoComppleteList || autoComppleteList.length === 0) return;
    if (e.key === 'ArrowDown') {
      currentFocus == autoComppleteList!.length - 1
        ? (currentFocus = 0)
        : currentFocus++;
      markOptionActive(currentFocus, autoComppleteList);
    } else if (e.key === 'ArrowUp') {
      currentFocus == 0
        ? (currentFocus = autoComppleteList.length - 1)
        : currentFocus--;
      markOptionActive(currentFocus, autoComppleteList);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFocus > -1) {
        if (autoComppleteList) autoComppleteList[currentFocus].click();
      }
    } else if (e.key === 'Escape') {
      closeOtherOptions(inputElement);
    }
  });
};
