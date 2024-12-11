import { capitalise } from "../src/capitalise.js";

test('first letter of hello is capitalised', () => {
    expect(capitalise("hello")).toBe("Hello");
})

test('first letter of world is capitalised', () => {
    expect(capitalise("world")).toBe("World");
})