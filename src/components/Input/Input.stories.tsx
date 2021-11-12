import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const Text = Template.bind({});
Text.args = { label: "Text", type: "text" };

export const Date = Template.bind({});
Date.args = { label: "Date", type: "date" };
