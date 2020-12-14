/*
 * @Author: your name
 * @Date: 2020-12-13 18:07:58
 * @LastEditTime: 2020-12-14 10:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \technology\example\react-libraries-basic\src\components\Menu\Menu.stories.js
 */
import React from "react";
import { Meta, Story } from '@storybook/react/types-6-0';
import Menu, {MenuProps} from "./menu";
import MenuItem from "./menuItem";

export default {
  title: "Example/Menu",
  component: Menu,
  argTypes:{
    defaultIndex: {
      description: 'Set the defaultIndex of menu',
      default: 'sm',
      table: {
        type: 'string'
      }
  },
    mode: {
        description: 'Set the mode of menu',
        default: 'sm',
        table: {
          type: 'string'
        }
    }
  }
} as Meta;

const Template: Story<MenuProps> = args => (
  <Menu {...args}>
    <MenuItem>menu1</MenuItem>
    <MenuItem disabled>menu2</MenuItem>
    <MenuItem>menu3</MenuItem>
  </Menu>
);

// Each story then reuses that template
export const DefaultMenu = Template.bind({});
DefaultMenu.args = { defaultIndex: "0", mode: "vertical" };
