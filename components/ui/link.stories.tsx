import type { Meta, StoryObj } from "@storybook/react";
import Link from "./link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "UI/Link",
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "/checkout",
    children: "Go to checkout",
  },
};

export const WithCustomClass: Story = {
  args: {
    href: "/",
    children: "Back to home",
    className: "font-bold",
  },
};
