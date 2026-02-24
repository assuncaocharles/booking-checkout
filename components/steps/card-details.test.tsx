import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CardDetailsStep from "./card-details";
import type { CardDetails } from "@/types/checkout";

const defaultCardDetails: CardDetails = {
  cardNumber: "",
  cardExpirationDate: "",
  cardCvv: "",
  billingZipCode: "",
};

describe("CardDetailsStep", () => {
  it("renders card form fields", () => {
    const onNextStep = vi.fn();
    const onSetCardDetails = vi.fn();
    render(
      <CardDetailsStep
        onNextStep={onNextStep}
        onSetCardDetails={onSetCardDetails}
        cardDetails={defaultCardDetails}
      />,
    );
    expect(screen.getByPlaceholderText("1234 1234 1234 1234")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("MM / YY")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CVV")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Billing zip code")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Book appointment" })).toBeInTheDocument();
  });

  it("renders reschedule checkbox with policy text", () => {
    render(
      <CardDetailsStep
        onNextStep={vi.fn()}
        onSetCardDetails={vi.fn()}
        cardDetails={defaultCardDetails}
      />,
    );
    expect(
      screen.getByText(/reschedule or cancel at least 24 hours/i),
    ).toBeInTheDocument();
  });
});
