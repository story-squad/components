import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiUser } from "react-icons/fi";
import { Inputfield } from ".";
import { ICustomInputProps } from "./InputField.model";
import "./inputField.scss";

type Props = React.PropsWithChildren<ICustomInputProps>;

const Template: Story<Props> = ({ iconLeft, iconRight, ...props }) => (
  <div style={{ maxWidth: 320 }}>
    <Inputfield
      iconLeft={iconLeft && <FiUser />}
      iconRight={iconRight && <FiUser />}
      {...props}
      placeholder="Placeholder Text"
    />
  </div>
);

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/Inputfield",
  component: Inputfield,
  argTypes: {
    inputType: {
      options: ["date", "text", "email", "date", "time", "textarea"],
      control: {
        type: "radio",
        labels: {
          date: "date",
          text: "text",
          email: "email",
          // phone: "phone",
          time: "time",
          textarea: "textarea",
        },
      },
      defaultValue: "text",
    },
    variant: {
      options: ["default", "warning", "success", "error"],
      control: { type: "radio" },
      labels: { default: "default" },
      defaultValue: "default",
    },
    iconLeft: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    iconRight: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta<Props>;
