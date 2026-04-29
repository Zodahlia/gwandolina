# Gwandolina
**Secondhand but with class!**

Statisk nettside for bruktklærbutikken Gwandolina. Ingen rammeverk, ingen build-steg – ren HTML, CSS og JavaScript.

## Prosjektstruktur

```
gwandolina/
├── index.html          # Hovedside med alle seksjoner
├── css/
│   └── style.css       # Styling (mobilfirst, CSS custom properties)
├── js/
│   └── main.js         # Navigasjon, scroll-highlight, årstall i footer
├── images/             # Legg til bilder her
└── README.md
```

## Kjøre lokalt

Åpne `index.html` direkte i nettleseren, eller bruk en lokal server:

```bash
# Python (innebygd)
python -m http.server 8000
```

Åpne så [http://localhost:8000](http://localhost:8000).

## Deploy – GitHub Pages

1. Gå til **Settings → Pages** i repoet
2. Velg **Source: Deploy from a branch**
3. Velg `main` branch og `/ (root)`
4. Siden er tilgjengelig på `https://<bruker>.github.io/gwandolina/`

## TODO – legges til når info er klar

- [ ] Ekte herosbilde
- [ ] Bilde av butikken (Om-seksjonen)
- [ ] Adresse og åpningstider
- [ ] E-post og telefonnummer
- [ ] Google Maps embed
- [ ] Instagram-profillenke og ekte bilder
