import React, { Fragment, ReactElement, InputHTMLAttributes, ChangeEvent, FC } from "react";
import classNames from "classnames";

type InputSize = "lg" | "sm";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  prefix?: string;
  suffix?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
  //1、 去取各种属性
  const { disabled, size, prefix, suffix, style, ...restProps } = props;
  // 2、根据属性去显示不同的样式
  const cnames = classNames("turnip-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prefix || suffix,
    "input-group-prefix": !!prefix,
    "input-group-suffix": !!suffix,
  });
  // 3、根据属性是否要添加特定的节点
  return (
    <Fragment>
      <div className={cnames} style={style}>
        {prefix && <div className="turnip-input-group-prefix">{prefix}</div>}
        <input
          className="turnip-input-inner"
          disabled={disabled}
          {...restProps}
        />
        {suffix && <div className="turnip-input-group-suffix">{suffix}</div>}
      </div>
    </Fragment>
  );
};

Input.defaultProps = {
    disabled: false,
    size: 'lg',
    prefix: '',
    suffix: ''
}

export default Input;
