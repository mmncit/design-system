import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/components';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'handleClick' },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'green',
  label: 'Press Me Blah Blah Blah Blah Blah Blah Blah',
  size: 'md',
};
