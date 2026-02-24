import { useCheckout } from "@/contexts/checkout-context";
import { CheckoutStep } from "@/types/checkout";
import PersonalDetails from "@/components/steps/personal-details";
import CardDetails from "@/components/steps/card-details";
import Confirmation from "@/components/steps/confirmation";
import CompanyInfo from "@/components/company-info/company-info";

export default function Checkout() {
  const {
    step,
    setStep,
    submitCheckout,
    setPersonalDetails,
    personalDetails,
    cardDetails,
    setCardDetails,
  } = useCheckout();

  return (
    <div className="flex gap-8 px-30 py-15">
      <div className="w-1/3">
        <CompanyInfo />
      </div>
      <div className="flex flex-col gap-4 w-2/3">
        {step === CheckoutStep.PersonalDetails && (
          <PersonalDetails
            onNextStep={() => setStep(CheckoutStep.CardDetails)}
            onSetPersonalDetails={setPersonalDetails}
            personalDetails={personalDetails}
          />
        )}
        {step === CheckoutStep.CardDetails && (
          <CardDetails
            onNextStep={() => setStep(CheckoutStep.Confirmation)}
            onSetCardDetails={setCardDetails}
            cardDetails={cardDetails}
          />
        )}
        {step === CheckoutStep.Confirmation && (
          <Confirmation onSubmitCheckout={submitCheckout} />
        )}
      </div>
    </div>
  );
}
