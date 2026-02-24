import { describe, it, expect, vi } from "vitest";
import { axe } from "vitest-axe";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PersonalDetails from "./personal-details";
import type { PersonalDetails as PersonalDetailsType } from "@/types/checkout";

const defaultDetails: PersonalDetailsType = {
  fullName: "",
  email: "",
  phone: "",
  visitReason: "",
};

describe("PersonalDetails", () => {
  it("renders form fields", () => {
    const onNextStep = vi.fn();
    const onSetPersonalDetails = vi.fn();
    render(
      <PersonalDetails
        onNextStep={onNextStep}
        onSetPersonalDetails={onSetPersonalDetails}
        personalDetails={defaultDetails}
      />,
    );
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Visit reason")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("calls onSetPersonalDetails and onNextStep on valid submit", async () => {
    const onNextStep = vi.fn();
    const onSetPersonalDetails = vi.fn();
    render(
      <PersonalDetails
        onNextStep={onNextStep}
        onSetPersonalDetails={onSetPersonalDetails}
        personalDetails={defaultDetails}
      />,
    );
    fireEvent.change(screen.getByLabelText("Full name"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone"), {
      target: { value: "5551234567" },
    });
    fireEvent.change(screen.getByLabelText("Visit reason"), {
      target: { value: "Consultation" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    await waitFor(() => {
      expect(onSetPersonalDetails).toHaveBeenCalledWith({
        fullName: "Jane Doe",
        email: "jane@example.com",
        phone: "5551234567",
        visitReason: "Consultation",
      });
      expect(onNextStep).toHaveBeenCalled();
    });
  });

  it("shows validation errors when submitting empty", async () => {
    const onNextStep = vi.fn();
    const onSetPersonalDetails = vi.fn();
    render(
      <PersonalDetails
        onNextStep={onNextStep}
        onSetPersonalDetails={onSetPersonalDetails}
        personalDetails={defaultDetails}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    await expect(
      screen.findByText("Full name is required"),
    ).resolves.toBeInTheDocument();
    expect(onNextStep).not.toHaveBeenCalled();
  });

  it("has no accessibility violations", async () => {
    const onNextStep = vi.fn();
    const onSetPersonalDetails = vi.fn();
    const { container } = render(
      <PersonalDetails
        onNextStep={onNextStep}
        onSetPersonalDetails={onSetPersonalDetails}
        personalDetails={defaultDetails}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
