import { createContext, useContext, useState } from "react";
import { CheckoutContextValue, CheckoutStep } from "@/types/checkout";

const CheckoutContext = createContext<CheckoutContextValue | undefined>(
  undefined,
);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.PersonalDetails);

  const submitCheckout = () => {
    console.log("submitting checkout");
  };

  return (
    <CheckoutContext.Provider value={{ step, setStep, submitCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
