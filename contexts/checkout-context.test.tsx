import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { CheckoutProvider, useCheckout } from "./checkout-context";
import { CheckoutStep } from "@/types/checkout";

function Consumer() {
  const {
    step,
    setStep,
    personalDetails,
    setPersonalDetails,
    cardDetails,
    setCardDetails,
    submitCheckout,
  } = useCheckout();
  return (
    <div>
      <span data-testid="step">{step}</span>
      <button onClick={() => setStep(CheckoutStep.CardDetails)}>Next step</button>
      <span data-testid="personal-name">{personalDetails.fullName}</span>
      <button
        onClick={() =>
          setPersonalDetails({ ...personalDetails, fullName: "Jane Doe" })
        }
      >
        Set name
      </button>
      <span data-testid="card-number">{cardDetails.cardNumber}</span>
      <button
        onClick={() =>
          setCardDetails({ ...cardDetails, cardNumber: "4242424242424242" })
        }
      >
        Set card
      </button>
      <button onClick={submitCheckout}>Submit</button>
    </div>
  );
}

function OuterConsumer() {
  useCheckout();
  return null;
}

describe("CheckoutProvider and useCheckout", () => {
  it("provides initial step and details", () => {
    render(
      <CheckoutProvider>
        <Consumer />
      </CheckoutProvider>,
    );
    expect(screen.getByTestId("step")).toHaveTextContent(
      CheckoutStep.PersonalDetails,
    );
    expect(screen.getByTestId("personal-name")).toHaveTextContent("");
    expect(screen.getByTestId("card-number")).toHaveTextContent("");
  });

  it("updates step when setStep is called", () => {
    render(
      <CheckoutProvider>
        <Consumer />
      </CheckoutProvider>,
    );
    act(() => {
      screen.getByRole("button", { name: "Next step" }).click();
    });
    expect(screen.getByTestId("step")).toHaveTextContent(
      CheckoutStep.CardDetails,
    );
  });

  it("updates personalDetails when setPersonalDetails is called", () => {
    render(
      <CheckoutProvider>
        <Consumer />
      </CheckoutProvider>,
    );
    act(() => {
      screen.getByRole("button", { name: "Set name" }).click();
    });
    expect(screen.getByTestId("personal-name")).toHaveTextContent("Jane Doe");
  });

  it("updates cardDetails when setCardDetails is called", () => {
    render(
      <CheckoutProvider>
        <Consumer />
      </CheckoutProvider>,
    );
    act(() => {
      screen.getByRole("button", { name: "Set card" }).click();
    });
    expect(screen.getByTestId("card-number")).toHaveTextContent(
      "4242424242424242",
    );
  });

  it("calls submitCheckout when submit button is clicked", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(
      <CheckoutProvider>
        <Consumer />
      </CheckoutProvider>,
    );
    act(() => {
      screen.getByRole("button", { name: "Submit" }).click();
    });
    expect(logSpy).toHaveBeenCalledWith(
      "Successfully submitted",
      expect.any(String),
    );
    logSpy.mockRestore();
  });

  it("throws when useCheckout is used outside CheckoutProvider", () => {
    expect(() => render(<OuterConsumer />)).toThrow(
      "useCheckout must be used within a CheckoutProvider",
    );
  });
});
