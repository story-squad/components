import { Meta, Story } from "@storybook/react";
import React from "react";
import { ToastProps } from "react-toast-notifications";
import Toast from "./Toast";

const Template: Story<ToastProps> = ({ appearance, ...props }) => (
  <Toast {...props} appearance={appearance} />
);

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/Toast",
  component: Toast,
  argTypes: {
    appearance: {
      options: ["success", "error", "info"],
      control: {
        type: "radio",
        labels: { success: "success", error: "error", info: "info" },
      },
      defaultValue: "success",
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<ToastProps>;
