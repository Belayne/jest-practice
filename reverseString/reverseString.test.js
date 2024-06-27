import {reverseString} from "./reverseString";

describe("reverseString()", () => {
    it("Should be defined", () => {
        expect(reverseString).toBeDefined();
    })

    it("Should reverse a string", () => {
        const testCases = [
            {
                input: "Hello world",
                expected: "dlrow olleH"
            },
            {
                input: "LOO0='LL!",
                expected: "!LL'=0OOL"
            }
        ]
        testCases.forEach(c => {
            let expected = c.expected;
            let actual = reverseString(c.input);
            expect(actual).toBe(expected);
        })
    })
})

