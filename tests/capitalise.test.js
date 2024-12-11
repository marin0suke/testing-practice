import { capitalise } from "../src/capitalise.js";

test('first letter of hello is capitalised', () => {
    expect(capitalise("hello")).toBe("Hello");
})

test('first letter of world is capitalised', () => {
    expect(capitalise("world")).toBe("World");
})

test('empty string returns an empty string', () => {
    expect(capitalise("")).toBe("");
})

test('does not change a string that is already capitalised', () => {
    expect(capitalise("Worm")).toBe("Worm");
})

test('capitalises single character', () => {
    expect(capitalise("c")).toBe("C");
})