/**
 * Validates a US ZIP code.
 * Accepts:
 * - 5-digit: 12345
 * - ZIP+4: 12345-6789 or 123456789
 */
export function isValidUsZip(value: string): boolean {
  const digitsOnly = value.replace(/\D/g, "");
  return digitsOnly.length === 5 || digitsOnly.length === 9;
}
