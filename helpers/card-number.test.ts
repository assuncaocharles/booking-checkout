import { describe, it, expect } from "vitest";
import {
  formatCardNumber,
  getCardNumberDigits,
  CARD_NUMBER_MAX_LENGTH,
} from "./card-number";

describe("formatCardNumber", () => {
  it("formats with space every 4 digits", () => {
    expect(formatCardNumber("1234567890123456")).toBe("1234 5678 9012 3456");
  });

  it("strips non-digits", () => {
    expect(formatCardNumber("1234-5678-9012-3456")).toBe(
      "1234 5678 9012 3456",
    );
  });

  it("limits to max 19 digits", () => {
    expect(formatCardNumber("123456789012345678901234")).toBe(
      "1234 5678 9012 3456 789",
    );
  });

  it("returns empty string for empty input", () => {
    expect(formatCardNumber("")).toBe("");
  });
});

describe("getCardNumberDigits", () => {
  it("returns only digits from formatted string", () => {
    expect(getCardNumberDigits("1234 5678 9012 3456")).toBe("1234567890123456");
  });

  it("strips dashes and other non-digits", () => {
    expect(getCardNumberDigits("1234-5678-9012-3456")).toBe("1234567890123456");
  });
});

describe("CARD_NUMBER_MAX_LENGTH", () => {
  it("is 19", () => {
    expect(CARD_NUMBER_MAX_LENGTH).toBe(19);
  });
});
