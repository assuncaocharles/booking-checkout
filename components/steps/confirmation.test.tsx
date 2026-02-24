import { describe, it, expect, vi } from "vitest";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";
import Confirmation from "./confirmation";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe("Confirmation", () => {
  it("calls onSubmitCheckout on mount", () => {
    const onSubmitCheckout = vi.fn();
    render(<Confirmation onSubmitCheckout={onSubmitCheckout} />);
    expect(onSubmitCheckout).toHaveBeenCalled();
  });

  it("renders success message", () => {
    const onSubmitCheckout = vi.fn();
    render(<Confirmation onSubmitCheckout={onSubmitCheckout} />);
    expect(
      screen.getByText("Your appointment has been booked!"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/confirmation has been sent to your email/i),
    ).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const onSubmitCheckout = vi.fn();
    const { container } = render(
      <Confirmation onSubmitCheckout={onSubmitCheckout} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
