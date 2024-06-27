import { analyzeArray } from "./anylizeArray"

describe("analyzeArray()", () => {
    it("Should be defined", () => {
        expect(analyzeArray).toBeDefined();
    })

    it("Should return an object with average, min, max, length properties", () => {
        const properties = ["min", "max", "average", "length"];

        properties.forEach(prop => {
            expect(analyzeArray([1,2,3])).toHaveProperty(prop);
        })
    })

    it("min should be the minimum value of the array", () => {
        const testCases = [
            {
                input: [1, 2, 3],
                expected: 1
            },
            {
                input: [4, 5, 6],
                expected: 4
            },
            {
                input: [-1, 2, 3, 4, 5],
                expected: -1
            }
        ]

        testCases.forEach(test => {
            const actual = analyzeArray(test.input).min;
            expect(actual).toEqual(test.expected);

        })
    })

    it("max should be the maximum value of the array", () => {
        const testCases = [
            {
                input: [1, 2, 3],
                expected: 3
            },
            {
                input: [6, 5, 4],
                expected: 6
            },
            {
                input: [-1, 2, 3, 4, 5],
                expected: 5
            }
        ]

        testCases.forEach(test => {
            const actual = analyzeArray(test.input).max;
            expect(actual).toEqual(test.expected);

        })
    })

    it("average should be the average value of the array", () => {
        const testCases = [
            {
                input: [1, 2, 3],
                expected: 2
            },
            {
                input: [6, 5, 4],
                expected: 5
            },
            {
                input: [-1, 2, 3, 4, 5],
                expected: 2.6
            }
        ]

        testCases.forEach(test => {
            const actual = analyzeArray(test.input).average;
            expect(actual).toEqual(test.expected);

        })
    })

    it("length should be the length of the array", () => {
        const testCases = [
            {
                input: [1, 2, 3],
                expected: 3
            },
            {
                input: [6, 5, 4, 5, 2, 1],
                expected: 6
            },
            {
                input: [-1, 2, 3, 4, 5],
                expected: 5
            }
        ]

        testCases.forEach(test => {
            const actual = analyzeArray(test.input).length;
            expect(actual).toEqual(test.expected);

        })
    })
})