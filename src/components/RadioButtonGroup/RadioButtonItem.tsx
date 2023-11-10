import React from 'react';
import classNames from 'classnames';

import { RadioItemProps } from './types';

export const RadioButtonItem: React.FC<RadioItemProps> = ({
  option,
  checked,
  name,
  theme,
  onChange,
}: RadioItemProps) => {
  const {
    selectedBackGroundColor,
    selectedTextColor,
    padding,
    borderColor,
    backgroundColor,
    textColor,
    width,
  } = theme;

  return (
    <label
      key={option.id}
      className={classNames(
        'rounded',
        'cursor-pointer',
        'border',
        padding,
        borderColor,
        width,
        ...(checked ? [selectedBackGroundColor, selectedTextColor] : [backgroundColor, textColor]),
      )}
    >
      {option.value}
      <input
        type="radio"
        name={name}
        value={option.id}
        checked={checked}
        onChange={() => onChange(option)}
        className="sr-only"
      />
    </label>
  );
};
