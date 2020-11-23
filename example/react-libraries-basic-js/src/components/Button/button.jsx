import React from "react";

const Button = (props) => {
  const { btnType, disabled, className, size, children, href, ...restProps } = props;
  console.log('props===', props)

    return (
      <button {...restProps}>
        {children}
      </button>
    );
};

Button.defaultProps = {
    disabled: false,
}

export default Button