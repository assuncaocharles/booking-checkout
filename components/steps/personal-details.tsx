import Button from "@/components/ui/button";
import BottomBar from "./bottom-bar";
import Card from "../ui/card";

export type PersonalDetailsProps = {
  onNextStep: () => void;
};

export default function PersonalDetails({ onNextStep }: PersonalDetailsProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNextStep();
      }}
    >
      <Card>PersonalDetails</Card>
      <BottomBar>
        <Button type="submit">Continue</Button>
      </BottomBar>
    </form>
  );
}
