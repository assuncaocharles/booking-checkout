import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./textarea";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "UI/Textarea",
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Comments",
    name: "comments",
    placeholder: "Enter your comments...",
  },
};

export const WithError: Story = {
  args: {
    label: "Notes",
    name: "notes",
    error: "Maximum 500 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "Read only",
    disabled: true,
    placeholder: "Disabled textarea",
  },
};
