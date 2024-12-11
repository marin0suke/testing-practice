import { capitalise } from "../src/capitalise.js";

test('first letter is capitalised', () => {
    expect(capitalise("hello")).toBe("Hello");
})
