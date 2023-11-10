export type RadioOption = {
  id: number | string;
  value: JSX.Element | string;
};

export type RadioGroupTheme = {
  backgroundColor: string;
  borderColor: string;
  borderRadius?: string;
  flex?: string;
  padding: string;
  selectedBackGroundColor: string;
  selectedTextColor: string;
  spaceBetween?: string;
  textColor: string;
  width?: string;
};

export type RadioGroupProps = {
  /**
   * The name of the radio group, useful for identifying the group in forms.
   */
  name: string;

  /**
   * A callback function that is called when an option is selected. It receives the selected option as an argument.
   */
  onChange: (option: RadioOption) => void;

  /**
   * An array of radio options to be rendered within the group.
   */
  options: RadioOption[];

  /**
   * The currently selected radio option. This option will be visually indicated as selected.
   */
  selectedOption?: RadioOption;

  /**
   * The theme configuration for styling the radio group.
   */
  theme: RadioGroupTheme;

  /**
   * The variant of the radio group, which can be 'card' or 'button'. Determines the visual structure of the options.
   */
  variant: 'card' | 'button';
};

export type RadioItemProps = {
  checked: boolean;
  name: string;
  onChange: (option: RadioOption) => void;
  option: RadioOption;
  theme: RadioGroupTheme;
};
