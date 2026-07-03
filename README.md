# Knock, Knock

Minimalistische Tablet-Präsentation für interaktive Smartphone-Prototypen aus Figma.

## Öffnen

Die Anwendung läuft als statische Website. Im Projektordner kann ein lokaler Server gestartet werden und dann diese Adresse geöffnet werden:

```sh
python3 -m http.server 8000
```

```text
http://127.0.0.1:8000/
```

## Weitere Prototypen ergänzen

1. Figma- oder ProtoPie-Prototyp veröffentlichen oder teilen.
2. Den Link in `script.js` bei `url` eintragen.
3. Bei `platform` entweder `figma` oder `protopie` setzen.
4. Falls eine lokale `.fig`-Datei zusätzlich angeboten werden soll, den Dateinamen bei `file` setzen.

Die lokalen `.fig`-Dateien sind Archivdateien, aber kein direkt im Browser ausführbares Prototyp-Format. Damit die Prototypen ausprobiert werden können, braucht die Präsentationsanwendung echte Figma-Share- oder Prototype-Links.

ProtoPie-Cloud-Links können ebenfalls direkt als iframe eingebettet werden. In ProtoPie Cloud lassen sich über die View Options unter anderem Scale to Fit, ProtoPie UI und Device Frame einstellen.

Die App normalisiert Figma-Links automatisch für die Tablet-Präsentation:

- `scaling=contain`, damit der Prototyp in den Ausschnitt passt
- `device-frame=false`, damit Figma keinen zweiten Smartphone-Rahmen in der App rendert
- `viewport-controls=false`, damit der Prototyp nicht verschoben oder gezoomt werden kann
- `hide-ui=1` und `footer=false`, damit Figma-Navigation und Footer ausgeblendet werden
