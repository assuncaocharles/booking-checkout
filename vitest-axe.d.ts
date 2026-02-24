import "vitest";

declare module "vitest" {
  interface Matchers<T = unknown> {
    toHaveNoViolations(): void;
  }
  // Vitest 4 uses Chai's Assertion for expect() return type
  interface Assertion<T = unknown> {
    toHaveNoViolations(): void;
  }
}
