export const calculator = {
    add: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") throw new Error;
        return a + b;
    },
    subtract: (a, b) => {
        if (typeof a !== "number" || typeof b !== "number") throw new Error;
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};