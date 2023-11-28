# GNOME Shell Extension Starter
A template for creating GNOME Shell extensions using TypeScript.

This template uses [@girs/gnome-shell](https://github.com/gjsify/gnome-shell/tree/main/packages/gnome-shell) to provide the types,
[Rollup](https://rollupjs.org/guide/en/) to bundle the extension,
and [Biomejs](https://biomejs.dev) for linting and formatting.

All output files are human readable including node modules, no minification is done.

## Getting Started
Clone repository and install dependencies:
```bash
git clone https://github.com/SamyzKhalil/gnome-shell-extension-ts-template
cd gnome-shell-extension-ts-template
pnpm install
```
## Scripts
- `pnpm build`: Bundle the `src` to `out/dist` directory.
- `pnpm pack`: Zip `out/dist` using `gnome-extension` to `out` directory.
- `pnpm deploy`: Build and pack the extension, then install it using `gnome-extension`.
- `pnpm format`: Format code using Biomejs.
- `pnpm lint`: Lint code using Biomejs.

## Accreditation
This template is "inspired" by https://github.com/gTile/gTile