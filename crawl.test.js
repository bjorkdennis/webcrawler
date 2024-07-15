import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

test('normalize a url', () => {
    expect(normalizeURL("potato")).toBe(null);
});