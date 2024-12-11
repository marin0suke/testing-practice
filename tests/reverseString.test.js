import { reverseString } from "../src/reverseString.js";

test('reverses the word Hello', () => {
    expect(reverseString("Hello")).toBe("olleH");
})

test('reverses the word World', () => {
    expect(reverseString("World")).toBe("dlroW");
})

test('handles spaces between words', () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
})

test('empty string returns an empty string', () => {
    expect(reverseString("")).toBe("");
})

test('reverses single character', () => {
    expect(reverseString("c")).toBe("c");
})

test('handles special characters', () => {
    expect(reverseString("!@#$%^&*()")).toBe(")(*&^%$#@!");
})

test('handles only spaces', () => {
    expect(reverseString("     ")).toBe("     ");
})

test('handles very long strings', () => {
    const longString = "a".repeat(10000);
    const reversedLongString = "a".repeat(10000);
    expect(reverseString(longString)).toBe(reversedLongString);
})