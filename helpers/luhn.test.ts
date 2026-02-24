import { describe, it, expect } from "vitest";
import { luhnCheck } from "./luhn";

describe("luhnCheck", () => {
  it("returns true for valid 16-digit card number", () => {
    expect(luhnCheck("4532015112830366")).toBe(true);
    expect(luhnCheck("4242424242424242")).toBe(true);
  });

  it("accepts formatted input (spaces) and strips non-digits", () => {
    expect(luhnCheck("4532 0151 1283 0366")).toBe(true);
    expect(luhnCheck("4532-0151-1283-0366")).toBe(true);
  });

  it("returns false for invalid check digit", () => {
    expect(luhnCheck("4532015112830367")).toBe(false);
    expect(luhnCheck("4242424242424243")).toBe(false);
  });

  it("returns false when length is less than 13", () => {
    expect(luhnCheck("123456789012")).toBe(false);
  });

  it("returns false when length is greater than 19", () => {
    expect(luhnCheck("12345678901234567890")).toBe(false);
  });

  it("returns false for empty or non-digit string", () => {
    expect(luhnCheck("")).toBe(false);
    expect(luhnCheck("abc")).toBe(false);
  });
});
