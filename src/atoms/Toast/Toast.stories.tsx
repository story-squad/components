import { Meta, Story } from "@storybook/react";
import React from "react";
import Toast from "./Toast";
import { ICustomToastProps } from "./Toast.model";

type Props = React.PropsWithChildren<ICustomToastProps>;

const Template: Story<Props> = ({ ...props }) => <Toast>{"I AM TOAST"}</Toast>;

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/Toast",
  component: Toast,
  argTypes: {},
} as Meta<Props>;
