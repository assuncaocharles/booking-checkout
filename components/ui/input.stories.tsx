import type { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input",
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter value",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "you@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Name",
    name: "name",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    placeholder: "Cannot edit",
  },
};
