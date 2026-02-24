import { useEffect } from "react";
import Card from "@/components/ui/card";
import { Subtitle, Description } from "@/components/ui/typography";
import success from "@/assets/success.svg";
import Image from "next/image";

export type ConfirmationProps = {
  onSubmitCheckout: () => void;
};

export default function Confirmation({ onSubmitCheckout }: ConfirmationProps) {
  useEffect(() => {
    onSubmitCheckout();
  }, [onSubmitCheckout]);

  return (
    <Card>
      <div className="flex flex-col items-center gap-4 px-10 text-center">
        <Image
          src={success}
          alt="Confirmation"
          className="w-[200px] h-[200px]"
        />
        <Subtitle className="text-description text-lg">
          Your appointment has been booked!
        </Subtitle>
        <Description className="text-base text-foreground">
          A confirmation has been sent to your email address.
        </Description>
      </div>
    </Card>
  );
}
