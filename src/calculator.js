export const calculator = {
    validateInput(a, b) {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Both inputs must be numbers");
        }
    },

    add(a, b) {
        this.validateInput(a, b);
        return a + b;
    },

    subtract(a, b) {
        this.validateInput(a, b);
        return a - b;
    },

    multiply(a, b) {
        this.validateInput(a, b);
        return a * b;
    },

    divide(a, b) {
        this.validateInput(a, b);
        return a / b;
    }
};