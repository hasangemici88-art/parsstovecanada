import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Pars Stove storefront", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Pars Stove Canada \| High-Efficiency Pellet Stoves<\/title>/i);
  assert.match(html, /Pre-order now\./);
  assert.match(html, /Canadian favourites/);
  assert.match(html, /Pars Classic Pellet Stove/);
  assert.match(html, /Frequently asked/);
  assert.match(html, /questions\./);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps hero and product media consistent and accessible", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /image: "\/pars-factory-line\.jpeg"/);
  assert.match(page, /index === activeSlide &&/);
  assert.match(page, /aria-pressed=\{src === activeImg\}/);
  assert.match(css, /\.product-image\{height:auto;aspect-ratio:4\/3/);
  assert.match(css, /\.product-thumbs button:focus-visible/);
});
