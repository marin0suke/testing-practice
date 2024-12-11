import { reverseString } from "../src/reverseString.js";

test('reverses the word Hello', () => {
    expect(reverseString("Hello")).toBe("olleH");
})

