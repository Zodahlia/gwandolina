# Gwandolina

Statische Website fur Gwandolina (de-AT), umgesetzt mit reinem HTML, CSS und JavaScript.

## Projektstruktur

```
gwandolina/
|- index.html
|- boutique.html
|- kleidersammlung.html
|- jobs.html
|- kontakt.html
|- impressum.html
|- datenschutz.html
|- css/
|  |- style.css
|- js/
|  |- main.js
|- images/
|  |- .gitkeep
|- Secondhand Boutiqe info.txt
|- README.md
```

## Lokal starten

Die Dateien konnen direkt im Browser geoffnet werden.
Alternativ mit lokalem Server:

```bash
python -m http.server 8000
```

Danach im Browser offnen: http://localhost:8000

## Deployment mit GitHub Pages

1. Repository Settings -> Pages
2. Source: Deploy from a branch
3. Branch: main, Folder: /(root)
4. Nach dem Build ist die Seite unter der GitHub-Pages-URL verfugbar
