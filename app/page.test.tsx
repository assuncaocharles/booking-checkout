import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home (page)", () => {
  it("renders checkout flow with first step content", () => {
    render(<Home />);
    expect(
      screen.getByText("Enter your details below"),
    ).toBeInTheDocument();
  });

  it("renders company info", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Gold Spa" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Home />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
