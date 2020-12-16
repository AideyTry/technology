import React, { ChangeEvent, KeyboardEvent, FC, ReactElement, useState, useRef, useEffect } from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import useClickOutside from "../../hooks/useClickOutside";
import useDebounce from '../../hooks/useDebounce'

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
  const [suggestions, setSugestions] = useState<DataSourceType[]>([]);
  const componentRef = useRef<HTMLDivElement>(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const triggerSearch = useRef(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const debouncedValue = useDebounce(inputValue, 300)

  useClickOutside(componentRef, () => setShowDropdown(false));

  useEffect(() => {
    if(debouncedValue && triggerSearch.current){
      setSugestions([])
      const results = fetchSuggestions(debouncedValue)
      if(results instanceof Promise){
        results.then(data => {
          setSugestions(data)
          if(data.length > 0){
            setShowDropdown(true)
          }
        })
      } else {
        setSugestions(results)
        if(results.length > 0){
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debouncedValue, fetchSuggestions])
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setInputValue(val);
    triggerSearch.current = true
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if(suggestions[highlightIndex]){
          handleSelect(suggestions[highlightIndex])
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };
  const generateDropdown = () => {
    return (
      showDropdown && <ul className="turnip-suggestion-list">
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
