import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test-class'
}
const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}
const GenerateMenu = (props: MenuProps) => {
    return(<Menu {...props}>
        <MenuItem index={0}>active</MenuItem>
        <MenuItem index={1}>disabled</MenuItem>
        <MenuItem index={2}>menu item</MenuItem>
    </Menu>)
}

let wrapper:RenderResult, menuElement:HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
    beforeEach(() => {
        wrapper = render(GenerateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('turnip-menu test-class')
    })
    it('click items should change active and call the right callback', () => {

    })
    it('should render vertical mode when mode is set to vertical', () => {

    })
})