import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  formatExpirationDate,
  isValidExpirationDate,
  EXPIRATION_MAX_LENGTH,
} from "./expiration-date";

describe("formatExpirationDate", () => {
  it("formats as MM / YY with space around slash", () => {
    expect(formatExpirationDate("1225")).toBe("12 / 25");
  });

  it("returns digits only when length <= 2", () => {
    expect(formatExpirationDate("1")).toBe("1");
    expect(formatExpirationDate("12")).toBe("12");
  });

  it("strips non-digits and limits to 4 digits", () => {
    expect(formatExpirationDate("12/25")).toBe("12 / 25");
    expect(formatExpirationDate("123456")).toBe("12 / 34");
  });
});

describe("isValidExpirationDate", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-06-15"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns true for future expiration", () => {
    expect(isValidExpirationDate("12 / 30")).toBe(true);
    expect(isValidExpirationDate("1230")).toBe(true);
    expect(isValidExpirationDate("07/26")).toBe(true);
  });

  it("returns true for current month (last day >= today)", () => {
    expect(isValidExpirationDate("06 / 25")).toBe(true);
  });

  it("returns false for past expiration", () => {
    expect(isValidExpirationDate("01 / 20")).toBe(false);
    expect(isValidExpirationDate("06 / 24")).toBe(false);
  });

  it("returns false when month is invalid", () => {
    expect(isValidExpirationDate("00 / 25")).toBe(false);
    expect(isValidExpirationDate("13 / 25")).toBe(false);
  });

  it("returns false when not 4 digits", () => {
    expect(isValidExpirationDate("123")).toBe(false);
    expect(isValidExpirationDate("12345")).toBe(false);
    expect(isValidExpirationDate("")).toBe(false);
  });
});

describe("EXPIRATION_MAX_LENGTH", () => {
  it("is 7", () => {
    expect(EXPIRATION_MAX_LENGTH).toBe(7);
  });
});
