import { Meta, Story } from "@storybook/react";
import React from "react";
import { Flip } from ".";

const Template: Story = () => <Flip />;

export const Interactive = Template.bind({});

export default {
  title: "Components/Animation/Flip",
} as Meta;
