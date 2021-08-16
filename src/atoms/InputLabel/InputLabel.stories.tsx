import { Meta, Story } from "@storybook/react";
import React from "react";
import { Label } from ".";
import { ICustomLabelProps } from "./InputLabel.model";
import "./inputlabel.scss";

type Props = React.PropsWithChildren<ICustomLabelProps>;

const Template: Story<Props> = ({ ...props }) => <Label {...props} />;

export const Interactive = Template.bind({});

export default {
  title: "Components/Atoms/label",
  component: Label,
  argTypes: {
    type: {
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
