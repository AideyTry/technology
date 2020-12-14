import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Input, InputProps } from './input'

const defaultProps: InputProps = {
    onChange: jest.fn(),
    placeholder: 'testing-input'
}

describe('test Input component', () => {
    it('should render the correct default Input', () => {
        const wrapper = render(<Input {...defaultProps}/>)
        const testNode = wrapper.getByPlaceholderText('testing-input') as HTMLInputElement
        expect(testNode).toBeInTheDocument()
        expect(testNode).toHaveClass('turnip-input-inner')
        fireEvent.change(testNode, {target: {value: '123'}})
        expect(defaultProps.onChange).toHaveBeenCalled()
        expect(testNode.value).toEqual('123')
    })
    it('should render the disabled Input on disabled property', () => {
        const wrapper = render(<Input disabled placeholder="disabled"/>)
        const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
        expect(testNode.disabled).toBeTruthy()
    })
    it('sholud render dirrerent input sizes on size property', () => {
        const wrapper = render(<Input size="lg" placeholder="sizes"/>)
        const testContainer = wrapper.container.querySelector('.turnip-input-wrapper')
        expect(testContainer).toHaveClass('input-size-lg')
    })
})