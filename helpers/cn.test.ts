import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("handles tailwind-merge: later conflicting class wins", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("handles undefined and conditional classes", () => {
    expect(cn("base", undefined, false && "hidden", "visible")).toBe(
      "base visible",
    );
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});
