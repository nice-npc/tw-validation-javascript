import { expect, test } from "vitest";
import { validateInternationalPhoneNumber } from "../src/phone.js";

test("Taiwan phone verification", () => {
  expect(validateInternationalPhoneNumber("+886912345678")).toBe(true);
  expect(validateInternationalPhoneNumber("+886123456789")).toBe(true);
  expect(validateInternationalPhoneNumber("+886-123-456-789")).toBe(false);
  expect(validateInternationalPhoneNumber("+8861234567890")).toBe(false);
  expect(validateInternationalPhoneNumber("+88691234567890")).toBe(false);
  expect(validateInternationalPhoneNumber("+886912345678901")).toBe(false);
  expect(validateInternationalPhoneNumber("+8869123456789012")).toBe(false);
  expect(validateInternationalPhoneNumber("+8869123456789")).toBe(false);
});
