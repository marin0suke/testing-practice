import { calculator } from "../src/calculator.js";

test('adds two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4);
})

test('adds two numbers', () => {
    expect(calculator.add(2, 100)).toBe(102);
})

