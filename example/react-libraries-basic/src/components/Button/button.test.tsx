import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

const defaultProps = {
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
    })
    it('should render the correct component based on different props', () => {

    })
    it('should render a link when btnType equals link and href is provided', () => {

    })
    it('should render disabled button when disabled set to true', () => {})
})