import { Meta, Story } from "@storybook/react";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { Input } from ".";

const Template: Story = ({ ...props }) => (
  <div style={{ width: 325 }}>
    <Input
      {...props}
      variant="default"
      placeholder="Placeholder Text"
      iconLeft={<FiYoutube />}
    />
  </div>
);

export const Interactive = Template.bind({});

export default {
  title: "Components/Molecules/Input",
  component: Input,
} as Meta;
