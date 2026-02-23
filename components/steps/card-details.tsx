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
      CardDetails
      <button type="submit">Next</button>
    </form>
  );
}
