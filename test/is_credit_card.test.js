import { expect, it } from "vitest";
import isCreditCard from "../src/is_credit_card.js";

it.each`
    card                          | provider        | expected
    ${"375556917985515"}          | ${"amex"}       | ${true}
    ${"36050234196908"}           | ${"dinersclub"} | ${true}
    ${"6283875070985593"}         | ${"UnionPay"}   | ${true}
    ${"5398228707871527"}         | ${"mastercard"} | ${true}
    ${"4716461583322103"}         | ${"visa"}       | ${true}
    ${"4716-2210-5188-5662"}      | ${undefined}    | ${true}
    ${"4929 7226 5379 7141"}      | ${undefined}    | ${true}
    ${"test"}                     | ${undefined}    | ${false}
    ${"6283875070985593"}         | ${"mastercard"} | ${false}
    ${"375556917985515"}          | ${"abc"}        | ${false}
    ${"899999996234917882863855"} | ${undefined}    | ${false}
    ${"NaN6234917882863855"}      | ${undefined}    | ${false}
`("信用卡號: $card 提供商: $provider 結果應該要是 $expected", ({ card, provider, expected }) => {
    expect(isCreditCard(card, { provider })).toBe(expected);
});
