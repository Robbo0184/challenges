import exp from 'constants';
import {add, subtract, multiply, divide} from './index.js'

test("Adds together the two numbers passed in", () => {
    const result = add(1, 4);
    expect(result).toBe(5)
    const secondResult = add(6, -8)
    expect(secondResult).toBeLessThan(0)
    const thirdResult = add(0.1, 0.2)
    expect(thirdResult).toBeCloseTo(0.3)
})

test("Subtracts second number argument from first", () => {
    const result = subtract(5,4)
    expect(result).toBe(1)
    const secondResult = subtract(6, 7)
    expect(secondResult).toBeLessThan(0)
})

test("Multiplies two passed in numbers", () => {
    const result = multiply(2, 5)
    expect(result).toBe(10)
    const secondResult = multiply(-1, 5)
    expect(secondResult).toBeLessThan(0)
    const thirdResult = multiply(1, -5)
    expect(thirdResult).toBeLessThan(0)
    const fourthResult = multiply(-1, -5)
    expect(fourthResult).toBeGreaterThan(0)
})

test("If second number passed in is 0 returns you should not do this, otherwise divides a by b", () => {
    const result = divide(2, 0)
    expect(result).toBe("You should not do this!")
    const result2 = divide(6, 3)
    expect(result2).toBe(2)
})