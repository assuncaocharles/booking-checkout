import { useCheckout } from "@/contexts/checkout-context";
import { CheckoutStep } from "@/types/checkout";
import PersonalDetails from "@/components/steps/personal-details";
import CardDetails from "@/components/steps/card-details";
import Confirmation from "@/components/steps/confirmation";

export default function Checkout() {
  const { step, setStep, submitCheckout } = useCheckout();

  return (
    <div>
      {step === CheckoutStep.PersonalDetails && (
        <PersonalDetails onNextStep={() => setStep(CheckoutStep.CardDetails)} />
      )}
      {step === CheckoutStep.CardDetails && (
        <CardDetails onNextStep={() => setStep(CheckoutStep.Confirmation)} />
      )}
      {step === CheckoutStep.Confirmation && (
        <Confirmation onSubmitCheckout={submitCheckout} />
      )}
    </div>
  );
}
