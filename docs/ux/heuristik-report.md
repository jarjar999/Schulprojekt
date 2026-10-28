# Heuristik-Report – Classroom-Manager

## 1. Sichtbarkeit des Systemstatus

### Befund
Erfüllt.

- Der Text ist durch schwarze Schrift auf weißem Hintergrund gut lesbar.
- Die Karten werden hervorgehoben, wenn man mit der Maus darüberfährt.
- Der Status „Fullstack-Verbindung aktiv“ wird grün dargestellt. Dadurch ist direkt erkennbar, dass die Verbindung zwischen Frontend und Backend funktioniert.

### Verbesserung
Der aktuelle Status ist bereits gut sichtbar. Bei einer fehlgeschlagenen Verbindung könnte der Status beispielsweise rot dargestellt werden, damit ein Problem sofort erkennbar ist.

---

## 2. Übereinstimmung zwischen System und realer Welt

### Befund
Teilweise erfüllt.

Begriffe wie „Classroom-Manager“ und „Schüler-Tabelle“ sind verständlich und passen zum Schulalltag.

Allerdings werden auch technische Begriffe wie „Axios“, „Express-API“ und „State Management“ verwendet. Diese Begriffe sind für Lehrkräfte ohne technische Kenntnisse möglicherweise schwer verständlich.

### Verbesserung
Technische Informationen könnten für Lehrkräfte ausgeblendet oder durch nutzerfreundlichere Begriffe ersetzt werden.


---

## 3. Nutzerkontrolle und Freiheit

### Befund
Nicht erfüllt.

Auf dem aktuellen Dashboard sind kaum interaktive Funktionen vorhanden. Möglichkeiten zum Abbrechen, Zurückgehen oder Rückgängigmachen sind deshalb nicht erkennbar.

### Verbesserung
Bei der späteren Bearbeitung von Schülerdaten sollten Aktionen abgebrochen und Änderungen rückgängig gemacht werden können.


---

## 4. Konsistenz und Standards

### Befund
Teilweise erfüllt.

Die vorhandenen Inhalte wirken strukturiert. Überschriften werden zur Unterteilung der verschiedenen Bereiche verwendet.

Da das Dashboard aktuell jedoch nur wenige Bedienelemente besitzt, kann die Konsistenz von Buttons und Formularen noch nicht richtig bewertet werden.

### Verbesserung
Zukünftige Buttons usw. sollten einheitlich gestaltet werden.


---

## 5. Fehlervermeidung

### Befund
Noch nicht erfüllt/umgesetzt.

Das aktuelle Dashboard zeigt hauptsächlich Informationen und bietet nur wenige Eingabemöglichkeiten. Man kann nicht erkennen, ob Maßnahmen für Fehlervermdeidung getätigt wurden.

### Verbesserung
Bei zukünftigen Eingabefeldern sollten die eingegebenen Daten vor dem Speichern überprüft werden.

Zum Beispiel sollte ein Schüler nicht gespeichert werden können, wenn kein Name eingegeben wurde.

---

## 6. Wiedererkennen statt Erinnern

### Befund
Teilweise erfüllt.

Die nächsten Entwicklungsschritte werden direkt auf dem Dashboard angezeigt. Dadurch muss sich der Nutzer diese Informationen nicht merken.

Technische Begriffe wie „useState“, „useEffect“, „POST“ oder „PUT“ setzen allerdings technisches Vorwissen voraus.

### Verbesserung
Funktionen sollten später über eindeutig beschriftete Buttons, Symbole und Menüs erreichbar sein. Dadurch müssen sich Nutzer möglichst wenig merken und können Funktionen direkt erkennen.

---

## 7. Flexibilität und Effizienz

### Befund
Noch nicht ausreichend bewertbar.

Das Dashboard besitzt aktuell nur wenige Funktionen. Eine Schülerverwaltung für Lehrkräfte sind noch nicht umgesetzt.

### Verbesserung
Häufig verwendete Funktionen wie Anwesenheiten sollten später schnell über die Startseite erreichbar sein. Dadurch können Lehrkräfte häufig benötigte Funktionen mit möglichst wenigen Klicks erreichen.

---

## 8. Ästhetisches und minimalistisches Design

### Befund
Erfüllt.

Das Dashboard ist übersichtlich gestaltet und die verschiedenen Themenbereiche sind klar voneinander getrennt.

### Verbesserung
Für die spätere Nutzung durch Lehrkräfte könnten technische Informationen wie „Axios“, „useState“ oder „Express-API“ ausgeblendet werden. Dadurch würde das Dashboard noch stärker auf die tatsächlich benötigten Informationen reduziert werden.

---

## 9. Hilfe bei Fehlern

### Befund
Nicht erkennbar.

Auf dem aktuellen Dashboard ist nicht ersichtlich, wie ein Fehler dargestellt wird, wenn beispielsweise das Backend nicht erreichbar ist.

### Verbesserung
Bei einem Verbindungsfehler sollte eine verständliche Fehlermeldung angezeigt werden.

---

## 10. Hilfe und Dokumentation

### Befund
Teilweise erfüllt.

Für Entwickler sind bereits einige Hinweise vorhanden. Beispielsweise wird erklärt, dass die Browser-Konsole mit F12 geöffnet werden kann und wo sich die Datei `apiTest.ts` befindet.

Für die spätere Zielgruppe der Lehrkräfte gibt es jedoch noch keine eigentliche Hilfe oder Benutzerdokumentation.

### Verbesserung
Für Lehrkräfte könnten kurze Hilfetexte oder eine Hilfeseite angeboten werden.

Dort könnten beispielsweise die Funktionen Anwesenheit, Kursbuch und Schülerverwaltung erklärt werden.

---

# Fazit

# Heuristik-Report – Classroom-Manager

## 1. Sichtbarkeit des Systemstatus

### Befund
Erfüllt.

- Der Text ist durch schwarze Schrift auf weißem Hintergrund gut lesbar.
- Die Karten werden hervorgehoben, wenn man mit der Maus darüberfährt.
- Der Status „Fullstack-Verbindung aktiv“ wird grün dargestellt. Dadurch ist direkt erkennbar, dass die Verbindung zwischen Frontend und Backend funktioniert.

### Verbesserung
Der aktuelle Status ist bereits gut sichtbar. Bei einer fehlgeschlagenen Verbindung könnte der Status beispielsweise rot dargestellt werden, damit ein Problem sofort erkennbar ist.

---

## 2. Übereinstimmung zwischen System und realer Welt

### Befund
Teilweise erfüllt.

Begriffe wie „Classroom-Manager“ und „Schüler-Tabelle“ sind verständlich und passen zum Schulalltag.

Allerdings werden auch technische Begriffe wie „Axios“, „Express-API“ und „State Management“ verwendet. Diese Begriffe sind für Lehrkräfte ohne technische Kenntnisse möglicherweise schwer verständlich.

### Verbesserung
Technische Informationen könnten für Lehrkräfte ausgeblendet oder durch nutzerfreundlichere Begriffe ersetzt werden.

Beispielsweise könnte statt „Axios-Verbindung zur Express-API“ einfach „Verbindung zum Server“ verwendet werden.

---

## 3. Nutzerkontrolle und Freiheit

### Befund
Nicht erfüllt.

Auf dem aktuellen Dashboard sind kaum interaktive Funktionen vorhanden. Möglichkeiten zum Abbrechen, Zurückgehen oder Rückgängigmachen sind deshalb nicht erkennbar.

### Verbesserung
Bei der späteren Bearbeitung von Schülerdaten sollten Aktionen abgebrochen und Änderungen rückgängig gemacht werden können.

Beispielsweise könnte ein Formular neben „Speichern“ auch einen „Abbrechen“-Button besitzen.

---

## 4. Konsistenz und Standards

### Befund
Teilweise erfüllt.

Die vorhandenen Inhalte wirken strukturiert. Überschriften werden zur Unterteilung der verschiedenen Bereiche verwendet.

Da das Dashboard aktuell jedoch nur wenige Bedienelemente besitzt, kann die Konsistenz von Buttons, Formularen und Navigationselementen noch nicht vollständig bewertet werden.

### Verbesserung
Zukünftige Buttons, Formulare und Navigationselemente sollten einheitlich gestaltet und benannt werden.

Gleiche Funktionen sollten beispielsweise immer die gleichen Farben, Symbole und Bezeichnungen verwenden.

---

## 5. Fehlervermeidung

### Befund
Noch nicht erfüllt beziehungsweise umgesetzt.

Das aktuelle Dashboard zeigt hauptsächlich Informationen und bietet nur wenige Eingabemöglichkeiten. Maßnahmen zur Fehlervermeidung sind deshalb noch nicht erkennbar.

### Verbesserung
Bei zukünftigen Eingabefeldern sollten die eingegebenen Daten vor dem Speichern überprüft werden.

Beispielsweise sollte ein Schüler nicht gespeichert werden können, wenn kein Name oder keine Klasse eingegeben wurde.

---

## 6. Wiedererkennen statt Erinnern

### Befund
Teilweise erfüllt.

Die nächsten Entwicklungsschritte werden direkt auf dem Dashboard angezeigt. Dadurch muss sich der Nutzer diese Informationen nicht merken.

Technische Begriffe wie „useState“, „useEffect“, „POST“ oder „PUT“ setzen allerdings technisches Vorwissen voraus.

### Verbesserung
Funktionen sollten später über eindeutig beschriftete Buttons, Symbole und Menüs erreichbar sein. Dadurch müssen sich Nutzer möglichst wenig merken und können Funktionen direkt erkennen.

---

## 7. Flexibilität und Effizienz

### Befund
Noch nicht ausreichend bewertbar.

Das Dashboard besitzt aktuell nur wenige Funktionen. Eine Schülerverwaltung oder andere typische Arbeitsabläufe für Lehrkräfte sind noch nicht umgesetzt.

### Verbesserung
Häufig verwendete Funktionen wie Klassenverwaltung, Anwesenheiten und Kursbuch sollten später schnell über die Startseite oder eine Navigation erreichbar sein.

Dadurch können Lehrkräfte häufig benötigte Funktionen mit möglichst wenigen Klicks erreichen.

---

## 8. Ästhetisches und minimalistisches Design

### Befund
Erfüllt.

Das Dashboard ist übersichtlich gestaltet und die verschiedenen Themenbereiche sind klar voneinander getrennt.

Die Inhalte sind strukturiert angeordnet und die Darstellung wirkt nicht überladen.

### Verbesserung
Für die spätere Nutzung durch Lehrkräfte könnten technische Informationen wie „Axios“, „useState“ oder „Express-API“ ausgeblendet werden. Dadurch würde das Dashboard noch stärker auf die tatsächlich benötigten Informationen reduziert werden.

---

## 9. Hilfe bei Fehlern

### Befund
Nicht erkennbar.

Auf dem aktuellen Dashboard ist nicht ersichtlich, wie ein Fehler dargestellt wird, wenn beispielsweise das Backend nicht erreichbar ist.

### Verbesserung
Bei einem Verbindungsfehler sollte eine verständliche Fehlermeldung angezeigt werden.

Beispiel:

> Die Schülerdaten konnten nicht geladen werden. Bitte versuche es erneut.

Eine solche Meldung wäre für Lehrkräfte verständlicher als eine technische Fehlermeldung des Backends oder der API.

---

## 10. Hilfe und Dokumentation

### Befund
Teilweise erfüllt.

Für Entwickler sind bereits einige Hinweise vorhanden. Beispielsweise wird erklärt, dass die Browser-Konsole mit F12 geöffnet werden kann und wo sich die Datei `apiTest.ts` befindet.

Für die spätere Zielgruppe der Lehrkräfte gibt es jedoch noch keine eigentliche Hilfe oder Benutzerdokumentation.

### Verbesserung
Für Lehrkräfte könnten kurze Hilfetexte oder eine Hilfeseite angeboten werden.

Dort könnten beispielsweise die Funktionen Anwesenheit, Kursbuch und Schülerverwaltung erklärt werden.

---

# Fazit

Das aktuelle Dashboard des Classroom-Managers bietet bereits eine übersichtliche und strukturierte Grundlage. Besonders positiv ist, dass der Status der Fullstack-Verbindung deutlich angezeigt wird und die verschiedenen Bereiche klar voneinander getrennt sind.

Da sich das Projekt noch in einem frühen Entwicklungsstand befindet, sind viele Funktionen noch nicht vorhanden oder können noch nicht vollständig bewertet werden. Vor allem die Nutzerkontrolle, Fehlervermeidung und Fehlerbehandlung müssen mit der weiteren Entwicklung ergänzt werden.

Insgesamt bietet das Dashboard eine gute Ausgangsbasis. Für die spätere Nutzung durch Lehrkräfte sollten besonders eine verständliche Navigation und einfache Bedienmöglichkeiten ergänzt werden.