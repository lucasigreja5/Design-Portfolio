# Project Artwork Assets (`assets/projects/`)

Each of the 9 projects currently renders a bespoke, art-directed CSS/SVG cover visual out of the box. Whenever you want to display your exported Behance or Figma mockups instead:

1. Export each project cover at a **`16:10` landscape ratio** (recommended `1600×1000` `.webp` or `.png`, `< 400 KB`).
2. Save the image inside this folder (`assets/projects/`) using the suggested filename below.
3. Open [`../../js/data/projects.js`](../../js/data/projects.js) and set the project's `image` field (for example: `image: 'assets/projects/sonar-bsb.webp'`).

When `image` is non-empty, `portfolio.js` automatically swaps the bespoke SVG/CSS art canvas for your exported `<img>` while preserving the sharp `0px` frame, `scale(1.03)` hover, and `VIEW CASE` overlay.

| Index | Project ID | Suggested Filename | Behance Source |
| :--- | :--- | :--- | :--- |
| `01` | `sonar-bsb` | `sonar-bsb.webp` | [UI/UX Design - Sonar BSB](https://www.behance.net/gallery/253500979/UIUX-Design-Sonar-BSB) |
| `02` | `olivias-coffee` | `olivias-coffee.webp` | [UI/UX Design - Olivia's Coffee Beans](https://www.behance.net/gallery/249639151/UIUX-Design-Olivias-Coffee-Beans) |
| `03` | `gdf-undf` | `gdf-undf.webp` | [GDF - Logomarca UnDF](https://www.behance.net/gallery/126763223/GDF-Logomarca-Universidade-do-Distrito-Federal-UnDF) |
| `04` | `gdf-economia` | `gdf-economia.webp` | [GDF - Marca Secretaria de Economia](https://www.behance.net/gallery/116386429/GDF-Marca-Secretaria-de-Economia) |
| `05` | `gdf-clube` | `gdf-clube.webp` | [GDF - Clube de Desconto do Servidor](https://www.behance.net/gallery/116385123/GDF-Clube-de-Desconto-do-Servidor) |
| `06` | `gdf-fabrica` | `gdf-fabrica.webp` | [GDF - Nova Marca para a Fábrica Social](https://www.behance.net/gallery/116382357/GDF-Nova-Marca-para-a-Fabrica-Social) |
| `07` | `volvo-xc60` | `volvo-xc60.webp` | [Champion Volvo - Novo XC60](https://www.behance.net/gallery/116386015/Champion-Volvo-Novo-XC60) |
| `08` | `volvo-selekt` | `volvo-selekt.webp` | [Champion Volvo - Brasília Design](https://www.behance.net/gallery/116384255/Champion-Volvo-Brasilia-Design) |
| `09` | `caubr-editorial` | `caubr-editorial.webp` | [Informes Publicitários - CAU/BR](https://www.behance.net/gallery/28966701/Informes-Publicitarios-CAUBR) |
