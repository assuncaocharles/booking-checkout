export type ConfirmationProps = {
  onSubmitCheckout: () => void;
};

export default function Confirmation({ onSubmitCheckout }: ConfirmationProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitCheckout();
      }}
    >
      Confirmation
      <button type="submit">Confirm</button>
    </form>
  );
}
