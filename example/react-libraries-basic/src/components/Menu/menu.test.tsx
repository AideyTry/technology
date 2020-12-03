import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup
} from "@testing-library/react";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test-class"
};
const testVerProps: MenuProps = {
  defaultIndex: "0",
  mode: "vertical"
};
const GenerateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>menu item</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
            drop1
        </MenuItem>
        <MenuItem>drop2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleFile = () => {
    const cssFile: string = `
    .turnip-submenu{
        display: none;
    }
    .turnip-submenu.menu-opened{
        display: block;
      }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(GenerateMenu(testProps));
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("turnip-menu test-class");
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("menu item");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });
  it("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    wrapper = render(GenerateMenu(testVerProps));
    menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
  it("should show dropdown items when hover on subMenu", async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await await(() => {
        expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop2'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-1')
  })
});
