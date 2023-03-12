import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Stack, StackProps } from '../src/components';

const meta: Meta = {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 },
  },
};

export default meta;

const Template: Story<StackProps> = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: '#3DB7E9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: 'nowrap',
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  spacing: 2,
};

export const NoSpacing = Template.bind({});
NoSpacing.args = {
  direction: 'row',
  spacing: 0,
};

export const SpaceBetween = Template.bind({});
SpaceBetween.args = {
  direction: 'row',
  spacing: 2,
  justifyContent: 'space-between',
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: 'row',
  spacing: 2,
  wrap: 'wrap',
};

export const Empty = Template.bind({});
Empty.args = {
  numberOfChildren: 0,
  direction: 'row',
  spacing: 2,
};

const heights = [40, 60, 80, 50];

const DifferentHeightTemplate: Story<StackProps> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: '50px',
          height: `${heights[n]}px`,
          backgroundColor: '#3DB7E9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

export const StretchAligned = DifferentHeightTemplate.bind({});
StretchAligned.args = {
  direction: 'row',
  spacing: 2,
  alignItems: 'stretched',
};
