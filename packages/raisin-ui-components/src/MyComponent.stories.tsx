import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MyComponent, MyComponentProps } from './index';

export default {
  title: 'MyComponent',
  component: MyComponent,
} as Meta;

const Template: StoryFn<MyComponentProps> = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, World!',
};
