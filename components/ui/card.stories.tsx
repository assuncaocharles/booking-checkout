import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "UI/Card",
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card content goes here.",
  },
};

export const WithClassName: Story = {
  args: {
    children: "Card with extra padding",
    className: "p-8",
  },
};
