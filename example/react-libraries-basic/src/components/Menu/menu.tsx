import React from 'react'
import classNames from 'classnames'

type mode = 'vertical' | 'horizontal' | 'inline'
export interface MenuProps{
    defaultIndex?: number;
    className?: string;
    mode?: string;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = props => {
    const { className, mode, style, children, defaultIndex } = props
    
}
