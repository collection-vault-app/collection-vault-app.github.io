# Collection Vault v0.9.9.8.8 — bundled reference library

Upload all nine files at the repository root, replacing existing files. Do not upload the original archive. Wait for GitHub Pages deployment, close/reopen online, unlock the vault and choose Collection > Browse game catalog. The bundled library loads on first visit. To use offline, lock the vault, prepare offline access in settings and verify airplane-mode operation. Existing encrypted DB is unchanged. Do not delete site data.

## Reference data
Data: Title Screen (https://titlescreen.org), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), build 2026.10.09. Modified: selected supported platforms, filtered release types, joined missing developer/genre/player fields from works, normalized and bounded text, serialized as compact JSON. Includes 106,108 regional records across 29 platforms, plus existing starter entries. The source is not physical-only; serials are not UPCs; no source gameplay descriptions or film catalog. Missing data remains blank. PS5, Xbox Series X, Switch 2 and PSP UMD Video remain starter-only.

No source ZIP or ROM files are distributed. The reference JSON SHA-256 is verified in the app, and all public shell assets are pinned by the service worker. Original archive CRC checks passed; publisher SHA256SUMS was not supplied or accessible.

## Source field coverage
- id: 106,108
- platform: 106,108
- title: 106,108
- alias: 5,757
- region: 101,422
- year: 96,359
- genre: 93,884
- publisher: 95,893
- developer: 95,358
- serial: 59,206
- players: 82,681
- media: 106,108
- dateBasis: 96,359
- franchise: 12,221
- licensed: 106,108

## Release rows by platform
- Atari 2600: 754
- Dreamcast: 1,273
- Game Boy: 2,098
- Game Boy Advance: 3,083
- Game Boy Color: 2,152
- Game Gear: 693
- GameCube: 1,788
- Genesis / Mega Drive: 2,337
- Master System: 1,005
- NES: 4,517
- Nintendo 3DS: 2,731
- Nintendo 64: 894
- Nintendo DS: 6,620
- Nintendo Switch: 4,463
- PSP: 4,234
- PlayStation: 8,537
- PlayStation 2: 10,146
- PlayStation 3: 7,071
- PlayStation 4: 9,015
- PlayStation Vita: 3,506
- Sega 32X: 66
- Sega CD: 389
- Sega Saturn: 1,714
- Super Nintendo (SNES): 3,067
- Wii: 5,891
- Wii U: 2,762
- Xbox: 2,643
- Xbox 360: 4,628
- Xbox One: 8,031

## Verification
Full reference file verified and loaded through the app loader in Node with simulated fetch/DOM; modified data rejected. Search tested for Pokémon Gold, Madden NFL 09, Mario Kart 7 and Zelda. Script syntax and all pinned SHA-256 hashes checked. Browser navigation blocked by environment; encrypted save, live GitHub deployment, iPhone memory use and offline behavior require device testing.

## Barcode reference (new)
Data: PLAYBACK Archive (https://playback-archive.com/data-sources), derived open barcode subset from Nudger/Open4Good (https://nudger.fr/), under the Open Database License 1.0 (https://opendatacommons.org/licenses/odbl/1-0/). Modified by validating GS1 checksums, preserving original columns and converting CSV to separate JSON. The separate barcode-reference.json database is provided under ODbL 1.0; it is not relicensed as Title Screen data. Source URLs retained in the JSON. The original uploaded CSV contained 998 rows; 998 accepted, 0 rejected. No Redump data included. Runtime matching enriches candidates with unanimous title-level facts only; region and exact edition must be confirmed. No inventory format changes. Scan > take/import photo > Find game from last scanned barcode > select result > Save selected copies. For unknown codes use title search. Source CSV does not cover most older systems. Device behavior remains untested.

Loader tests: full 106,108 release records and 998 barcode candidates loaded using actual loader functions with simulated DOM/fetch in Node. Modified barcode data rejected. UPC/EAN normalization, exact match and no-match tested. 706 barcode records matched normalized title/platform candidates; unanimous genre available for 661, publisher for 693, developer for 700. Browser/iPhone camera and encrypted save not tested in this build.

## v0.9.9.8.8 — text and product-code identification
Scan > Identify by product code / Scan Text, or Collection > Browse game catalog > Identify by product code or text. On iPhone use the system Scan Text input menu if offered, or copy Live Text from Photos. Paste into the field, optionally select platform, Find matches, confirm release and save. Native browser TextDetector can process photos only where implemented; no Tesseract.js assets are bundled because retrieval was blocked. No promise of direct iPhone in-app photo OCR. No new remote service or security-policy relaxation. Input and candidate filters are cleared on leaving the catalog or locking. Existing encrypted save path unchanged. All nine files replace repository root files.
