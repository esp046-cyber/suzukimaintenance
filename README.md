# Suzuki Care 2026 (PWA)
Zero sign-in maintenance schedules, part numbers, fluid life, cost estimates, VIN decode/scan and service alerts. Static files only; works offline after first load.

## Run locally
`python3 -m http.server 8080` then open http://localhost:8080 (service workers need localhost or HTTPS).

## Deploy to GitHub Pages
1. Create a repo and push this folder's contents to `main`.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<user>.github.io/<repo>/`. All paths are relative, so sub-path hosting works.

## Data
`js/data.js` is a normalised store (Maps plus a model→task index). Use `importBulk({models,parts,tasks})` to load thousands of rows from JSON. **Part numbers and prices are placeholders (`SAMPLE-*`); replace with verified Suzuki catalogue data.**

## Verified catalogue
Part numbers shipped here are `SAMPLE-*`. Copy `catalog-template.json`, fill in verified Suzuki numbers/prices (same ids overwrite samples; new `models`/`tasks` entries add to them), then use Settings → Import verified parts catalogue. It is saved in the browser.

## Known gaps
- Parts ordering opens the shop URL set in Settings; live inventory/delivery needs a vendor API and backend.
- Server push needs your own VAPID backend: paste the public key in Settings, copy the subscription JSON to your server. Local overdue alerts work without it.
- VIN decode uses NHTSA vPIC (best for North American VINs); many India/Asia-market VINs may not resolve. Barcode scanning needs BarcodeDetector (Chromium/Android).
- PNG icons, splash and OG image are generated placeholders; swap in official brand art.
