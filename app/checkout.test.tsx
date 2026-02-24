import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";
import { CheckoutProvider } from "@/contexts/checkout-context";
import Checkout from "./checkout";

describe("Checkout", () => {
  it("renders first step (PersonalDetails) when inside provider", () => {
    render(
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>,
    );
    expect(
      screen.getByText("Enter your details below"),
    ).toBeInTheDocument();
  });

  it("renders Book Appointment heading", () => {
    render(
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>,
    );
    expect(
      screen.getByRole("heading", { name: "Book Appointment" }),
    ).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
