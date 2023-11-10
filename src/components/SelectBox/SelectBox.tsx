import './SelectBox.css';
import React from 'react';
import classNames from 'classnames';

import { SelectBoxProps, SelectBoxTheme } from './types';
import { validateObjectByShape } from '../../utils';

const expectedThemeShape: SelectBoxTheme = {
  backgroundColor: '',
  borderColor: '',
  borderRadius: '',
  focusRingColor: '',
  padding: '',
  textColor: '',
  width: '',
};

export const SelectBox: React.FC<SelectBoxProps> = ({
  id,
  name,
  placeholder,
  options,
  selectedOption,
  onChange,
  required,
  theme,
}) => {
  const validatedTheme = validateObjectByShape(theme, expectedThemeShape);
  const { backgroundColor, textColor, borderColor, borderRadius, focusRingColor, padding, width } =
    validatedTheme;

  const classList = [
    backgroundColor,
    textColor,
    borderColor,
    borderRadius,
    focusRingColor,
    padding,
    width,
  ];

  function onChangeInternal(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value: nextValue } = event.target;
    const nextOption = options.find((option) => option.id == nextValue);
    onChange(nextOption!);
  }

  return (
    <select
      id={id}
      name={name}
      value={selectedOption?.id ?? ''}
      onChange={onChangeInternal}
      required={required ?? true}
      className={classNames(
        'appearance-none',
        'select-icon',
        'block',
        'border',
        'focus:ring',
        'rounded',
        ...classList,
      )}
    >
      {!selectedOption && (
        <option value="" disabled hidden>
          {placeholder ?? ''}
        </option>
      )}
      {options.map(({ id: optionId, value }) => (
        <option key={optionId} value={optionId}>
          {value}
        </option>
      ))}
    </select>
  );
};
