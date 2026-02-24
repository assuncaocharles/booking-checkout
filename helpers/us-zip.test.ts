import { describe, it, expect } from "vitest";
import { isValidUsZip } from "./us-zip";

describe("isValidUsZip", () => {
  it("returns true for 5-digit ZIP", () => {
    expect(isValidUsZip("12345")).toBe(true);
    expect(isValidUsZip("00000")).toBe(true);
  });

  it("returns true for ZIP+4 with hyphen", () => {
    expect(isValidUsZip("12345-6789")).toBe(true);
  });

  it("returns true for ZIP+4 without hyphen", () => {
    expect(isValidUsZip("123456789")).toBe(true);
  });

  it("strips non-digits and validates by digit count", () => {
    expect(isValidUsZip("123 45")).toBe(true);
    expect(isValidUsZip("12345-6789")).toBe(true);
  });

  it("returns false for wrong length", () => {
    expect(isValidUsZip("1234")).toBe(false);
    expect(isValidUsZip("123456")).toBe(false);
    expect(isValidUsZip("12345678")).toBe(false);
    expect(isValidUsZip("1234567890")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValidUsZip("")).toBe(false);
  });
});
