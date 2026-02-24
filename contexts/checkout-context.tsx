import { createContext, useContext, useState } from "react";
import {
  CheckoutContextValue,
  CheckoutStep,
  PersonalDetails,
  CardDetails,
} from "@/types/checkout";

const CheckoutContext = createContext<CheckoutContextValue | undefined>(
  undefined,
);

export const CheckoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.PersonalDetails);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    fullName: "",
    email: "",
    phone: "",
    visitReason: "",
  });

  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "",
    cardExpirationDate: "",
    cardCvv: "",
    billingZipCode: "",
  });

  const submitCheckout = () => {
    console.log(
      "Successfully submitted",
      JSON.stringify(
        {
          Booking: {
            PersonalDetails: personalDetails,
            CardDetails: cardDetails,
          },
        },
        null,
        2,
      ),
    );
  };

  return (
    <CheckoutContext.Provider
      value={{
        step,
        setStep,
        submitCheckout,
        personalDetails,
        setPersonalDetails,
        cardDetails,
        setCardDetails,
      }}
    >
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
