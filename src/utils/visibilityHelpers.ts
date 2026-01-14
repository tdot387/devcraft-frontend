export function hideSearchInputInHeader() {
    const header = document.getElementById('search-container')!;
    header.classList.add("hidden");
}

export function hideAddNewButtonInHeader() {
    const header = document.getElementById('add-new-recipe')!;
    header.classList.add("hidden");
}