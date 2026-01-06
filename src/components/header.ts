// Kopfbereich (z. B. Suche, Navigation)
// TODO: Header implementieren

export function createHeader(): HTMLElement {
  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Meine App";
  header.appendChild(title);
  return header;
}
