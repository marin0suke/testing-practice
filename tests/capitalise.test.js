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

test('capitalised string will return capitalised string', () => {
    expect(capitalise("Worm")).toBe("Worm");
})

test('single char will be capitalised', () => {
    expect(capitalise("c")).toBe("C");
})