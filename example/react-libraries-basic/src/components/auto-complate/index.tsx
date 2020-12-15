import React, { ChangeEvent, FC, ReactElement, useState, useRef } from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import useClickOutside from "../../hooks/useClickOutside";

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplate: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [suggestions, setSugestions] = useState<DataSourceType[]>([
    { value: "333" },
    { value: "444" },
    { value: "666" },
  ]);
  const componentRef = useRef<HTMLDivElement>(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  useClickOutside(componentRef, () => setSugestions([]));
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputValue(val);
  };
  const handleSelect = (item: DataSourceType) => {
    console.log("item=====", item);
    setInputValue(item.value);
    if (onSelect) {
      onSelect(item);
    }
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.KeyCode) {
      case 13:
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      default:
        break;
    }
  };
  const generateDropdown = () => {
    return (
      <ul className="turnip-suggestion-list">
        {suggestions.map((item, index) => {
          const cnames = classNames("suggestion-item", {
            "is-active": index === highlightIndex,
          });
          return (
            <li
              key={index}
              className={cnames}
              onClick={() => handleSelect(item)}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <>
      <div className="turnip-auto-complete" ref={componentRef}>
        <Input
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...restProps}
        />
        {generateDropdown()}
      </div>
    </>
  );
};

export default AutoComplate;
