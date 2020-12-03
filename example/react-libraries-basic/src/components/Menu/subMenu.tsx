import React, { useState, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps{
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, title, children, className } = props
  const [menuOpen, setOpen] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer:any
  const handleMouse = (e: React.MouseEvent, toggle:boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('turnip-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem'){
        return childElement
      } else {
        console.error('Wrarning: Menu has a child which is not a MenuItem component.')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {
        renderChildren()
      }
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu