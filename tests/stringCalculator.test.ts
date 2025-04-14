import { add } from "../src/stringCalculator";
test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
  
  test('returns number for single input', () => {
    expect(add("1")).toBe(1);
  });
  
  test('returns sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });
  
  test('handles unknown amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  
  test('handles newline as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  
  test('handles custom single-char delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  test('throws on negative number', () => {
    expect(() => add("1,-2")).toThrow("Negatives not allowed: -2");
  });
  
  test('throws on multiple negative numbers', () => {
    expect(() => add("-1,-2,3")).toThrow("Negatives not allowed: -1, -2");
  });
  
  test('handles custom multi-char delimiter', () => {
    expect(add("//[***]\n1[***]2[***]3")).toBe(6);
  });
  