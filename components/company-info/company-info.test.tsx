import { describe, it, expect, vi } from "vitest";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";
import CompanyInfo from "./company-info";
import type { Company } from "@/types/company";

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
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

const mockCompany: Company = {
  name: "Gold Spa",
  logo: "/logo.png",
  logoAlt: "Company Logo",
  address: ["2525 Camino del Rio S", "Suite 315 Room 8", "San Diego, CA 92108"],
  email: "goldspa@gmail.com",
  phone: "+11 123 4567 222",
};

describe("CompanyInfo", () => {
  it("renders company name", () => {
    render(<CompanyInfo {...mockCompany} />);
    expect(screen.getByRole("heading", { name: "Gold Spa" })).toBeInTheDocument();
  });

  it("renders address", () => {
    render(<CompanyInfo {...mockCompany} />);
    expect(screen.getByText(/2525 Camino del Rio S/)).toBeInTheDocument();
    expect(screen.getByText(/San Diego, CA 92108/)).toBeInTheDocument();
  });

  it("renders email and phone links", () => {
    render(<CompanyInfo {...mockCompany} />);
    expect(screen.getByRole("link", { name: "goldspa@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:goldspa@gmail.com",
    );
    expect(screen.getByRole("link", { name: "+11 123 4567 222" })).toHaveAttribute(
      "href",
      "tel:+111234567222",
    );
  });

  it("renders a different company when passed", () => {
    render(
      <CompanyInfo
        {...mockCompany}
        name="Other Biz"
        email="other@example.com"
        phone="+1 555 000 0000"
      />,
    );
    expect(screen.getByRole("heading", { name: "Other Biz" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "other@example.com" })).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<CompanyInfo {...mockCompany} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
