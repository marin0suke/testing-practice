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

test('multiply two numbers', () => {
    expect(calculator.multiply(20, 50)).toEqual(1000);
})

test('multiply two numbers', () => {
    expect(calculator.multiply(5, 5)).toEqual(25);
})

test('divide left operand by right operand', () => {
    expect(calculator.divide(100, 10)).toEqual(10);
})

test('divide left operand by right operand', () => {
    expect(calculator.divide(44, 4)).toEqual(11);
})

test('divide left operand by right operand', () => {
    expect(calculator.divide(0, 1)).toEqual(0);
})

test('divide left operand by right operand', () => {
    expect(calculator.divide(-10, 2)).toEqual(-5);
})

test('throws error when input is non-numeric', () => {
    expect(() => calculator.add(10, "five")).toThrow(Error);
})

test('throws error when input is non-numeric', () => {
    expect(() => calculator.subtract(10, "five")).toThrow(Error);
})

test('throws error when input is non-numeric', () => {
    expect(() => calculator.multiply(10, "five")).toThrow(Error);
})