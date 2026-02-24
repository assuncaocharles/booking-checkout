import { useCheckout } from "@/contexts/checkout-context";
import { CheckoutStep } from "@/types/checkout";
import PersonalDetails from "@/components/steps/personal-details";
import CardDetails from "@/components/steps/card-details";
import Confirmation from "@/components/steps/confirmation";
import CompanyInfo from "@/components/company-info/company-info";
import { Subtitle } from "@/components/ui/typography";

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

  const isConfirmation = step === CheckoutStep.Confirmation;

  return (
    <div>
      <Subtitle as="h1" className="mb-2 mt-8  text-center md:hidden">
        Book Appointment
      </Subtitle>
      <div
        className={
          isConfirmation
            ? "flex flex-col-reverse gap-8 px-4 pb-24 md:px-30 md:py-15 md:items-center"
            : "flex flex-col gap-8 px-4 pb-24 md:flex-row md:gap-8 md:px-30 md:py-15"
        }
      >
        <div
          className={
            isConfirmation ? "w-full max-w-[542px]" : "w-full md:w-1/3"
          }
        >
          <CompanyInfo />
        </div>
        <div
          className={
            isConfirmation
              ? "flex flex-col gap-4 w-full max-w-[542px]"
              : "flex flex-col gap-4 w-full mb-8 md:w-2/3 md:mb-0"
          }
        >
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
    </div>
  );
}
