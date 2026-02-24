import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Link from "./link";

describe("Link", () => {
  it("renders anchor with href and children", () => {
    render(<Link href="/checkout">Go to checkout</Link>);
    const link = screen.getByRole("link", { name: "Go to checkout" });
    expect(link).toHaveAttribute("href", "/checkout");
    expect(link.tagName).toBe("A");
  });

  it("applies custom className", () => {
    render(
      <Link href="/test" className="my-link">
        Test
      </Link>,
    );
    expect(screen.getByRole("link")).toHaveClass("my-link");
  });
});
