import { describe, it, expect } from "vitest";
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
});
