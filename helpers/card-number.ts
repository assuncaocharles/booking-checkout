/** Max digits for card number (e.g. 19 for some cards). */
const CARD_MAX_DIGITS = 19;

/**
 * Formats a card number with a space every 4 digits and limits to max digits.
 * Strips non-digits from input.
 */
export function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, CARD_MAX_DIGITS);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

/** Max length of formatted card number string (19 digits + spaces). */
export const CARD_NUMBER_MAX_LENGTH = 19;

/** Returns raw digits from a formatted card number string. */
export function getCardNumberDigits(value: string): string {
  return value.replace(/\D/g, "");
}
