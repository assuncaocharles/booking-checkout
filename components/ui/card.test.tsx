import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./card";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card>
        <span>Card content</span>
      </Card>,
    );
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Card className="extra-class">Content</Card>,
    );
    const div = container.firstChild as HTMLElement;
    expect(div).toHaveClass("extra-class");
  });
});
