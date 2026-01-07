// Startseite (Suche + Rezeptliste)
import { createHeader } from "../components/header";

export function renderHomeView() {
  const app = document.querySelector("#app")!;
  app.innerHTML = "";

  const header = createHeader();
  app.appendChild(header);

  const content = document.createElement("div");
  content.innerHTML = "<h1>Home View - TODO</h1>";
  content.innerHTML += '<a href="/about">Go to About Page</a>';
  app.appendChild(content);
}
