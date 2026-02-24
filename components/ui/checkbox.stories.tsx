import type { Meta, StoryObj } from "@storybook/react";
import {
  CheckboxWithLabel,
} from "./checkbox";

const meta: Meta<typeof CheckboxWithLabel> = {
  component: CheckboxWithLabel,
  title: "UI/Checkbox",
};
export default meta;

type Story = StoryObj<typeof CheckboxWithLabel>;

export const Unchecked: Story = {
  args: {
    label: "I agree to the terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Accept cookies for a better experience",
  },
};
