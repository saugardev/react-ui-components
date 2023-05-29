import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { NavigationMenuBar,NavigationMenuBarProps } from "./NavigationMenuBar";

export default {
  title: "components/NavigationMenuBar",
  component: NavigationMenuBar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<NavigationMenuBarProps> = (args) => <NavigationMenuBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Hello, World!",
};
