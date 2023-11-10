import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { RadioOption, RadioGroupProps } from './types';
import {
  radioButtonOptions,
  radioCardOptions,
  radioGroupTheme,
} from '../../__fixtures__/radioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithSelectedOption = ({
  name,
  variant,
  options,
  theme,
}: Partial<RadioGroupProps>) => {
  const [selectedOption, setSelectedOption] = useState<RadioOption>();
  const handleOptionChange = (option: RadioOption) => {
    setSelectedOption(option);
  };

  return (
    <RadioGroup
      variant={variant!}
      theme={theme!}
      name={name!}
      selectedOption={selectedOption}
      onChange={handleOptionChange}
      options={options!}
    />
  );
};

export const PrimaryTwoButtons: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="primary-two-button"
      theme={radioGroupTheme.primary.radioButton}
      options={radioButtonOptions.twoButtons}
      variant="button"
    />
  ),
};

export const PrimaryThreeButtons: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="primary-three-button"
      theme={radioGroupTheme.primary.radioButton}
      options={radioButtonOptions.threeButtons}
      variant="button"
    />
  ),
};

export const PrimarySingleColumnCard: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="primary-single-col-card"
      theme={radioGroupTheme.primary.radioCard}
      options={radioCardOptions.singleColumnCard}
      variant="card"
    />
  ),
};

export const PrimaryTwoColumnCards: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="primary-two-column-card"
      theme={radioGroupTheme.primary.radioCard}
      options={radioCardOptions.twoColumnCard}
      variant="card"
    />
  ),
};

export const SecondaryTwoButtons: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="secondary-two-button"
      theme={radioGroupTheme.secondary.radioButton}
      options={radioButtonOptions.twoButtons}
      variant="button"
    />
  ),
};

export const SecondarySingleColumnCard: Story = {
  render: () => (
    <RadioGroupWithSelectedOption
      name="secondary-single-col-card"
      theme={radioGroupTheme.secondary.radioCard}
      options={radioCardOptions.singleColumnCard}
      variant="card"
    />
  ),
};

export default meta;
