import { renderSearchTemplate } from '@/templates/searchTemplate';
import type { IRecipe } from '@/types/recipe.types';

// Can we create this as a constant in Recipes Service and export it to be used everywhere?
const allRecipes: IRecipe[] = [];
window.addEventListener('recipesFetched', (recipesFetchedEvent) => {
  allRecipes.length = 0;
  allRecipes.push.apply(
    allRecipes,
    (recipesFetchedEvent as CustomEvent).detail.recipes,
  );
});

export function renderSearch(): Node {
  const searchForm = document.createElement('FORM');
  searchForm.setAttribute('autocompolete', 'off');
  searchForm.innerHTML = renderSearchTemplate();
  const searchInput = searchForm.querySelector(
    '#search-input',
  ) as HTMLInputElement;
  autocomplete(searchInput);
  return searchForm;
}

function autocomplete(inputElement: HTMLInputElement) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  let currentFocus: number;
  /*execute a function when someone writes in the text field:*/
  inputElement.addEventListener('input', function (e) {
    let a,
      b,
      i,
      inputValue = this.value;
    /*close any already open lists of autocompleted values*/
    // closeAllLists();
    if (!inputValue) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement('DIV');
    a.setAttribute('id', this.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode?.appendChild(a);
    /*for each item in the array...*/
    allRecipes
      .filter((rec) => rec.name.toLocaleLowerCase().includes(inputValue))
      .forEach((rec) => {
        /*create a DIV element for each matching element:*/
        b = document.createElement('DIV');
        /*make the matching letters bold:*/
        b.innerHTML =
          '<strong>' + rec.name.substring(0, inputValue.length) + '</strong>';
        b.innerHTML += rec.name.substring(inputValue.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + rec.name + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener('click', function (e) {
          /*insert the value for the autocomplete text field:*/
          inputElement.value = this.getElementsByTagName('input')[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          // closeAllLists();
        });
        a.appendChild(b);
      });
  });
  /*execute a function presses a key on the keyboard:*/
  inputElement.addEventListener('keydown', function (e) {
    let x = document.getElementById(this.id + 'autocomplete-list');
    let autoComppleteList;
    if (x) {
      autoComppleteList = x.getElementsByTagName('div');
    }
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(autoComppleteList);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(autoComppleteList);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (autoComppleteList) autoComppleteList[currentFocus].click();
      }
    }
  });
  function addActive(x?: HTMLCollectionOf<HTMLDivElement>) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add('autocomplete-active');
  }
  function removeActive(x: HTMLCollectionOf<HTMLDivElement>) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  function closeAllLists(elmnt: Element) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName('autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputElement) {
        x[i].parentNode!.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener('click', function (e) {
    closeAllLists(e.target as Element);
  });
}
