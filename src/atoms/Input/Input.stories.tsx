import { Meta, Story } from "@storybook/react";
import React from "react";
import { Input } from ".";
import { ICustomInput } from "./Input.model";
import "./input.scss";

type Props = React.PropsWithChildren<ICustomInput>;

const Template: Story<Props> = ({ iconLeft, iconRight, ...props }) => (
  <Input
    iconLeft={iconLeft}
    iconRight={iconRight}
    {...props}
    placeholder="Placeholder Text"
  />
);

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/Input",
  component: Input,
  argTypes: {
    type: {
      options: ["date", "text", "email", "phone", "date", "time", "textarea"],
      control: {
        type: "radio",
        labels: {
          date: "date",
          text: "text",
          email: "email",
          phone: "phone",
          time: "time",
          textarea: "textarea",
        },
      },
      defaultValue: "text",
    },
    style: {
      options: ["default"],
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
