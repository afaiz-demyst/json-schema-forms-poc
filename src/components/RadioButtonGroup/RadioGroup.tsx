import React from 'react';
import classNames from 'classnames';

import { RadioGroupTheme, RadioGroupProps, RadioOption } from './types';
import { RadioButtonItem } from './RadioButtonItem';
import { RadioCardItem } from './RadioCardItem';
import { validateObjectByShape } from '../../utils';

const expectedThemeShape: RadioGroupTheme = {
  backgroundColor: '',
  borderColor: '',
  borderRadius: '',
  flex: '',
  padding: '',
  selectedBackGroundColor: '',
  selectedTextColor: '',
  textColor: '',
  spaceBetween: '',
  width: '',
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedOption,
  onChange,
  theme,
  variant,
}) => {
  const validatedTheme = validateObjectByShape(theme, expectedThemeShape);
  const { spaceBetween, flex } = validatedTheme;
  return (
    <div className={classNames(flex, spaceBetween)}>
      {options.map((option: RadioOption) => {
        return variant === 'card' ? (
          <RadioCardItem
            key={option.id}
            option={option}
            name={name}
            checked={selectedOption?.id === option.id}
            onChange={onChange}
            theme={validatedTheme}
          />
        ) : (
          <RadioButtonItem
            option={option}
            onChange={onChange}
            checked={selectedOption?.id === option.id}
            key={option.id}
            theme={validatedTheme}
            name={name}
          />
        );
      })}
    </div>
  );
};
