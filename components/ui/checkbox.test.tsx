import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxWithLabel,
} from "./checkbox";

describe("Checkbox", () => {
  it("renders and can be checked", () => {
    render(
      <Checkbox aria-label="Accept terms">
        <CheckboxIndicator />
      </Checkbox>,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});

describe("CheckboxWithLabel", () => {
  it("renders with label and toggles on click", () => {
    render(<CheckboxWithLabel label="I agree" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("I agree")).toBeInTheDocument();
    fireEvent.click(screen.getByText("I agree"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports disabled state", () => {
    render(<CheckboxWithLabel label="Disabled" disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
