# 🏫 Classroom-Manager (Gesamt-Skelett)

Willkommen beim **Classroom-Manager**! Dieses Repository dient als strukturierte Ausgangsbasis für die Lernfelder der Fachinformatiker-Ausbildung LF10a+11a. Es vereint ein modernes React-Frontend mit einem Node.js-API-Backend in einem sogenannten **Monorepo**.

---

## 📂 Die Ordnerstruktur

Um wie in echten Softwarehäusern zu arbeiten, nutzt dieses Projekt etablierte Industriestandards. Hier ist der Überblick über die Ausgangslage:

```text
classroom-manager-skeleton/
├── backend/                  # ⚙️ Node.js / Express API (Lernfeld: Anwendungsentwicklung)
│   ├── src/
│   │   ├── controllers/      # Routen-Handler (Verarbeitung von HTTP-Anfragen)
│   │   ├── data/             # Datenbasis (Lokale JSON-Dateien / Mock-Daten)
│   │   └── index.ts          # Haupteinstiegspunkt des Servers
│   └── README.md             # Spezifische Dokumentation für das Backend
│
├── frontend/                 # 🎨 React / TypeScript / Bootstrap (Lernfeld: UI/UX & APIs)
│   ├── src/
│   │   ├── assets/           # Medienressourcen (Bilder, Logos)
│   │   ├── components/       # Wiederverwendbare UI-Bausteine (Buttons, Tabellen)
│   │   ├── sandbox/          # 🧪 Experimentier-Ordner (z.B. für Axios-API-Tests)
│   │   ├── views/            # Komplette Seiten/Ansichten (Dashboard, Klassenbuch)
│   │   └── main.tsx          # Einstiegspunkt der React-Anwendung
│   └── README.md             # Spezifische Dokumentation für das Frontend/Client
│
├── package.json              # Zentrale Steuerung des Monorepos (Start-Skripte)
└── README.md                 # Diese Haupt-Dokumentation
```

## 🏃‍♂️ Manueller, gemeinsamer frontend- und backend-Start

1. Stellen Sie sicher, dass Sie im Ordner Projekthauptordner bist
2. Abhängigkeiten installieren: `npm install`
3. Frontend & Server im Entwicklungsmodus starten: `npm run dev`

---

## 📺 Begleitendes Lernmaterial & Video-Kurs (Empfehlung, aber ohne Gewähr)

Für den Einstieg in React und das Verständnis moderner Web-Architekturen wird folgendes, praxisnahes Video-Tutorial (ca. 2 Stunden) als begleitendes Selbstlern-Material empfohlen:

- **Video-Kurs:** [React JS 19 Full Course 2025 | Master React in 2 Hours](https://www.youtube.com/watch?v=dCLhUialKPQ) (von _JavaScript Mastery_)

### 🧠 Relevante Schlüsselthemen für unseren Classroom-Manager:

Dieses Video deckt exakt die Kernkonzepte ab, die wir in den kommenden Unterrichtseinheiten in unserem Projekt-Skelett anwenden:

1. **Was ist React & warum nutzen wir es?** [00:01:42]
   - Verstehe den Unterschied zu klassischen Webseiten und warum React den Markt dominiert (42% Marktanteil laut Stack Overflow Umfrage).
   - Die Funktionsweise des **Virtual DOM** [00:03:49]: Warum Updates im Browser wie ein einzelnes Mosaiksteinchen ausgetauscht werden, anstatt die ganze Wand neu zu streichen.
2. **Die Anatomie eines Projekts** [00:12:35]
   - Eine visuelle Erklärung der Dateien, die du auch in unserem `frontend`-Ordner wiederfindest (`package.json`, `node_modules`, `public/`, `src/main.tsx`).
3. **Komponenten-Architektur** [00:15:12]
   - Der Übergang von veralteten _Class Components_ zu modernen _Functional Components_ (Arrow Functions), genau wie wir sie im Projekt nutzen.
   - Wie Daten mittels **Props** [00:17:39] dynamisch in UI-Bausteine hineinfließen.
4. **Projekt-Build & Deployment** [02:03:36]
   - Wie aus unserem Quellcode mittels `npm run build` ein hochoptimierter Produktions-Ordner (`dist/`) entsteht, den man auf einen echten Webserver hochladen kann.

### 💡 Tipp für das Selbststudium:

Nutze die oben angegebenen Zeitstempel, um gezielt Themen zu wiederholen, falls dir beim Programmieren unseres Classroom-Managers Unklarheiten bei der Komponentenstruktur oder den npm-Befehlen begegnen.

Smit, 2026