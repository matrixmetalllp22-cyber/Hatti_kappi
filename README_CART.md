# Cart / Menu components (added)

This repository now includes a small cart demo implemented with React Context and a few components. It's intentionally minimal so you can extend it for real ordering or persistence.

Files added:

- `src/components/CartContext.jsx` — Context + reducer for cart operations (add/remove/update/clear). Exposes `useCart()` hook.
- `src/components/ProductList.jsx` — Example product/menu list with "Add to cart" buttons.
- `src/components/Cart.jsx` — Floating cart UI showing items, quantities, and totals.

Quick start:

```powershell
Set-Location 'f:\hatti\Componets'
npm install
npm run dev
```

Notes:
- Product images reference `/images/...`. Place images into `public/images` or update the image paths in `src/components/ProductList.jsx`.
- This is a UI demo. Integrate a backend or localStorage if you want persistence across reloads.
