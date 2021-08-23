import { Meta, Story } from "@storybook/react";
import React from "react";
import { Label } from ".";
import { ICustomLabelProps } from "./InputLabel.model";
import "./inputLabel.scss";

type Props = React.PropsWithChildren<ICustomLabelProps>;

const Template: Story<Props> = ({ label = "INPUT LABEL", ...props }) => (
  <Label label={label} {...props} />
);

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/label",
  component: Label,
  argTypes: {
    labelType: {
      options: ["default", "required", "optional"],
      control: {
        type: "radio",
        labels: {
          default: "default",
          required: "required",
          optional: "optional",
        },
      },
      defaultValue: "default",
    },
    toolTip: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta<Props>;
