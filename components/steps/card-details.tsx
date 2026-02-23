import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import BottomBar from "./bottom-bar";

export type CardDetailsProps = {
  onNextStep: () => void;
};

export default function CardDetails({ onNextStep }: CardDetailsProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNextStep();
      }}
    >
      <Card>CardDetails</Card>
      <BottomBar>
        <Button type="submit">Continue</Button>
      </BottomBar>
    </form>
  );
}
