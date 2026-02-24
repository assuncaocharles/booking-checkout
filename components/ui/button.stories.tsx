import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Continue",
  },
};

export const Disabled: Story = {
  args: {
    children: "Submit",
    disabled: true,
  },
};

export const CustomClassName: Story = {
  args: {
    children: "Custom style",
    className: "opacity-80",
  },
};
