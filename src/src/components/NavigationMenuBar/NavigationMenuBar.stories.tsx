import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { NavigationMenuBar,NavigationMenuBarProps } from "./NavigationMenuBar";

export default {
  title: "components/NavigationMenuBar",
  component: NavigationMenuBar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryObj<NavigationMenuBarProps> = {
  render: (args: NavigationMenuBarProps) => <NavigationMenuBar {...args} />,
};


export const Default: StoryObj<NavigationMenuBarProps> = {
  ...Template,
};
