import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import AutoComplate, { AutoCompleteProps } from "./index";

export default {
  title: "Example/AutoComplate",
  component: AutoComplate,
  argTypes: {
    fetchSuggestions: {
      description: "Set the fetchSuggestions of AutoComplate",
    },
    onSelect: {
      description: "Set the onSelect of AutoComplate",
    },
  },
} as Meta;
const Template: Story<AutoCompleteProps> = (args) => {
  return <AutoComplate {...args}></AutoComplate>
};

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
  .then(res => res.json())
  .then(({ items }) => {
    console.log(items)
    return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
  })
};
// Each story then reuses that template
export const DefaultAutoComplate = Template.bind({});
DefaultAutoComplate.args = {
  renderOption: (item) => <><strong>数据：</strong><span>{item.value}</span></>,
  onSelect: (e) => console.log(e),
  fetchSuggestions: handleFetch
};
