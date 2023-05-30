import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { PageHeaderProps, PageHeader } from "./PageHeader";

export default {
  title: "components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryObj<PageHeaderProps> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
};

export const Default: StoryObj<PageHeaderProps> = {
  ...Template,
};

export const OpenMenu: StoryObj<PageHeaderProps> = {
  ...Template,
  args: {
    open: true,
  },
};
