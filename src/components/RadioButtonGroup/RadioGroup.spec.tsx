import { expect, describe, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { RadioGroup } from './RadioGroup';
import { RadioGroupTheme } from './types';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
];

const theme = {} as unknown as RadioGroupTheme;

describe('RadioGroup Component', () => {
  it('renders options as radio buttons when button variant is passed', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="radio-group"
        options={options}
        selectedOption={options[0]}
        onChange={onChange}
        theme={theme}
        variant="button"
      />,
    );

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(options.length);
  });

  it('calls onChange when an option is selected and variant is button', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="radio-group"
        options={options}
        selectedOption={options[0]}
        onChange={onChange}
        theme={theme}
        variant="button"
      />,
    );

    const option2 = screen.getByLabelText('Option 2');
    fireEvent.click(option2);
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });

  it('renders options as radio cards when card variant is passed', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="radio-group"
        options={options}
        selectedOption={options[0]}
        onChange={onChange}
        theme={theme}
        variant="card"
      />,
    );

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(options.length);

    const divElements = screen.getAllByText('Option', { exact: false });
    expect(divElements).toHaveLength(options.length);
  });

  it('calls onChange when an option is selected and vairant is card', () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        name="radio-group"
        options={options}
        selectedOption={options[0]}
        onChange={onChange}
        theme={theme}
        variant="card"
      />,
    );

    const divElement = screen.getByText('Option 2');
    expect(divElement).toBeInTheDocument();

    fireEvent.click(divElement);
    expect(onChange).toHaveBeenCalledWith(options[1]);
  });
});
