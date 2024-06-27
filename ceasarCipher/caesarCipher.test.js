import { caesarCipher } from "./caesarCipher";

describe("caesarCipher(str, shift)", () => {
    it("Should be defined", () => {
        expect(caesarCipher).toBeDefined();
    })

    it("Should return correct cipher", () => {
        const testCases = [
            {
                shift: 3,
                str: "abc",
                expected: "def",
            },
            {
                shift: 2,
                str: "abc",
                expected: "cde",
            },
            {
                shift: 3,
                str: "xyz",
                expected: "abc",
            },
            {
                shift: 3,
                str: "XYZ",
                expected: "ABC"
            },
            {
                shift: 0,
                str: "abc",
                expected: "abc"
            }
        ]

        testCases.forEach(test => {
            const actual = caesarCipher(test.str, test.shift);
            expect(actual).toEqual(test.expected);
        })
    })

    it("Should return correct cipher for big positive shift", () => {
        const testCases = [
            {
                shift: 29,
                str: "abc",
                expected: "def",
            },
            {
                shift: 28,
                str: "abc",
                expected: "cde",
            },
            {
                shift: 29,
                str: "XYZ",
                expected: "ABC"
            },
            {
                shift: 52,
                str: "XYZ",
                expected: "XYZ"
            }
        ]

        testCases.forEach(test => {
            const actual = caesarCipher(test.str, test.shift);
            expect(actual).toEqual(test.expected);
        })
    })

    it("Should return correct cipher for big negative shift", () => {
        const testCases = [
            {
                shift: -29,
                str: "abc",
                expected: "xyz",
            },
        ]

        testCases.forEach(test => {
            const actual = caesarCipher(test.str, test.shift);
            expect(actual).toEqual(test.expected);
        })
    })

    it("Should mantain original case", () => {
        const actual = caesarCipher("AbCd", 2);
        const expected = "CdEf";
        expect(actual).toEqual(expected);
    })

    it("Should ignore non-alphabetical characters", () => {
        const actual = caesarCipher("Hello, #1 World!", 3);
        const expected = "Khoor, #1 Zruog!";
        expect(actual).toEqual(expected);
    })
})