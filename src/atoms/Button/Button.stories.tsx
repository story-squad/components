import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '.';
import { ICustomButtonProps } from './Button.model';

const Template: Story<React.PropsWithChildren<ICustomButtonProps>> = ({
  ...props
}) => <Button {...props}>{'Start Rumble'}</Button>;

export const Default = Template.bind({});
Default.args = { type: 'primary', size: 'lg' };

export const Primary = Template.bind({});

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { disabled: true };

export const PrimaryWithLeftIcon = Template.bind({});
PrimaryWithLeftIcon.args = { iconLeft: <FiArrowRight /> };

export const PrimaryDisabledWithLeftIcon = Template.bind({});
PrimaryDisabledWithLeftIcon.args = {
  disabled: true,
  iconLeft: <FiArrowRight />,
};

export const PrimaryWithRightIcon = Template.bind({});
PrimaryWithRightIcon.args = { iconRight: <FiArrowRight /> };

export const PrimaryDisabledWithRightIcon = Template.bind({});
PrimaryDisabledWithRightIcon.args = {
  disabled: true,
  iconRight: <FiArrowRight />,
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = { size: 'sm' };

export const SmallPrimaryDisabled = Template.bind({});
SmallPrimaryDisabled.args = { size: 'sm', disabled: true };

export const SmallPrimaryWithLeftIcon = Template.bind({});
SmallPrimaryWithLeftIcon.args = {
  size: 'sm',
  iconLeft: <FiArrowRight />,
};

export const SmallPrimaryDisabledWithLeftIcon = Template.bind({});
SmallPrimaryDisabledWithLeftIcon.args = {
  size: 'sm',
  iconLeft: <FiArrowRight />,
  disabled: true,
};

export const SmallPrimaryWithRightIcon = Template.bind({});
SmallPrimaryWithRightIcon.args = {
  size: 'sm',
  iconRight: <FiArrowRight />,
};

export const SmallPrimaryDisabledWithRightIcon = Template.bind({});
SmallPrimaryDisabledWithRightIcon.args = {
  size: 'sm',
  iconRight: <FiArrowRight />,
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = { type: 'secondary', disabled: true };

export const SecondaryWithLeftIcon = Template.bind({});
SecondaryWithLeftIcon.args = { type: 'secondary', iconLeft: <FiArrowRight /> };

export const SecondaryDisabledWithLeftIcon = Template.bind({});
SecondaryDisabledWithLeftIcon.args = {
  type: 'secondary',
  disabled: true,
  iconLeft: <FiArrowRight />,
};

export const SecondaryWithRightIcon = Template.bind({});
SecondaryWithRightIcon.args = {
  type: 'secondary',
  iconRight: <FiArrowRight />,
};

export const SecondaryDisabledWithRightIcon = Template.bind({});
SecondaryDisabledWithRightIcon.args = {
  type: 'secondary',
  disabled: true,
  iconRight: <FiArrowRight />,
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = { type: 'secondary', size: 'sm' };

export const SmallSecondaryDisabled = Template.bind({});
SmallSecondaryDisabled.args = { type: 'secondary', size: 'sm', disabled: true };

export const SmallSecondaryWithLeftIcon = Template.bind({});
SmallSecondaryWithLeftIcon.args = {
  type: 'secondary',
  size: 'sm',
  iconLeft: <FiArrowRight />,
};

export const SmallSecondaryDisabledWithLeftIcon = Template.bind({});
SmallSecondaryDisabledWithLeftIcon.args = {
  type: 'secondary',
  size: 'sm',
  iconLeft: <FiArrowRight />,
  disabled: true,
};

export const SmallSecondaryWithRightIcon = Template.bind({});
SmallSecondaryWithRightIcon.args = {
  type: 'secondary',
  size: 'sm',
  iconRight: <FiArrowRight />,
};

export const SmallSecondaryDisabledWithRightIcon = Template.bind({});
SmallSecondaryDisabledWithRightIcon.args = {
  type: 'secondary',
  size: 'sm',
  iconRight: <FiArrowRight />,
  disabled: true,
};

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;
