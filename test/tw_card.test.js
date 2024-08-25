import { expect, test } from "vitest";
import { validateIDNumber } from "../src/tw_card.js";

test("Taiwan ID card verification", () => {
  expect(validateIDNumber("A123456789")).toBe(true);
  expect(validateIDNumber("A12345678")).toBe(false);
  expect(validateIDNumber("A1234567890")).toBe(false);
  expect(validateIDNumber("B123456789")).toBe(false);
  expect(validateIDNumber("C123456789")).toBe(false);
  expect(validateIDNumber("D123456789")).toBe(false);
  expect(validateIDNumber("E123456789")).toBe(false);
  expect(validateIDNumber("F123456789")).toBe(false);
  expect(validateIDNumber("G123456789")).toBe(false);
});
