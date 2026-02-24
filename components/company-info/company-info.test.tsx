import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CompanyInfo from "./company-info";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe("CompanyInfo", () => {
  it("renders company name", () => {
    render(<CompanyInfo />);
    expect(screen.getByRole("heading", { name: "Gold Spa" })).toBeInTheDocument();
  });

  it("renders address", () => {
    render(<CompanyInfo />);
    expect(screen.getByText(/2525 Camino del Rio S/)).toBeInTheDocument();
    expect(screen.getByText(/San Diego, CA 92108/)).toBeInTheDocument();
  });

  it("renders email and phone links", () => {
    render(<CompanyInfo />);
    expect(screen.getByRole("link", { name: "goldspa@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:goldspa@gmail.com",
    );
    expect(screen.getByRole("link", { name: "+11 123 4567 222" })).toHaveAttribute(
      "href",
      "tel:+111234567222",
    );
  });
});
