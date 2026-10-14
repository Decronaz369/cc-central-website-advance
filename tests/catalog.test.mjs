import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { durianProducts, fruitProducts } from "../src/data/products.ts";
import { INSTAGRAM, orderMessage } from "../src/data/site.ts";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

const additions = {
  Lokal: ["Pepaya", "Pamelo", "Duku", "Rambutan", "Alpukat", "Mangga Harummanis", "Mangga Indramayu", "Mangga Kiojay", "Mangga Manalagi", "Strawberry"],
  Impor: ["Pear Golden", "Pear Singo", "Pear Packkam", "Sunkist Navel", "Anggur Hijau", "Anggur Hitam", "Anggur Merah", "Delima", "Strawberry Impor", "Plum"],
};

test("all requested fruits are present under the correct origin", () => {
  for (const [origin, names] of Object.entries(additions)) {
    for (const name of names) {
      assert.equal(fruitProducts.find((p) => p.name === name)?.origin, origin, name);
    }
  }
  assert.equal(fruitProducts.length, 31, "existing fruits are retained alongside 20 additions");
});

test("four new durians belong to the Frozen filter", () => {
  for (const name of ["Frozen Musangking", "Frozen Bawor", "Frozen Medan", "Frozen Blackthorn"]) {
    assert.equal(durianProducts.find((p) => p.name === name)?.category, "Frozen", name);
  }
  assert.equal(durianProducts.length, 9);
  assert.equal(durianProducts.filter((p) => p.category === "Frozen").length, 5);
});

test("catalog IDs are unique and every product image exists locally", () => {
  const products = [...durianProducts, ...fruitProducts];
  assert.equal(new Set(products.map((p) => p.id)).size, products.length);
  for (const product of products) {
    assert.ok(existsSync(new URL(`public${product.image}`, root)), product.image);
    assert.ok(product.desc.length > 0, product.name);
    assert.ok(!Object.keys(product).some((key) => /price/i.test(key)), product.name);
  }
});

test("retired product, pricing and Instagram branding do not appear in source", () => {
  const walk = (path) => readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const file = join(path, entry.name);
    return entry.isDirectory() ? walk(file) : /\.tsx?$/.test(file) ? [file] : [];
  });
  for (const path of walk(fileURLToPath(new URL("src/", root)))) {
    const source = readFileSync(path, "utf8");
    assert.doesNotMatch(source, /pancake|duriancastle\.id|produk turunannya|Rp\s*\d|priceLabel|priceNote/i, path);
  }
  assert.doesNotMatch(orderMessage("Pepaya"), /harga/i);
});

test("Instagram buttons share the new direct profile link", () => {
  assert.equal(INSTAGRAM.handle, "@dccentrall");
  assert.equal(INSTAGRAM.url, "https://www.instagram.com/dccentrall/");
  for (const component of ["Footer", "HoursContact"]) {
    assert.match(read(`src/components/${component}.tsx`), /href=\{INSTAGRAM\.url\}/);
  }
});

test("business cards are full semantic links, without nested buttons", () => {
  const source = read("src/components/CorporateServices.tsx");
  assert.match(source, /<a\s+href="#portofolio"/);
  assert.match(source, /focus-visible:outline/);
  assert.doesNotMatch(source, /<button/);
});

test("mixed fruit hero and the illustrated orchard gallery are connected", () => {
  assert.match(read("src/components/DurianHero.tsx"), /src="\/images\/fruit-hero.webp"/);
  assert.match(read("src/App.tsx"), /<OrchardGallery\s*\/>/);
  const gallery = read("src/components/OrchardGallery.tsx");
  assert.match(gallery, /bukan dokumentasi kebun milik perusahaan/);
  for (const image of ["fruit-hero.webp", "orchard.jpg", "harvest.jpg"]) {
    assert.ok(existsSync(new URL(`public/images/${image}`, root)), image);
  }
});
