import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps, ButtonType } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = () => <Button btnType={ButtonType.Primary}>Primary</Button>

export const Danger = Template.bind({});
Danger.args = {
    btnType: ButtonType.Danger
};

export const Link = Template.bind({});
Link.args = {
    btnType: ButtonType.Link
};