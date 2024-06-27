import { capitalize } from "./capitalize";

describe("capitalize()", () => {
    it("should exist", () => {
        expect(capitalize).toBeDefined();
    })

    it("Should take a string and capitalize", function() {
        const testCases = [
            {
                input: "capitalize",
                expected: "Capitalize"
            },
            {
                input: "hello world",
                expected: "Hello world"
            }
        ]

        testCases.forEach(test => {
            let actual = capitalize(test.input);
            expect(actual).toBe(test.expected);
        })
    })

})

