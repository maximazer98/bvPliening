# Website Burschenverein Pliening e.V.

Neue Website für bv-pliening.de, gebaut mit [Astro](https://astro.build) als
schlanke, statische Seite. Ersetzt die bisherige, veraltete WordPress-Installation.

## Lokal testen

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder neuer).

```bash
npm install
npm run dev
```

Danach ist die Seite unter `http://localhost:4321` erreichbar. Änderungen an
den Dateien werden sofort im Browser übernommen.

## Inhalte ändern

Alle Seiten liegen unter `src/pages/`, in normalem HTML-ähnlichem Astro-Format.
Texte lassen sich direkt in den `.astro`-Dateien anpassen, z. B.:

- Startseite: `src/pages/index.astro`
- Zu Verleihen: `src/pages/zu-verleihen/`
- Die Vorstandschaft: `src/pages/vorstandschaft.astro`
- Links: `src/pages/links.astro`
- Impressum & Datenschutz: `src/pages/impressum.astro`

Das gemeinsame Grundgerüst (Kopfzeile, Navigation, Fußzeile) liegt in
`src/layouts/Layout.astro`, das Farbschema/Design in `src/styles/global.css`.

### Galerie-Fotos ergänzen

Unter `src/pages/bilder/` gibt es für jedes Jahr eine Seite (z. B. `2025.astro`).
Dort steht aktuell ein Platzhalter ("Fotos folgen"), weil uns die Original-Fotos
noch nicht vorliegen. Sobald Fotos vom Verein da sind:

1. Bilddateien in `public/bilder/<jahr>/` ablegen (Ordner selbst anlegen)
2. In der jeweiligen `.astro`-Datei den Platzhalter durch `<img>`-Tags bzw. eine
   Galerie-Auflistung ersetzen, die auf die Dateien in `public/bilder/<jahr>/`
   verweist

## Deployment

Die Seite wird automatisch über GitHub Actions gebaut und auf **GitHub Pages**
veröffentlicht (`.github/workflows/deploy.yml`), sobald auf `main` gepusht wird.

Damit das funktioniert, muss im GitHub-Repo unter **Settings → Pages** als
Quelle "GitHub Actions" ausgewählt sein.

### Eigene Domain (bv-pliening.de)

Die Datei `public/CNAME` enthält bereits `bv-pliening.de`, damit GitHub Pages
die eigene Domain verwendet. Wichtig: Die Domain muss dafür **nicht**
umgezogen oder neu registriert werden — sie bleibt beim aktuellen Registrar,
nur die DNS-Einträge werden umgestellt, damit sie auf GitHub Pages statt auf
den alten Server zeigt (siehe auch die
[GitHub-Pages-Doku zu Custom Domains](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).

Wo genau man das einträgt, hängt vom aktuellen Provider ab (steht auf der
Hosting-Rechnung, oder per WHOIS-Abfrage auf [webwhois.denic.de](https://webwhois.denic.de)
herausfinden). Dort im DNS-Bereich der Domain folgende Einträge setzen:

**Für die nackte Domain `bv-pliening.de`** — vier `A`-Records auf:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Für `www.bv-pliening.de`** (optional) — ein `CNAME`-Record auf:

```
<github-benutzername>.github.io
```

Nach der Umstellung kann die DNS-Änderung bis zu 24–48 Stunden brauchen, bis
sie überall wirkt. Am besten erst prüfen, dass die neue Seite über die Domain
korrekt erreichbar ist, **bevor** der alte Hosting-Vertrag gekündigt wird.

## Nächste Schritte für den echten Umzug (nicht-technisch)

- [ ] Fotos für die Galerie (2014, 2022–2026) vom Verein einsammeln
- [ ] DNS von bv-pliening.de auf GitHub Pages umstellen
- [ ] Alten WordPress-Hosting-Vertrag kündigen, sobald die neue Seite live und
      geprüft ist
- [ ] Mit dem Verein die Konditionen für die laufende Pflege der Seite klären
