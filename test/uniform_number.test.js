import { expect, test } from "vitest";
import { validateTaxID } from "../src/uniform_number";

test("Taiwan phone verification", () => {
  expect(validateTaxID("04595257")).toBe(true);
  expect(validateTaxID("+886123456789")).toBe(false);
  expect(validateTaxID("+$(@%$*@#_!*")).toBe(false);
  expect(validateTaxID("abcdefg")).toBe(false);
  expect(validateTaxID(undefined)).toBe(false);
  expect(validateTaxID(null)).toBe(false);
});
