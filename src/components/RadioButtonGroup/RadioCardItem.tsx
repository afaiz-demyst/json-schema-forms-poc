import React from 'react';
import classNames from 'classnames';

import { RadioItemProps } from './types';

export const RadioCardItem: React.FC<RadioItemProps> = ({
  option,
  name,
  checked,
  onChange,
  theme,
}) => {
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
    <div
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
      onClick={() => onChange(option)}
    >
      <div className={`flex items-center`}>
        <input
          type="radio"
          className="hidden"
          name={name}
          id={String(option.id)}
          checked={checked}
          readOnly
        />
        {option.value}
      </div>
    </div>
  );
};
