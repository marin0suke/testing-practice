import { analyseArray } from "../src/analyseArray.js";

test("returns array length", () => {
    const result = analyseArray([1,8,3,4,2,6])
    expect(result.length).toEqual(6);
})

test("returns array min value", () => {
    const result = analyseArray([1,8,3,4,2,6])
    expect(result.min).toEqual(1);
})

test("returns array max value", () => {
    const result = analyseArray([1,8,3,4,2,6])
    expect(result.max).toEqual(8);
})

test("returns array average value", () => {
    const result = analyseArray([1,8,3,4,2,6])
    expect(result.average).toEqual(4);
})