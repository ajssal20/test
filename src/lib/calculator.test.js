import { multiplyer, adder, subtractor, devider } from "./calculator";
import { expect, test } from "vitest";

test('Multiplikations Test', () => {
    let result = multiplyer(4,3);
    expect(result).toEqual(12);
});

test('Additions Test', () => {
    let result = adder(4,3);
    expect(result).toEqual(7);
});

test('Subtractor Test', () => {
    let result = subtractor(4,3);
    expect(result).toEqual(1);
});

test('Devider Test', () => {
    let result = devider(12,3);
    expect(result).toEqual(4);
});