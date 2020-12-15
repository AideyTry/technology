import React from "react";
import { Meta, Story } from '@storybook/react/types-6-0';
import AutoComplate, { AutoCompleteProps } from './index'

export default {
    title: "Example/AutoComplate",
    component: AutoComplate,
    argTypes:{
        fetchSuggestions: {
        description: 'Set the fetchSuggestions of AutoComplate'
    },
    onSelect: {
        description: 'Set the onSelect of AutoComplate'
    }
    }
  } as Meta;
  
  const Template: Story<AutoCompleteProps> = args => (
    <AutoComplate {...args}>
    </AutoComplate>
  );
  
  // Each story then reuses that template
  export const DefaultAutoComplate = Template.bind({});
  DefaultAutoComplate.args = { onSelect: e => console.log(e) };