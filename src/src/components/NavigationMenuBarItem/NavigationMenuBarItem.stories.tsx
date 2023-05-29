import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenuBarItem,
  NavigationMenuBarItemProps,
} from "./NavigationMenuBarItem";

export default {
  title: "components/NavigationMenuBarItem",
  component: NavigationMenuBarItem,
  tags: ["autodocs"],
} as Meta<typeof NavigationMenuBarItem>;

const Template: StoryObj<NavigationMenuBarItemProps> = {
  render: (args: NavigationMenuBarItemProps) => (
    <NavigationMenuBarItem {...args} />
  ),
};

export const Default: StoryObj<NavigationMenuBarItemProps> = {
  ...Template,
  args: {
    content: "This is some content",
    title: "this is the title",
  },
};
