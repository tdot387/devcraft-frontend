// Startseite (Suche + Rezeptliste)
import { createHeader } from "../components/header";
import { renderHomeViewTemplate } from "@/templates/home.template";

export function renderHomeView() {
  const app = document.querySelector("#app")!;
  app.innerHTML = "";

  const header = createHeader();
  app.appendChild(header);

  const content = document.createElement("div");
  content.innerHTML = renderHomeViewTemplate();
  app.appendChild(content);
}
