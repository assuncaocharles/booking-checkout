import type { Meta, StoryObj } from "@storybook/react";
import { Subtitle, Description } from "./typography";

const meta: Meta<typeof Subtitle> = {
  component: Subtitle,
  title: "UI/Typography",
};
export default meta;

type SubtitleStory = StoryObj<typeof Subtitle>;
type DescriptionStory = StoryObj<typeof Description>;

export const SubtitleDefault: SubtitleStory = {
  args: {
    children: "Section title",
  },
};

export const SubtitleAsH1: SubtitleStory = {
  args: {
    children: "Page title",
    as: "h1",
  },
};

export const SubtitleAsH3: SubtitleStory = {
  args: {
    children: "Subsection",
    as: "h3",
  },
};

export const SubtitleAsP: SubtitleStory = {
  args: {
    children: "Styled paragraph",
    as: "p",
  },
};

export const DescriptionDefault: DescriptionStory = {
  args: {
    children: "This is a description or body text.",
  },
  render: (args) => <Description {...args} />,
};

export const DescriptionAsSpan: DescriptionStory = {
  args: {
    children: "Inline description",
    as: "span",
  },
  render: (args) => <Description {...args} />,
};
