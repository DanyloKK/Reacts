import {calculateSquare} from "../calculateSquare.js";

describe("calculateSquare", () => {
    test("check 9 to be 81", () => {
        expect(calculateSquare(9)).toBe(81);
    })
    test("check 4 to be 16", () => {
        expect(calculateSquare(4)).toBe(16);
    })
})