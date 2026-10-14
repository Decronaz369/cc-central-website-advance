# Website imagery

The October 2026 catalog revision preserves the existing images and adds the
following local assets (no runtime external image dependencies):

- `public/images/fruit-hero.webp`: AI-generated mixed-fruit arrangement, with the
  background removed and compressed for the hero.
- `public/images/orchard.jpg` and `harvest.jpg`: AI-generated orchard and harvest
  illustrations. These are **not photographs of company-owned farms or actual
  company harvests**. `OrchardGallery.tsx` explicitly labels them as illustrations.
  Replace these paths with client-approved photographs when available and update
  the alt text/captions accordingly.
- `public/images/fruits/{alpukat,duku,pamelo,pear,pepaya,rambutan,strawberry}.jpg`:
  AI-generated representative fruit imagery, optimized for catalog cards.
- `public/images/fruits/{anggur-hijau,anggur-hitam}.jpg`: color-adjusted illustrations
  derived from the repository's existing grape image.
- `public/images/fruits/{delima,plum}.svg`: locally authored vector illustrations.

Mango varieties, pear varieties, local/imported strawberries, and some frozen
variants share representative imagery; they are not authenticated photographs of
those specific varieties, origins, packaging, or current stock. Both catalogs
include an illustration note. Client-supplied product photos can replace these
assets independently through `src/data/products.ts`.
