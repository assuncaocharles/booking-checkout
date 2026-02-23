export enum CheckoutStep {
  PersonalDetails = "PersonalDetails",
  CardDetails = "CardDetails",
  Confirmation = "Confirmation",
}

export interface CheckoutContextValue {
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
  submitCheckout: () => void;
}
