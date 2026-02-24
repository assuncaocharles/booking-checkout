import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

vi.mock("next/font/google", () => ({
  Nunito_Sans: () => ({ variable: "font-nunito-sans" }),
}));

describe("RootLayout", () => {
  it("renders children and html structure", () => {
    render(
      <RootLayout>
        <span>Child content</span>
      </RootLayout>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });
});
