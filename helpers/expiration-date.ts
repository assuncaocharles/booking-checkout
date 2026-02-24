/**
 * Formats input as MM / YY (digits only, max 4 digits, " / " after month).
 */
export function formatExpirationDate(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) {
    return digits;
  }
  return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
}

/** Max length of formatted string "MM / YY". */
export const EXPIRATION_MAX_LENGTH = 7;

/**
 * Validates MM / YY: month 01-12, and expiration is in the future (last day of that month >= today).
 * Accepts formatted "MM / YY" or "MM/YY" or "MMYY".
 */
export function isValidExpirationDate(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 4) return false;
  const month = parseInt(digits.slice(0, 2), 10);
  if (month < 1 || month > 12) return false;
  const yy = parseInt(digits.slice(2, 4), 10);
  const year = 2000 + yy;
  // Last day of the expiration month (JS months 0-indexed: month 12 -> monthIndex 11, day 0 = last day of prev month)
  const lastDayOfExpiry = new Date(year, month, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return lastDayOfExpiry >= today;
}
