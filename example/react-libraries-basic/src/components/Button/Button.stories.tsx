import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button , { ButtonProps, ButtonType, ButtonSize } from './button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    docs: {
      description: { 
        component: 'This is button.' 
    },
      source: {
        type: 'code'
      }
    }
  },
  argTypes: {
    size: {
      description: 'Set the size of button',
      default: 'sm',
      table: {
        type: 'string'
      }
    },
    btnType: {
      description: 'Set the type of button',
      default: 'primary',
      table: {
        default: 'primary',
        type: 'string'
      }
    },
    disabled: {
      description: 'Set show or hide of button',
      table: {
        default: false,
        type: 'boolean'
      }
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { size: ButtonSize.Large, btnType:  ButtonType.Primary};
