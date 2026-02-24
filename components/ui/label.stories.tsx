import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "UI/Label",
};
export default meta;

type Story = StoryObj<typeof Label>;

export const AsLabel: Story = {
  args: {
    children: "Field label",
    htmlFor: "input-id",
  },
};

export const AsSpan: Story = {
  args: {
    children: "Span label",
    as: "span",
  },
};
