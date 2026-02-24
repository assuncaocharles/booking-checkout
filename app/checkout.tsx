import { useCheckout } from "@/contexts/checkout-context";
import { CheckoutStep } from "@/types/checkout";
import PersonalDetails from "@/components/steps/personal-details";
import CardDetails from "@/components/steps/card-details";
import Confirmation from "@/components/steps/confirmation";
import CompanyInfo from "@/components/company-info/company-info";
import { defaultCompany } from "@/fixtures/companies";
import { Subtitle } from "@/components/ui/typography";
import { cn } from "@/helpers/cn";

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
        className={cn(
          "flex gap-8 px-4 pb-24 md:px-30 md:py-15 justify-center",
          isConfirmation
            ? "flex-col-reverse md:items-center"
            : "flex-col md:flex-row md:gap-8",
        )}
      >
        <div
          className={cn(
            "w-full",
            isConfirmation ? "max-w-[542px]" : "md:w-1/3",
          )}
        >
          <CompanyInfo
            name={defaultCompany.name}
            logo={defaultCompany.logo}
            logoAlt={defaultCompany.logoAlt}
            address={defaultCompany.address}
            email={defaultCompany.email}
            phone={defaultCompany.phone}
          />
        </div>
        <div
          className={cn(
            "flex flex-col gap-4 w-full ",
            isConfirmation
              ? "max-w-[542px]"
              : "mb-8 md:w-2/3 md:mb-0 max-w-[700px] md:pb-24",
          )}
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
