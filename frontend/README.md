## 📂 Projektheftung & Ordnerstruktur im Frontend

Um im Team effizient zu arbeiten, nutzt dieses Projekt etablierte, professionelle Namenskonventionen der Softwareindustrie. Bitte mache dich vor dem Start mit der Struktur vertraut:

```text
classroom-manager-skeleton/
├── backend/                  # ⚙️ Das API-Backend (Lernfeld: Anwendungsentwicklung)
│   ├── src/
│   │   ├── controllers/      # Routen-Handler (Verarbeitung von HTTP-Anfragen)
│   │   ├── data/             # Datenbasis (Lokale JSON-Dateien / Mock-Daten)
│   │   └── index.ts          # Haupteinstiegspunkt des Node.js-Servers
│   ├── package.json          # Projektabhängigkeiten & Skripte des Backends
│   └── tsconfig.json         # TypeScript-Konfiguration für das Backend
│
├── frontend/                 # 🎨 Das Web-Frontend (Lernfeld: UI/UX & APIs)
│   ├── public/               # Unveränderte statische Assets (z.B. Favicon, MS Teams Manifeste)
│   ├── src/
│   │   ├── assets/           # Medienressourcen (Bilder, Logos), die im Code importiert werden
│   │   ├── components/       # Wiederverwendbare UI-Bausteine (z.B. Button, Card, StudentRow)
│   │   ├── views/            # Komplette Seiten/Ansichten (z.B. Dashboard, Klassenbuch-Ansicht)
│   │   ├── index.css         # Globale CSS-Stile
│   │   └── main.tsx          # Startpunkt der React-Anwendung
│   ├── package.json          # Projektabhängigkeiten & Skripte des Frontends
│   └── tsconfig.json         # TypeScript-Konfiguration für das Frontend
│
└── .gitignore                # Ausschlussliste für Git (verhindert das Hochladen von node_modules)
```

## Projekthandhabung
```markdown
# 🎨 Classroom-Manager - Web-Frontend (Client)

Dies ist das Frontend des Classroom-Managers. Es basiert auf **React**, **TypeScript**, **Vite** und nutzt **React-Bootstrap** für das visuelle Design.

## 🧪 Die Axios-Sandbox (Ausgangslage für Schüler)

Für den Einstieg in die API-Kommunikation wurde ein geschützter Experimentierbereich eingerichtet:
* **Ort:** `src/sandbox/apiTest.ts`
* **Funktion:** Beim Start der Anwendung führt dieses Skript im Hintergrund einen automatischen API-Aufruf mittels der Bibliothek **Axios** an das Backend aus.
* **Arbeitsauftrag für den Start:** Öffne die Anwendung im Browser, öffne die Entwicklertools mit **F12** und schaue in die **Konsole**. Dort siehst du die vom Node.js-Backend abgerufenen Schülerdaten als strukturierte Tabelle (`console.table()`).

Die Datei `src/App.tsx` bleibt dadurch sauber und bereit für deine UI-Entwicklung.

## 🏃‍♂️ Manueller, isolierter Start

Falls du das Frontend einmal unabhängig vom Backend starten möchtest:
1. Stelle sicher, dass du im Ordner `frontend` bist: `cd frontend`
2. Abhängigkeiten installieren (falls noch nicht geschehen): `npm install`
3. Server starten: `npm run dev`

Das Frontend läuft standardmäßig auf [http://localhost:5173](http://localhost:5173).
```

---
### 🛠️ Automatisch generierte Dateien & Konfigurationen

Moderne Entwicklungsumgebungen bringen Konfigurationsdateien mit, die Werkzeugen (wie Compilern, Lintern oder Bundlern) sagen, wie sie mit unserem Code umgehen sollen. Hier ist die Übersicht der Dateien, die du im `frontend`-Ordner (und teilweise im `backend`-Ordner) siehst:

#### 📦 Das Paketmanagement (Essentiell für Installation & Updates)

- **`package.json`**: Das „Rezeptbuch“ des Projekts. Hier stehen der Projektname, die ausführbaren Skripte (z. B. `npm run dev`) und vor allem alle externen Bibliotheken (_Dependencies_ wie `react` oder `bootstrap`), die das Projekt zum Laufen braucht. Sie wird manuell oder über `npm install <paket>` erweitert.
- **`package-lock.json`**: Das „Präzisions-Protokoll“. Während in der `package.json` oft nur ungenaue Versionen stehen (z. B. `^18.3.1`), speichert diese Datei automatisch die _exakte_ Version und Herkunft jedes einzelnen Unter-Pakets ab. Sie sorgt dafür, dass das Projekt auf jedem Schüler-Rechner weltweit exakt dieselben Abhängigkeiten installiert. **Wichtig:** Diese Datei wird niemals händisch editiert!
- **`node_modules/`**: Der lokale Lagerraum. Wenn `npm install` ausgeführt wird, lädt Node.js alle in der `package.json` definierten Bibliotheken aus dem Internet herunter und entpackt sie in diesen Ordner. Da er riesig ist, wird er über die `.gitignore` vom GitHub-Upload ausgeschlossen.

#### ⚙️ Build-Tools & Code-Qualität

- **`index.html`**: Der physische Einstiegspunkt im Browser. Bei einer Single-Page-Application (SPA) wie React ist diese Datei fast leer. Sie lädt lediglich die Datei `src/main.tsx` nach, welche dann die gesamte Benutzeroberfläche dynamisch in das `<div id="root">`-Element injiziert.
- **`vite.config.ts`**: Die Steuerzentrale für unseren Bundler _Vite_. Sie sagt Vite, wie das React-Projekt für die Entwicklung optimiert und wie es später für den Webserver produktionsreif zusammengebaut (_built_) werden soll.
- **`eslint.config.js`**: Der „digitale Code-Polizist“. _ESLint_ prüft den geschriebenen JavaScript-/TypeScript-Code automatisiert im Hintergrund auf Syntaxfehler, ungenutzte Variablen oder schlechten Programmierstil und hebt diese direkt in VS Code farbig hervor.

#### 📘 TypeScript-Konfigurationen

- **`tsconfig.json`**: Die Hauptkonfiguration für den TypeScript-Compiler. Sie legt fest, wie streng TypeScript den Code auf Typisierungsfehler prüfen soll und in welche JavaScript-Version der Code übersetzt wird.
- **`tsconfig.app.json`** & **`tsconfig.node.json`**: Unter-Konfigurationen. Sie teilen dem Compiler spezifische Regeln für den Frontend-Code (App), der im Browser läuft, und die Werkzeuge (Node), die nur auf dem PC laufen, auf.
- **`src/vite-env.d.ts`**: Eine reine Hilfsdatei (_Declaration File_). Sie hilft TypeScript dabei, spezielle Vite-Funktionen (wie z. B. das Importieren von Bildern oder Umgebungsvariablen) fehlerfrei zu verstehen.

#### 🎨 Standard-Komponenten & Styles (Anfangszustand)

- **`src/App.tsx`**: Die Hauptkomponente der React-Anwendung. Sie dient als Wurzel-Element, in dem alle anderen Ansichten und UI-Komponenten zusammenlaufen.
- **`src/App.css`** & **`src/index.css`**: CSS-Dateien für das Styling. Während die `index.css` für das globale, projektweite Layout zuständig ist, enthält die `App.css` oft nur Stile, die exakt für die Hauptkomponente gelten.

# React + TypeScript + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
