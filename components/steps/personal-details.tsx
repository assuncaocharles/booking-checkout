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
      PersonalDetails
      <button type="submit">Next</button>
    </form>
  );
}
