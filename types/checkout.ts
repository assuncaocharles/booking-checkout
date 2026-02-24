export enum CheckoutStep {
  PersonalDetails = "PersonalDetails",
  CardDetails = "CardDetails",
  Confirmation = "Confirmation",
}

export interface CheckoutContextValue {
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
  submitCheckout: () => void;
  personalDetails: PersonalDetails;
  setPersonalDetails: (personalDetails: PersonalDetails) => void;
}

export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: string;
  visitReason: string;
}
