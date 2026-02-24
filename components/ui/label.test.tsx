import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  it("renders as label by default with htmlFor", () => {
    render(<Label htmlFor="input-id">Field label</Label>);
    const el = screen.getByText("Field label");
    expect(el.tagName).toBe("LABEL");
    expect(el).toHaveAttribute("for", "input-id");
  });

  it("renders as span when as=span", () => {
    render(<Label as="span">Span label</Label>);
    const el = screen.getByText("Span label");
    expect(el.tagName).toBe("SPAN");
  });

  it("applies custom className", () => {
    render(<Label className="custom">Label</Label>);
    expect(screen.getByText("Label")).toHaveClass("custom");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Label htmlFor="id">Field label</Label>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
