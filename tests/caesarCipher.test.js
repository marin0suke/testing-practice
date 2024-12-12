import { caesarCipher } from "../src/caesarCipher.js";

describe("caesar cipher function with shift input", () => {
    test("hello returns khoor (lowercase)", () => {
        expect(caesarCipher("hello", 3)).toBe("khoor");
    }),

    test("cipher wraps around alphabet eg) x => a", () => {
        expect(caesarCipher("world", 5)).toBe("btwqi");
    }),

    test("handles strings with spaces", () => {
        expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
    }),

    test("preserves casing", () => {
        expect(caesarCipher("Hello World", 5)).toBe("Mjqqt Btwqi");
    })
})