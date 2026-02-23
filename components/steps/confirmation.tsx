import { useEffect } from "react";
import Card from "@/components/ui/card";

export type ConfirmationProps = {
  onSubmitCheckout: () => void;
};

export default function Confirmation({ onSubmitCheckout }: ConfirmationProps) {
  useEffect(() => {
    onSubmitCheckout();
  }, [onSubmitCheckout]);

  return <Card>Confirmation</Card>;
}
