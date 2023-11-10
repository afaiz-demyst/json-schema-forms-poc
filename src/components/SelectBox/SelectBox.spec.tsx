import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { SelectBox } from './SelectBox';
import { SelectBoxTheme } from './types';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
];

const theme = {
  test: 'text-white',
  textColor: 'text-iron-grey',
} as unknown as SelectBoxTheme;

describe('RadioGroup Component', () => {
  it('renders options as radio buttons when button variant is passed', () => {
    const onChange = vi.fn();
    render(
      <SelectBox id="primary" name="primary" options={options} onChange={onChange} theme={theme} />,
    );

    const select = screen.getByRole('combobox');

    expect(select).toBeInTheDocument();
  });

  it('is required by default', () => {
    const onChange = vi.fn();
    render(
      <SelectBox id="primary" name="primary" options={options} onChange={onChange} theme={theme} />,
    );

    const select = screen.getByRole('combobox');

    expect(select).toBeRequired();
  });

  it('is not required if provide false', () => {
    const onChange = vi.fn();
    render(
      <SelectBox
        id="primary"
        name="primary"
        options={options}
        onChange={onChange}
        theme={theme}
        required={false}
      />,
    );

    const select = screen.getByRole('combobox');

    expect(select).not.toBeRequired();
  });

  it('does not apply invalid theme properties', () => {
    const onChange = vi.fn();
    render(
      <SelectBox
        id="primary"
        name="primary"
        options={options}
        onChange={onChange}
        theme={theme}
        required={false}
      />,
    );

    const select = screen.getByRole('combobox');

    expect(select).not.toHaveClass('text-white');
  });

  it('applies valid theme properties', () => {
    const onChange = vi.fn();
    render(
      <SelectBox
        id="primary"
        name="primary"
        options={options}
        onChange={onChange}
        theme={theme}
        required={false}
      />,
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('text-iron-grey');
    expect(select).toHaveClass('select-icon');
  });

  it('renders all the options properly', () => {
    const onChange = vi.fn();
    render(
      <SelectBox
        id="primary"
        name="primary"
        options={options}
        onChange={onChange}
        theme={theme}
        placeholder="placeholder"
      />,
    );

    const select = screen.getByRole('combobox');

    const renderedOptions = select.querySelectorAll('option');

    expect(renderedOptions[0]).toHaveTextContent('placeholder');
    expect(renderedOptions[1]).toHaveTextContent('Option 1');
    expect(renderedOptions[2]).toHaveTextContent('Option 2');
    expect(renderedOptions).toHaveLength(3);
  });

  describe('renders placeholder properly', () => {
    it('renders placeholder properly if no value is provided', () => {
      const onChange = vi.fn();
      render(
        <SelectBox
          id="primary"
          name="primary"
          options={options}
          onChange={onChange}
          theme={theme}
          placeholder="placeholder"
        />,
      );

      const select = screen.getByRole('combobox');

      const renderedOptions = select.querySelectorAll('option');

      expect(renderedOptions[0]).toHaveTextContent('placeholder');
    });

    it('does not render placeholder if it is not provided', () => {
      const onChange = vi.fn();
      render(
        <SelectBox
          id="primary"
          name="primary"
          options={options}
          onChange={onChange}
          theme={theme}
        />,
      );

      const select = screen.getByRole('combobox');

      const renderedOptions = select.querySelectorAll('option');

      expect(renderedOptions[0]).toHaveTextContent('');
    });

    it('does not render placeholder if a valid value is provided', () => {
      const onChange = vi.fn();
      render(
        <SelectBox
          id="primary"
          name="primary"
          options={options}
          onChange={onChange}
          theme={theme}
          placeholder="placeholder"
          selectedOption={options[0]}
        />,
      );

      const select = screen.getByRole('combobox');

      const renderedOptions = select.querySelectorAll('option');

      expect(renderedOptions[0]).toHaveTextContent('Option 1');
    });
  });
});
