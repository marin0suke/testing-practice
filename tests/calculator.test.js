import { calculator } from "../src/calculator.js";

test('adds two numbers', () => {
    expect(calculator.add(2, 2)).toEqual(4);
})

test('adds two numbers', () => {
    expect(calculator.add(2, 100)).toEqual(102);
})

test('subtract 5 from 20 equals 15', () => {
    expect(calculator.subtract(20, 5)).toEqual(15);
})

test('subtract 50 from 200 equals 150', () => {
    expect(calculator.subtract(200, 50)).toEqual(150);
})