import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders with default variants", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: "Click me" });
    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toBe("BUTTON");
  });

  it("merges custom className", () => {
    render(<Button className="custom-class">Save</Button>);
    const btn = screen.getByRole("button", { name: "Save" });
    expect(btn).toHaveClass("custom-class");
  });

  it("passes through button props like disabled", () => {
    render(<Button disabled>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });

  it("renders with size and appearance variants", () => {
    const { container } = render(
      <Button size="md" appearance="primary">
        Primary
      </Button>,
    );
    const btn = container.querySelector("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Primary");
  });
});
