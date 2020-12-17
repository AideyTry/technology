import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Upload, { UploadProps } from "./index";

export default {
  title: "Example/Upload",
  component: Upload,
  argTypes: {
    action: {
      description: "Set the action of Upload",
    },
    onSelect: {
      description: "Set the onSelect of Upload",
    },
  },
} as Meta;
const Template: Story<UploadProps> = (args) => {
  return <Upload {...args}></Upload>
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
  action: 'http://jsonplaceholder.typicode.com/posts'
};
