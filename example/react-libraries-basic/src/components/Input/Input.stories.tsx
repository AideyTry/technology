import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    disabled: {
      description: "Set the disabled of input",
    },
    size: {
      description: "Set the size of input",
    },
    prefix: {
      description: "Set the prefix of input",
    },
    suffix: {
      description: "Set the suffix of input",
    },
    onChange: {
      description: "Callback when user input",
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args}></Input>;

// Each story then reuses that template
export const DefaultInput = Template.bind({});
DefaultInput.args = {
  prefix: '33',
  suffix: 'suffix',
  onChange: (e) => console.log(e),
};
