import {Calculator} from "./Calculator";

describe("Calculator", () => {
    it("Should be defined", () => {
        expect(Calculator).toBeDefined();
    })

    it("Should have the operations Add, Subtract, Multiply, Divide",() => {
        const operations = ["add", "subtract", "multiply", "divide"];

        operations.forEach(op => {
            expect(Calculator[op]).toBeDefined();
        })
    })

    it("Add should return the sum of two numbers", () => {
        const expected = 2;
        const actual = Calculator.add(1,1);

        expect(actual).toBe(expected);
    })

    it("Subtract should return the difference between two numbers", () => {
        const expected = 10;
        const actual = Calculator.subtract(20,10);

        expect(actual).toBe(expected);
    })

    it("Multiply should return the product of two numbers", () => {
        const expected = 48;
        const actual = Calculator.multiply(6, 8);

        expect(actual).toBe(expected);
    })

    it("Divide should return the quotient of two numbers", () => {
        const testCases = [
            {
                dividend: 20,
                divisor: 10,
                expected: 2
            },
            {
                dividend: 1,
                divisor: 2,
                expected: 0.5
            },
            {
                dividend: 2,
                divisor: 3,
                expected: 2/3
            }
        ]

        testCases.forEach(c => {
            const actual = Calculator.divide(c.dividend, c.divisor);
            expect(actual).toBe(c.expected);
        })
    })

    it("Should check division by zero", () => {
        expect(() => {Calculator.divide(10, 0)}).toThrow();
    })
})