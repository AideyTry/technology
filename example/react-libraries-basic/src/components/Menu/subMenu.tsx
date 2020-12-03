import React, { useContext } from "react";
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
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })
  const renderChildren = () => {
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
      <ul className="turnip-submenu">
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
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