import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SelectBox } from './SelectBox';
import { SelectBoxOption, SelectBoxProps } from './types';
import { selectBoxTheme, selectBoxOptions } from '../../__fixtures__/selectBox';

const meta: Meta<typeof SelectBox> = {
  title: 'Components/Select Box',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SelectBox>;

const SelectBoxWithSelectedOption = ({
  name,
  id,
  options,
  placeholder,
  theme,
}: Partial<SelectBoxProps>) => {
  const [selectedOption, setSelectedOption] = useState<SelectBoxOption>();
  const handleOptionChange = (option: SelectBoxOption) => {
    setSelectedOption(option);
  };

  return (
    <SelectBox
      theme={theme!}
      id={id!}
      name={name!}
      selectedOption={selectedOption}
      onChange={handleOptionChange}
      options={options!}
      placeholder={placeholder}
    />
  );
};

export const PrimaryNoPlaceHolder: Story = {
  render: () => (
    <SelectBoxWithSelectedOption
      name="primary"
      id="primary"
      theme={selectBoxTheme.primary.selectBox}
      options={selectBoxOptions}
    />
  ),
};

export const PrimaryWithPlaceHolder: Story = {
  render: () => (
    <SelectBoxWithSelectedOption
      name="primary-placeholder"
      id="primary-placeholder"
      theme={selectBoxTheme.primary.selectBox}
      options={selectBoxOptions}
      placeholder="Select Asset Category"
    />
  ),
};

export const SecondaryyNoPlaceHolder: Story = {
  render: () => (
    <SelectBoxWithSelectedOption
      name="secondary"
      id="secondary"
      theme={selectBoxTheme.secondary.selectBox}
      options={selectBoxOptions}
    />
  ),
};

export const SecondaryWithPlaceHolder: Story = {
  render: () => (
    <SelectBoxWithSelectedOption
      name="secondary-placeholder"
      id="secondary-placeholder"
      theme={selectBoxTheme.secondary.selectBox}
      options={selectBoxOptions}
      placeholder="Select Asset Category"
    />
  ),
};

export default meta;
