1. Rahmenbedingungen und Ziel
   1. Was wollen wir nach drei Wochen erreicht haben (Prototyp, funktionale Features, Lernerfolg)
      -> Die grundsätzlichen Anforderungen erfüllen und alle von uns ausgewählten User-Stories
   2. Welche und wie viele von den User-Stories wollen wir verwenden?
      -> erledigt
   3. Wie wichtig ist uns Schnelligkeit bzw. Code-Qualität?
      -> Eher Qualität, clean code
2. Scope und Priorisierung
   1. In welcher Reihenfolge setzen wir die User-Stories um?
      -> Entscheiden wir nach Gespräch mit Clemens
   2. Wie detailliert müssen die User-Stories umgesetzt sein (zB werden Favoriten nur lokal oder mit Login gespeichert)? Verwenden wir Localstorage oder sowas wie Firebase?
      -> Schaut sich Thomas an
   3. Was machen wir mit Feature-Ideen, die außerhalb der Stories auftreten (oder lassen wir diese überhaupt zu)?
      -> Auf Zuruf
   4. Wann gilt eine User-Story als fertig?
      -> Besprechen wir dann, wenns so weit is
3. Nutzer und Daten
   1. Gibt es User-Accounts oder ist alles anonym?
      -> Schauen wir, wie es mit Firebase läuft. Clemens fragen
   2. Woher kommen die Rezepte (Mock-Daten, API, eigene Rezepte)?
      -> Mike schaut nach APIs
4. Technik und Architektur
   1. Welches Framework wollen wir verwenden und warum?
      -> Vanilla-JS
   2. Wie komplex soll die Architektur sein?
      -> Alle: Erstmal auf Github suchen, evtl mit Vite arbeiten
   3. Nutzen wir CSS oder einen Preprocessor? Framework oder keins?
      -> Wir verwenden Bootstrap
   4. Inwieweit achten wir auf Accessibility?
      -> "Können wir noch nachziehen"
      – Mike
   5. Wie reagieren wir auf Fehler, Edge-Cases und Loading-States?
      -> Bei gewissen Punkten test-driven arbeiten, ansonsten “on the job”
5. Zusammenarbeit und Prozesse
   1. Wie lange geht bei uns ein Sprint?
      -> Eine Woche
   2. Gibt es Dailies, Retros, Reviews? Wie habt ihr da Zeit?
      -> Hauptsächlich über Slack, Retros mit Clemens in den Calls
   3. Wie dokumentieren wir Entscheidungen (mein Vorschlag: Trello)
      -> Trello, alle haben Zugang zum Board erhalten
   4. Kommunikation: Hauptsächlich Slack?
      -> Google Meet für Calls, Slack-Channel für Nachrichten
6. Rollen und Verantwortung
   1. Wer übernimmt die Rollen Product Owner, Scrum Master, Tech Lead?
      -> Fragen wir morgen auch Clemens, evtl sollen jede Woche die Rollen getauscht werden
7. Qualität
   1. Gibt es Anforderungen an Tests oder Formatierung?
      -> Patricia schaut sich Prettier oder ein anderes Formatierungstool an
   2. Wie wichtig ist uns sauberes UX/UI gegenüber Funktionalität?
      -> Sollte schon gut aussehen

# Architecture

src/ # Gesamter Applikationscode
├─ assets/ # Statische Ressourcen (kein JS-Verhalten)
│ └─ styles/ # Globale Styles
│ └─ main.css # Basis-CSS (Layout, Farben, Typo)
│
├─ core/ # App-Infrastruktur (kein UI, keine API)
│ ├─ router.js # SPA-Router (URL → View, History API)
│ ├─ store.js # Minimaler globaler State (z. B. Cache, UI-Zustand)
│ └─ dom.js # DOM-Hilfsfunktionen
│
├─ services/ # Externe Schnittstellen & Business-Logik
│ └─ api.js # API-Zugriff (fetch, endpoints, error handling)
│
├─ views/ # Seiten / Routen (1 View = 1 URL)
│ ├─ home.view.js # Startseite (Suche + Rezeptliste)
│ └─ recipe.view.js # Detailseite eines Rezepts (/recipe/:id)
│
├─ components/ # Wiederverwendbare UI-Bausteine
│ ├─ header.js # Kopfbereich (z. B. Suche, Navigation)
│ ├─ recipe-card.js # Einzelnes Rezept als UI-Element
│ └─ recipe-list.js # Container für mehrere RecipeCards
│
├─ main.js # App-Startpunkt (initialisiert Router & Views)
└─ index.html # Einzige HTML-Datei (Root-DOM für SPA)

Every file should be in camelCase

# Roles

Scrum Master: Patricia
Product Owner: Mike
Technical Lead: Thomas
